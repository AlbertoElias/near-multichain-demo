export const NearNetworkId = "testnet";
export const MultiChainContract = "v2.multichain-mpc.testnet";
export const GasStationContract = "canhazgas.testnet";
export const EthereumChainId = 11155111; // Sepolia
export const EthereumRpcUrl = "https://rpc2.sepolia.org";
export const BitcoinRpcUrl = "https://blockstream.info/testnet/api";
export const BitcoinNetwork = "testnet";
export type NETWORK = "near" | "ethereum" | "bitcoin";
export const FiatConvertAPI = "https://api.coinconvert.net/convert/";
export const SignificantDigits = 4;

interface TokenInfoInterface {
  symbol: string;
  decimals: number;
}
export const TokenInfo : { [network: string]: TokenInfoInterface } = {
  "near": {
    "symbol": "NEAR",
    "decimals": 24,
  },
  "ethereum": {
    "symbol": "ETH",
    "decimals": 18,
  },
  "bitcoin": {
    "symbol": "BTC",
    "decimals": 8,
  },
}