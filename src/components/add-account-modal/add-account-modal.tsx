import { useContext, useState } from "react";
import Modal from "react-modal";

import styles from "./add-account-modal.module.css";
import { NETWORK } from "@/config";
import { NearContext } from "@/context/near-context";
import { AccountsContext } from "@/context/accounts-reducer-context";

Modal.setAppElement(document.body);

const customStyles = {
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "2rem",
    borderRadius: "var(--border-radius)",
    minWidth: "400px",
    boxShadow: "2px 2px 0 var(--black)",
    color: "var(--black)",
  },
};

export default function AddAccountModal({
  isOpen,
  onRequestClose,
} : {
  isOpen: boolean,
  onRequestClose: () => void,
}) {
  const { ethereum, bitcoin, signedAccountId } = useContext(NearContext);
  const { dispatch } = useContext(AccountsContext);
  const [network, setNetwork] = useState<NETWORK>("ethereum");
  const [accountName, setAccountName] = useState("");

  async function addAccount(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { address } = network === "ethereum"
        ? await ethereum.deriveAddress(signedAccountId, accountName)
        : await bitcoin.deriveAddress(signedAccountId, accountName);

      dispatch({
        type: "ADD_ACCOUNT",
        account: {
          network,
          id: address,
          name: accountName
        }
      });
      onRequestClose();
    } catch (error) {
      console.error("Failed to add account:", error);
    }
  }
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Account"
      style={customStyles}
      onAfterClose={() => {
        setNetwork("ethereum");
        setAccountName("");
      }}
    >
      <h3 className={styles.title}>Add Account</h3>
      <form onSubmit={addAccount}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="network-select">Network</label>
          <div className={styles.inputWrapper}> 
            <select
              className={styles.input}
              id="network-select"
              onChange={(e) => setNetwork(e.target.value as NETWORK)}
              value={network}
            >
              <option value="ethereum">Ethereum</option>
              <option value="bitcoin">Bitcoin</option>
            </select>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="account-name">Account Name</label>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              type="text"
              placeholder={`${network}-1`}
              id="account-name"
              onChange={(e) => setAccountName(e.target.value)}
              value={accountName}
              required />
          </div>
        </div>

        <div className={styles.buttons}>
          <button
            type="button"
            className={`${styles.button} ${styles.cancelButton}`}
            onClick={onRequestClose}>Cancel</button>
          <button type="submit" className={`${styles.button}`}>Add Account</button>
        </div>
      </form>
    </Modal>
  )
}