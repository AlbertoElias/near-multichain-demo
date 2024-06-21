import { useContext, useState } from "react";
import Link from "next/link";
import { AccountView, BalanceUpdate } from "@/components/account/account";
import AddAccountModal from "@/components/add-account-modal/add-account-modal";
import styles from "./accounts-container.module.css";
import { AccountsContext } from "@/context/accounts-reducer-context";
import Container from "../container/container";

interface Balances {
  [id: string]: string;
}

export default function AccountsContainer() {
  const { state } = useContext(AccountsContext);
  const [addAccountModalIsOpen, setAddAccountModalIsOpen] = useState(false);
  const [balances, setBalances] = useState<Balances>({});

  const handleBalanceUpdate = (id: string, balance: BalanceUpdate) => {
    setBalances((prev) => ({ ...prev, [id]: balance.usd }));
  };

  const totalBalance = Object.values(balances)
    .reduce((acc, balance) => acc + parseFloat(balance || "0"), 0)
    .toFixed(2);

  return (
    <Container>
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
          <Link key={account.id} className={styles.accountLink} href={`/accounts/${account.id}`}>
            <AccountView account={account} onBalanceUpdate={handleBalanceUpdate} />
          </Link>
        ))}
      </div>
    </Container>
  );
}