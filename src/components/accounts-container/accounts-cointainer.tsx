import { useContext, useState } from "react";
import { AccountView } from "@/components/account/account";
import AddAccountModal from "@/components/add-account-modal/add-account-modal";
import styles from "./accounts-container.module.css";
import { AccountsContext } from "@/context/accounts-reducer-context";

interface Balances {
  [id: string]: string;
}

export default function AccountsContainer() {
  const { state } = useContext(AccountsContext);
  const [addAccountModalIsOpen, setAddAccountModalIsOpen] = useState(false);
  const [balances, setBalances] = useState<Balances>({});

  const handleBalanceUpdate = (id: string, balance: string) => {
    setBalances((prev) => ({ ...prev, [id]: balance }));
  };
  console.log(balances)

  const totalBalance = Object.values(balances)
    .reduce((acc, balance) => acc + parseFloat(balance || "0"), 0)
    .toFixed(2);

  return (
    <div className={styles.accountsContainer}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.titleLabel}>Total Balance: </span>
          <span className={styles.titleBalance}>USD {totalBalance}</span>
        </h2>
        <button onClick={() => setAddAccountModalIsOpen(true)}>Add Account</button>
        <AddAccountModal
          isOpen={addAccountModalIsOpen}
          onRequestClose={() => setAddAccountModalIsOpen(false)} />
      </header>
      <div className={styles.accounts}>
        {state?.map((account) => (
          <AccountView key={account.id} account={account} onBalanceUpdate={handleBalanceUpdate} />
        ))}
      </div>
    </div>
  );
}