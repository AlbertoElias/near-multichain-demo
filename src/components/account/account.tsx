import { useEffect, useContext, useState, useCallback } from "react";
import { utils } from "near-api-js";
import Image from "next/image";
import { formatUnits } from "ethers";

import styles from "./account.module.css";
import { NearContext } from "@/context/near-context";
import { Account } from "@/context/accounts-reducer-context";
import { FiatConvertAPI, SignificantDigits } from "@/config";
import { trimAddress } from "@/lib/utils";

export interface BalanceUpdate {
  usd: string;
  token: string;
}

function getToken(network: string) {
  switch (network) {
    case "ethereum":
      return "ETH";
    case "bitcoin":
      return "BTC";
    default:
      return "NEAR";
  }
}

export const AccountView = ({
  account,
  onBalanceUpdate
} : {
  account: Account;
  onBalanceUpdate?: (id: string, balance: BalanceUpdate) => void;
}) => {
  const { wallet, ethereum, bitcoin } = useContext(NearContext);
  const [balance, setBalance] = useState("");
  const [formattedBalance, setFormattedBalance] = useState("");
  const [usd, setUsd] = useState("");
  const [tokenUsd, setTokenUsd] = useState("0");
  const [isLoading, setIsLoading] = useState(false);

  const updateBalance = useCallback(async (initialLoad = false) => {
    // Only show loading spinner on first load, as we already have a value shown during subsequent fetches
    if (initialLoad) setIsLoading(true);
    
    try {
      let balance = "";
      let formattedBalance = "";
      switch (account.network) {
        case "near":
          if (wallet) {
            balance = await wallet.getBalance(account.id);
            formattedBalance = utils.format.formatNearAmount(balance, SignificantDigits);
          }
          break;
        case "ethereum":
          if (ethereum) {
            balance = (await ethereum.getBalance(account.id)).toString();
            formattedBalance = formatUnits(balance, 18);
          }
          break;
        case "bitcoin":
          if (bitcoin) {
            balance = await bitcoin.getBalance(account.id);
            formattedBalance = bitcoin.satoshiToBTC(Number(balance)).toString();
          }
          break;
      }
      setBalance(balance);
      setFormattedBalance(formattedBalance);
    } catch (error) {
      console.warn(error);
    } finally {
      setIsLoading(false);
    }
  }, [account, wallet, ethereum, bitcoin]);

  // Fetch token to USD conversion rate and cache it
  const fetchTokenToUsd = useCallback(async () => {
    const apiUrl = `${FiatConvertAPI}${getToken(account.network)}/usd?amount=1`;
    const ratio = await fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          return data.USD;
        } else {
          return "0";
        }
      })
      .catch(() => "0");
    setTokenUsd(ratio);
  }, [account.network]);

  useEffect(() => {
    fetchTokenToUsd();
  }, [fetchTokenToUsd]);

  // Poll balance every 5 seconds to make sure it's up to date
  useEffect(() => {
    updateBalance(true);
    const interval = setInterval(updateBalance, 5000);
    return () => clearInterval(interval);
  }, [updateBalance]);

  useEffect(() => {
    if (formattedBalance === "") return;
    const tokenToUsd = parseFloat(formattedBalance) * parseFloat(tokenUsd);
    const formattedUsd = tokenToUsd.toFixed(2);
    setUsd(formattedUsd)
    onBalanceUpdate && onBalanceUpdate(account.id, {
      usd: tokenToUsd.toString(),
      token: balance
    });
  }, [balance, formattedBalance, tokenUsd]);

  return (
    <div className={styles.account}>
      <div className={styles.accountIconWrapper}>
        <Image className={styles.logo} src={`/${account.network}.svg`} alt={account.network} width="24" height="24" />
      </div>
      <div className={styles.accountInfo}>
        <p className={styles.accountName}>
          <span className={styles.accountNamePrimary}>
            {account.network === "near" ? account.id : account.name}
          </span>
          {account.network !== "near" && <span className={styles.accountNameSecondary}>({trimAddress(account.id)})</span>}
        </p>
        <p className={styles.network}>{account.network}</p>
      </div>
      <div className={`${styles.accountBalanceWrapper} ${isLoading && "loading"}`}>
        {!isLoading && <p className={styles.accountBalance}>{formattedBalance}</p>}
        {!isLoading && <p className={styles.accountUsd}>{`USD ${usd}`}</p>}
        <span className="spinner"></span>
      </div>
    </div>
  );
};