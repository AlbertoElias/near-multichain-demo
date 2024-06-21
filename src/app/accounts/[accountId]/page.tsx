"use client";

import { useCallback, useContext, useMemo, useState } from "react";
import { parseUnits } from "ethers";
import { FeeMarketEIP1559Transaction } from "@ethereumjs/tx";
import { AccountsContext } from "@/context/accounts-reducer-context";
import styles from "./page.module.css";
import { AccountView } from "@/components/account/account";
import AmountInput from "@/components/amount-input/amount-input";
import { getValidAmountRegex } from "@/lib/utils";
import { MultiChainContract, TokenInfo } from "@/config";
import { NearContext } from "@/context/near-context";
import Main from "@/components/main-container/main-container";
import Container from "@/components/container/container";

export default function Page({
  params
} : {
  params: {
    accountId: string;
  }
}) {
  const { wallet, ethereum, bitcoin } = useContext(NearContext);
  const { state } = useContext(AccountsContext);
  const account = state.find((account) => account.id === params.accountId);
  const [toAddress, setToAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [inputValue, setInputValue] = useState("0");
  const [inputAmount, setInputAmount] = useState(BigInt(0));
  const [signedTransaction, setSignedTransaction] = useState<FeeMarketEIP1559Transaction | null>(null);
  const [invalidAmount, setInvalidAmount] = useState(false);
  const [fundsExceeded, setFundsExceeded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toastText, setToastText] = useState("");
  const [txState, setTxState] = useState("");
  const [error, setError] = useState("");
  const [successUrl, setSuccessUrl] = useState("");

  const token = useMemo(() => {
    if (account) {
      return TokenInfo[account.network]
    }
  }, [account]);

  const copyAddress = useCallback(() => {
    if (account) {
      navigator.clipboard.writeText(account.id);
      setToastText("Copied Address!");
      setTimeout(() => setToastText(""), 1000);
    }
  }, [account]);

  const getButtonText = useCallback(() => {
    if (invalidAmount) return "Invalid Amount";
    if (fundsExceeded) return "Insufficient Funds";
    if (isLoading) return "";
    return "Send";
  }, [invalidAmount, fundsExceeded, isLoading]);

  // When the amount input changes, validate that it's a valid amount
  const handleInputChange = useCallback(async (newValue: string) => {
    if (!account || !token) return;
    const validAmountRegex = getValidAmountRegex(token.decimals || 0);
    if (!validAmountRegex.test(newValue)) return;
  
    // Removes leading 0s unless it's a decimal number
    const valueWithoutLeadingZeros = newValue.replace(/^(0(?!\.))+/, '');
    const value = valueWithoutLeadingZeros.length > 0 ? valueWithoutLeadingZeros : "0";
    const newAmount = parseUnits(value, token.decimals);

    setInputValue(value);
    setInputAmount(newAmount);

    const isNewAmountExceedingFunds = newAmount > BigInt(balance);
    isNewAmountExceedingFunds ? setFundsExceeded(true) : setFundsExceeded(false);
    const isAmountNegative = newAmount < BigInt(0);
    isAmountNegative ? setInvalidAmount(true) : setInvalidAmount(false);
  }, [account, token, balance]);

  const sendTx = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!account) return;
    if (fundsExceeded || invalidAmount) return;
    setError("");
    setSuccessUrl("");

    setIsLoading(true);
    try {
      switch (account.network) {
        case "near":
          if (wallet) {
            await wallet.send(toAddress, inputAmount.toString());
          }
          break;
        case "ethereum":
          if (ethereum && wallet && account.name) {
            const { transaction, payload } = await ethereum.createPayload(account.id, toAddress, Number(inputValue));
            const signedTransaction = await ethereum.requestSignatureToMPC(wallet, MultiChainContract, account.name, payload, transaction, account.id);
            setSignedTransaction(signedTransaction);
            setTxState("relay")
          }
          break;
        case "bitcoin":
          if (bitcoin && wallet && account.name && account.publicKey) {
            const satoshis = bitcoin.btcToSatoshi(Number(inputValue));
            const payload = await bitcoin.createPayload(account.id, toAddress, satoshis);
            const publicKey = Buffer.from(account.publicKey, "hex");
            const signedTransaction = await bitcoin.requestSignatureToMPC(wallet, MultiChainContract, account.name, payload, publicKey);
            setSignedTransaction(signedTransaction);
            setTxState("relay")
          }
          break;
      }
    } catch (error) {
      console.error("Failed to send transaction:", error);
      setError("Failed to send transaction");
    } finally {
      setIsLoading(false);
    }
  }, [account, inputAmount, toAddress, fundsExceeded, invalidAmount]);

  const relayTransaction = useCallback(async () => {
    if (!account) return;
    if (txState !== "relay") return;
    if (!signedTransaction) return;

    setIsLoading(true);
    try {
      let explorerUrl = "";
      switch (account.network) {
        case "ethereum":
          if (ethereum) {
            const txHash = await ethereum.relayTransaction(signedTransaction);
            explorerUrl = `https://sepolia.etherscan.io/tx/${txHash}`;
          }
          break;
        case "bitcoin":
          if (bitcoin) {
            const txHash = await bitcoin.relayTransaction(signedTransaction);
            explorerUrl = `https://blockstream.info/testnet/tx/${txHash}`;
          }
          break;
      }
      setSuccessUrl(explorerUrl);
    } catch (error) {
      console.error("Failed to relay transaction:", error);
      setError("Failed to relay transaction");
      setTxState("");
      setSignedTransaction(null);
    } finally {
      setIsLoading(false);
    }
  }, [account, txState, signedTransaction]);

  if (!account) {
    return <div className="loading"><p className="spinner"></p></div>
  }

  return (
    <Main>
      <Container style={{ position: "relative" }}>
        <div className={styles.accountWrapper} onClick={copyAddress}>
          <AccountView account={account} onBalanceUpdate={(_, newBalance) => setBalance(newBalance.token)} />
        </div>

        <form className={styles.form} onSubmit={sendTx}>
          <div className={styles.formGroup}>
            <label className={styles.label}>To</label>
            <input className={styles.input} value={toAddress} onChange={(event) => setToAddress(event.target.value)} required={true} />
          </div>

          <div className={styles.formGroup}>
            <AmountInput inputValue={inputValue} amountInputChange={(event) => handleInputChange(event.target.value)} />
          </div>

          {txState !== "relay" &&
            <button
              className={`${styles.button} ${isLoading && "loading"}`}
              type="submit"
              disabled={isLoading || fundsExceeded || invalidAmount}
            >
              <span className={styles.buttonText}>{getButtonText()}</span>
              <span className="spinner"></span>
            </button>
          }
        </form>
        {txState === "relay" &&
          <button className={`${styles.button} ${isLoading && "loading"}`} onClick={relayTransaction}>
            {!isLoading && <span className={styles.buttonText}>Relay Transaction To Complete</span>}
            <span className="spinner"></span>
          </button>}
        <p className={`${styles.toast} ${toastText.length ? styles.toastVisible : ""}`}>{toastText}</p>
        {error.length > 0 && <p className={styles.error}>{error}</p>}
        {successUrl.length > 0 && <a href={successUrl} className={styles.successLink}>Success! View Transaction</a>}
      </Container>
    </Main>
  )
}