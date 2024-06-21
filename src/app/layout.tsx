"use client";

import { useEffect, useMemo, useState } from "react";
import { Wallet } from "@/lib/near";
import { Ethereum } from "@/lib/ethereum";

import "@/app/globals.css";
import { NearContext } from "@/context/near-context";
import { Navigation } from "@/components/navigation/navigation";
import { NearNetworkId, MultiChainContract, EthereumRpcUrl, EthereumChainId, BitcoinNetwork, BitcoinRpcUrl } from "@/config";
import { AccountsProvider } from "@/context/accounts-reducer-context";
import { Bitcoin } from "@/lib/bitcoin";

const wallet = new Wallet({ networkId: NearNetworkId, createAccessKeyFor: MultiChainContract });

// Layout Component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [signedAccountId, setSignedAccountId] = useState<string>("");
  const ethereum = useMemo(() => new Ethereum(EthereumRpcUrl, EthereumChainId), []);
  const bitcoin = useMemo(() => new Bitcoin(BitcoinRpcUrl, BitcoinNetwork), []);
  const nearContextValue = useMemo(() => ({ wallet, signedAccountId, ethereum, bitcoin }), [signedAccountId]);

  useEffect(() => {
    wallet.startUp(setSignedAccountId);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>NEAR Hub Demo</title>
        <link rel="icon" href="/near.svg" type="image/svg+xml" />
      </head>
      <body>
        <NearContext.Provider value={nearContextValue}>
          <AccountsProvider>
            <Navigation />
            {children}
          </AccountsProvider>
        </NearContext.Provider>
      </body>
    </html>
  );
}
