import { createContext } from "react";
import { Wallet } from "@/lib/near";
import { Ethereum } from "@/lib/ethereum";
import { Bitcoin } from "@/lib/bitcoin";
import { BitcoinNetwork, BitcoinRpcUrl, EthereumChainId, EthereumRpcUrl } from "@/config";

interface NearContextInterface {
  wallet?: Wallet | undefined;
  signedAccountId: string;
  ethereum: Ethereum;
  bitcoin: Bitcoin;
}

/**
 * @typedef NearContext
 * @property {import("./wallets/near").Wallet} wallet Current wallet
 * @property {string} signedAccountId The AccountId of the signed user
 */
/** @type {import ("react").Context<NearContext>} */
export const NearContext = createContext<NearContextInterface>({
  wallet: undefined,
  signedAccountId: "",
  ethereum: new Ethereum(EthereumRpcUrl, EthereumChainId),
  bitcoin: new Bitcoin(BitcoinRpcUrl, BitcoinNetwork),
});