import axios from "axios";
import * as ethers from "ethers";
import * as bitcoin from "bitcoinjs-lib";
import { deriveChildPublicKey, najPublicKeyStrToUncompressedHexPoint, uncompressedHexPointToBtcAddress } from "@/lib/kdf";

export class Bitcoin {
  chain_rpc: string;
  network: bitcoin.Network;
  /**
   * Initializes a new instance of the `Bitcoin` class.
   *
   * @param {string} chain_rpc - The URL of the Bitcoin Core RPC endpoint.
   * @param {string} network - The network to use. Either "mainnet" or "testnet".
   */
  constructor(chain_rpc: string, network: string) {
    this.chain_rpc = chain_rpc;
    this.network = network === "testnet" ? bitcoin.networks.testnet : bitcoin.networks.bitcoin;
  }

  async deriveAddress(accountId: string, derivation_path: string) {
    const publicKey = await deriveChildPublicKey(najPublicKeyStrToUncompressedHexPoint(), accountId, derivation_path);
    const address = await uncompressedHexPointToBtcAddress(publicKey, this.network);
    return { publicKey: Buffer.from(publicKey, "hex"), address };
  }

  async getBalance(address: any) {
    const response = await axios.get(
      `${this.chain_rpc}/address/${address}/utxo`
    );
    const balance = response.data.reduce((acc: any, utxo: { value: any; }) => acc + utxo.value, 0);
    return balance;
  }

  async createPayload(sender: any, receiver: any, satoshis: any) {
    const utxos = await this.fetchUTXOs(sender);
    const feeRate = await this.fetchFeeRate();

    const psbt = new bitcoin.Psbt({ network: this.network });

    let totalInput = 0;
    await Promise.all(
      utxos.map(
        async (utxo: { value: number; txid: string; vout: string | number; }) => {
          totalInput += utxo.value;

          const transaction = await this.fetchTransaction(utxo.txid);
          const inputOptions = transaction.outs[utxo.vout as number].script.includes("0014") ?
            {
              hash: utxo.txid,
              index: utxo.vout as number,
              witnessUtxo: {
                script: transaction.outs[utxo.vout as number].script,
                value: utxo.value,
              },
            } :
            {
              hash: utxo.txid,
              index: utxo.vout as number,
              nonWitnessUtxo: Buffer.from(transaction.toHex(), "hex"),
            }

          psbt.addInput(inputOptions);
        })
    );

    psbt.addOutput({
      address: receiver,
      value: Number(satoshis),
    });

    const estimatedSize = utxos.length * 148 + 2 * 34 + 10;
    const fee = Math.ceil(estimatedSize * (feeRate + 3));

    const change = totalInput - Number(satoshis) - fee;
    if (change > 0) {
      psbt.addOutput({
        address: sender,
        value: change,
      });
    }

    return { psbt, utxos };
  }

  async requestSignatureToMPC(wallet: { callMethod: (arg0: { contractId: any; method: string; args: { payload: number[]; path: any; key_version: number; }; gas: string; }) => PromiseLike<[any, any]> | [any, any]; }, contractId: any, path: any, btcPayload: { psbt: any; utxos: any; }, publicKey: any) {
    const { psbt, utxos } = btcPayload;

    // Bitcoin needs to sign multiple utxos, so we need to pass a signer function
    const sign = async (tx: ethers.ethers.BytesLike) => {
      const payload = Array.from(ethers.getBytes(tx)).reverse();
      const [big_r, big_s] = await wallet.callMethod({ contractId, method: "sign", args: { payload, path, key_version: 0 }, gas: "250000000000000" });
      return this.reconstructSignature(big_r, big_s);
    }

    await Promise.all(
      utxos.map(async (_: any, index: any) => {
        await psbt.signInputAsync(index, { publicKey, sign });
      })
    );

    psbt.finalizeAllInputs();

    return psbt.extractTransaction().toHex()
  }

  reconstructSignature(big_r: string, big_s: string) {
    const r = big_r.slice(2).padStart(64, "0");
    const s = big_s.padStart(64, "0");

    const rawSignature = Buffer.from(r + s, "hex");

    if (rawSignature.length !== 64) {
      throw new Error("Invalid signature length.");
    }

    return rawSignature;
  }

  // This code can be used to actually relay the transaction to the Ethereum network
  async relayTransaction(signedTransaction: any, useProxy = true) {
    const proxy = useProxy ? "https://corsproxy.io/?" : "";

    const response = await axios.post(
      `${proxy}${this.chain_rpc}/tx`,
      signedTransaction
    );
    return response.data
  }

  /**
   * Converts a value from satoshis to bitcoins.
   *
   * @param {number} satoshi - The amount in satoshis to convert.
   * @returns {number} The equivalent amount in bitcoins.
   */
  static toBTC(satoshi: number) {
    return satoshi / 100000000;
  }

  /**
   * Converts a value from bitcoins to satoshis.
   *
   * @param {number} btc - The amount in bitcoins to convert.
   * @returns {number} The equivalent amount in satoshis.
   */
  static toSatoshi(btc: number) {
    return Number(btc * 100000000);
  }

  /**
   * Fetches the current fee rate from the Bitcoin network.
   * This method queries the RPC endpoint for fee estimates and returns the fee rate
   * expected for a transaction to be confirmed within a certain number of blocks.
   * The confirmation target is set to 6 blocks by default, which is commonly used
   * for a balance between confirmation time and cost.
   *
   * @returns {Promise<number>} A promise that resolves to the fee rate in satoshis per byte.
   * @throws {Error} Throws an error if the fee rate data for the specified confirmation target is missing.
   */
  async fetchFeeRate() {
    const response = await axios.get(`${this.chain_rpc}/fee-estimates`);
    const confirmationTarget = 6;
    return response.data[confirmationTarget];
  }

  /**
   * Fetches the Unspent Transaction Outputs (UTXOs) for a given Bitcoin address.
   *
   * @param {string} address - The Bitcoin address for which to fetch the UTXOs.
   * @returns {Promise<Array<{ txid: string; vout: number; value: number }>>} A promise that resolves to an array of UTXOs.
   * Each UTXO is represented as an object containing the transaction ID (`txid`), the output index within that transaction (`vout`),
   * and the value of the output in satoshis (`value`).
   */
  async fetchUTXOs(address: any) {
    const response = await axios.get(
      `${this.chain_rpc}/address/${address}/utxo`
    );

    const utxos = response.data.map((utxo: { txid: any; vout: any; value: any; script: any; }) => ({
      txid: utxo.txid,
      vout: utxo.vout,
      value: utxo.value,
      script: utxo.script,
    }));
    return utxos;
  }

  /**
   * Fetches a Bitcoin transaction by its ID and constructs a transaction object.
   * This function retrieves the transaction details from the blockchain using the RPC endpoint,
   * then parses the input and output data to construct a `bitcoin.Transaction` object.
   *
   * @param {string} transactionId - The ID of the transaction to fetch.
   * @returns {Promise<bitcoin.Transaction>} A promise that resolves to a `bitcoin.Transaction` object representing the fetched transaction.
   */
  async fetchTransaction(transactionId: any) {
    const { data } = await axios.get(
      `${this.chain_rpc}/tx/${transactionId}`
    );
    const tx = new bitcoin.Transaction();

    tx.version = data.version;
    tx.locktime = data.locktime;

    data.vin.forEach((vin: { txid: WithImplicitCoercion<string> | { [Symbol.toPrimitive](hint: "string"): string; }; vout: any; sequence: any; scriptsig: WithImplicitCoercion<string> | { [Symbol.toPrimitive](hint: "string"): string; }; }) => {
      const txHash = Buffer.from(vin.txid, "hex").reverse();
      const vout = vin.vout;
      const sequence = vin.sequence;
      const scriptSig = vin.scriptsig
        ? Buffer.from(vin.scriptsig, "hex")
        : undefined;
      tx.addInput(txHash, vout, sequence, scriptSig);
    });

    data.vout.forEach((vout: { value: any; scriptpubkey: WithImplicitCoercion<string> | { [Symbol.toPrimitive](hint: "string"): string; }; }) => {
      const value = vout.value;
      const scriptPubKey = Buffer.from(vout.scriptpubkey, "hex");
      tx.addOutput(scriptPubKey, value);
    });

    data.vin.forEach((vin: { witness: any[]; }, index: number) => {
      if (vin.witness && vin.witness.length > 0) {
        const witness = vin.witness.map((w: WithImplicitCoercion<string> | { [Symbol.toPrimitive](hint: "string"): string; }) => Buffer.from(w, "hex"));
        tx.setWitness(index, witness);
      }
    });

    return tx;
  }
}