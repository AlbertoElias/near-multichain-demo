"use client";

import { useContext, useEffect } from "react";
import styles from "./app.module.css";
import AccountsContainer from "@/components/accounts-container/accounts-cointainer";
import { AccountsContext } from "@/context/accounts-reducer-context";
import { NearContext } from "@/context/near-context";

export default function Home() {
  const { state, dispatch } = useContext(AccountsContext);
  const { signedAccountId } = useContext(NearContext);

  // If signing in with a Near account for the first time, add it to the list of accounts
  useEffect(() => {
    if (signedAccountId && state && !state.find((account) => account.id === signedAccountId)) {
      dispatch({
        type: "ADD_ACCOUNT",
        account: {
          network: "near",
          id: signedAccountId
        }
      });
    }
  }, [state, signedAccountId, dispatch]);

  return (
    <main className={styles.main}>
      <p className={styles.description}>Welcome to your multichain hub! With a Near account, you can access other chains like Ethereum and Bitcoin.</p>
      {!signedAccountId && <p className={styles.description}>To get started, sign in with your Near account and add an Ethereum or Bitcoin account.</p>}
      {!signedAccountId && <p className={styles.description}>If you don"t have a Near wallet, the easiest thing is to create one at <a href="https://testnet.mynearwallet.com/" target="_blank">My Near Wallet</a>.</p>}
      <p className={styles.description}>Use <a href="https://near-faucet.io/" target="_blank">this faucet</a> if you need some testnet tokens.</p>
      {signedAccountId && <AccountsContainer />}
    </main>
  );
}