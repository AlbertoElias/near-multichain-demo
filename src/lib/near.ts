// near api js
import { providers } from "near-api-js";

// wallet selector
import { distinctUntilChanged, map } from "rxjs";
import "@near-wallet-selector/modal-ui/styles.css";
import { setupModal } from "@near-wallet-selector/modal-ui";
import { NetworkId, WalletSelector, setupWalletSelector } from "@near-wallet-selector/core";
import { setupHereWallet } from "@near-wallet-selector/here-wallet";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { AccountView, CodeResult } from "near-api-js/lib/providers/provider";

interface ViewMethodOptions {
  contractId: string,
  method: string,
  args?: Object,
}

interface CallMethodOptions {
  contractId: string,
  method: string,
  args?: Object,
  gas?: string,
  deposit?: string,
}

const THIRTY_TGAS = "30000000000000";
const NO_DEPOSIT = "0";

export class Wallet {
  createAccessKeyFor: string;
  networkId: NetworkId;
  selector: WalletSelector | undefined;
  /**
   * @constructor
   * @param {Object} options - the options for the wallet
   * @param {NetworkId} options.networkId - the network id to connect to
   * @param {string} options.createAccessKeyFor - the contract to create an access key for
   * @example
   * const wallet = new Wallet({ networkId: "testnet", createAccessKeyFor: "contractId" });
   * wallet.startUp((signedAccountId) => console.log(signedAccountId));
   */
  constructor({ networkId = "testnet", createAccessKeyFor = "" }) {
    this.createAccessKeyFor = createAccessKeyFor;
    this.networkId = networkId as NetworkId;
  }

  /**
   * To be called when the website loads
   * @param {Function} accountChangeHook - a function that is called when the user signs in or out#
   * @returns {Promise<string>} - the accountId of the signed-in user 
   */
  startUp = async (accountChangeHook: (value: string) => void) => {
    this.selector = await setupWalletSelector({
      network: this.networkId,
      modules: [setupMyNearWallet(), setupHereWallet()]
    });

    const isSignedIn = this.selector.isSignedIn();
    const accountId = isSignedIn ? this.selector.store.getState().accounts[0].accountId : "";

    this.selector.store.observable
      .pipe(
        map(state => state.accounts),
        distinctUntilChanged()
      )
      .subscribe(accounts => {
        const signedAccount = accounts.find((account) => account.active)?.accountId;
        accountChangeHook(signedAccount || "");
      });

    return accountId;
  };

  /**
   * Displays a modal to login the user
   */
  signIn = async () => {
    if (!this.selector) throw new Error("Wallet Selector not initialized");
    const modal = setupModal(this.selector, { contractId: this.createAccessKeyFor || "" });
    modal.show();
  };

  /**
   * Logout the user
   */
  signOut = async () => {
    if (!this.selector) throw new Error("Wallet Selector not initialized");
    const selectedWallet = await this.selector.wallet();
    selectedWallet.signOut();
  };

  getBalance = async (accountId: string) => {
    if (!this.selector) throw new Error("Wallet Selector not initialized");
    const { network } = this.selector.options;
    const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });

    const account = await provider.query<AccountView>({
      request_type: "view_account",
      finality: "final",
      account_id: accountId,
    });

    return account.amount;
  }

  /**
   * Makes a read-only call to a contract
   * @param {Object} options - the options for the call
   * @param {string} options.contractId - the contract"s account id
   * @param {string} options.method - the method to call
   * @param {Object} options.args - the arguments to pass to the method
   * @returns {Promise<JSON.value>} - the result of the method call
   */
  viewMethod = async ({ contractId, method, args = {} }: ViewMethodOptions) => {
    const url = `https://rpc.${this.networkId}.near.org`;
    const provider = new providers.JsonRpcProvider({ url });

    let res = await provider.query<CodeResult>({
      request_type: "call_function",
      account_id: contractId,
      method_name: method,
      args_base64: Buffer.from(JSON.stringify(args)).toString("base64"),
      finality: "optimistic",
    });
    return JSON.parse(Buffer.from(res.result).toString());
  };

  /**
   * Makes a call to a contract
   * @param {Object} options - the options for the call
   * @param {string} options.contractId - the contract"s account id
   * @param {string} options.method - the method to call
   * @param {Object} options.args - the arguments to pass to the method
   * @param {string} options.gas - the amount of gas to use
   * @param {string} options.deposit - the amount of yoctoNEAR to deposit
   * @returns {Promise<Transaction>} - the resulting transaction
   */
  callMethod = async ({ contractId, method, args = {}, gas = THIRTY_TGAS, deposit = NO_DEPOSIT }: CallMethodOptions) => {
    if (!this.selector) throw new Error("Wallet Selector not initialized");
    // Sign a transaction with the "FunctionCall" action
    const selectedWallet = await this.selector.wallet();
    const outcome = await selectedWallet.signAndSendTransaction({
      receiverId: contractId,
      actions: [
        {
          type: "FunctionCall",
          params: {
            methodName: method,
            args,
            gas,
            deposit,
          },
        },
      ],
    });

    if (outcome) {
      return providers.getTransactionLastResult(outcome);
    } else {
      throw new Error("Transaction outcome is undefined.");
    }
  };

  /**
   * Makes a call to a contract
   * @param {string} txhash - the transaction hash
   * @returns {Promise<JSON.value>} - the result of the transaction
   */
  getTransactionResult = async (txhash: string | Uint8Array) => {
    if (!this.selector) throw new Error("Wallet Selector not initialized");
    const { network } = this.selector.options;
    const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });

    // Retrieve transaction result from the network
    const transaction = await provider.txStatus(txhash, "unnused");
    return providers.getTransactionLastResult(transaction);
  };
}