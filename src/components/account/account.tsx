import { useEffect, useContext, useState, useCallback, useMemo } from "react";
import { utils } from "near-api-js";
import Image from "next/image";

import styles from "./account.module.css";
import { NearContext } from "@/context/near-context";
import { Account } from "@/context/accounts-reducer-context";
import { FiatConvertAPI } from "@/config";
import { trimAddress } from "@/lib/utils";

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
  onBalanceUpdate: (id: string, balance: string) => void;
}) => {
  const { wallet, ethereum, bitcoin } = useContext(NearContext);
  const [balance, setBalance] = useState("");
  const [usd, setUsd] = useState("");
  const [tokenUsd, setTokenUsd] = useState("0");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const updateBalance = useCallback(async (initialLoad = false) => {
    if (initialLoad) setIsLoading(true);
    
    try {
      let balance = "";
      switch (account.network) {
        case "near":
          if (wallet) {
            const nearBalance = await wallet.getBalance(account.id);
            balance = utils.format.formatNearAmount(nearBalance, 4);
          }
          break;
        case "ethereum":
          if (ethereum) {
            const ethBalance = await ethereum.getBalance(account.id);
            balance = ethBalance.toString();
          }
          break;
        case "bitcoin":
          if (bitcoin) {
            const btcBalance = await bitcoin.getBalance(account.id);
            balance = btcBalance.toString();
          }
          break;
      }
      setBalance(balance);
    } catch (error) {
      console.warn(error);
    } finally {
      setIsLoading(false);
    }
  }, [account, wallet, ethereum, bitcoin]);

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

  useEffect(() => {
    updateBalance(true);
    const interval = setInterval(updateBalance, 5000);
    return () => clearInterval(interval);
  }, [updateBalance]);

  useEffect(() => {
    if (balance === "") return;
    const tokenToUsd = parseFloat(balance) * parseFloat(tokenUsd);
    const formattedUsd = tokenToUsd.toFixed(2);
    setUsd(formattedUsd)
    onBalanceUpdate(account.id, tokenToUsd.toString());
  }, [balance, tokenUsd]);

  function copyAddress() {
    navigator.clipboard.writeText(account.id);
    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), 1000);
  }

  return (
    <div className={styles.account} onClick={copyAddress}>
      <div className={styles.accountIconWrapper}>
        <Image className={styles.logo} src={`/${account.network}.svg`} alt={account.network} width="24" height="24" />
      </div>
      <div className={styles.accountInfo}>
        <p className={styles.accountName}>
          <span className={styles.accountNamePrimary}>
            {account.network === "near" ? account.id : account.name}
          </span>
          {account.network !== "near" && <span className={styles.accountNameSecondary}>{trimAddress(account.id)}</span>}
        </p>
        <p className={styles.network}>{account.network}</p>
      </div>
      <div className={`${styles.accountBalanceWrapper} ${isLoading && "loading"}`}>
        {!isLoading && <p className={styles.accountBalance}>{balance}</p>}
        {!isLoading && <p className={styles.accountUsd}>{`USD ${usd}`}</p>}
        <span className="spinner"></span>
      </div>
      <p className={`${styles.toast} ${isToastVisible ? styles.toastVisible : ""}`}>Copied Address!</p>
    </div>
  );
};