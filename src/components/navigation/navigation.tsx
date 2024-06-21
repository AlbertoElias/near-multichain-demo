import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";

import { NearContext } from "@/context/near-context";
import styles from "./navigation.module.css";
import NearLogo from "/public/near.svg";

export const Navigation = () => {
  const { signedAccountId, wallet } = useContext(NearContext);
  const [action, setAction] = useState<() => void>(() => () => {});
  const [label, setLabel] = useState("Loading...");

  useEffect(() => {
    if (!wallet) return;

    if (signedAccountId) {
      setAction(() => wallet.signOut);
      setLabel(`Logout ${signedAccountId}`);
    } else {
      setAction(() => wallet.signIn);
      setLabel("Login");
    }
  }, [signedAccountId, wallet]);

  return (
    <nav className={`${styles.nav}`}>
      <Link href="/" passHref legacyBehavior>
        <div className={styles.header}>
          <Image priority src={NearLogo} alt="NEAR" width="32" height="32" />
          <h1>Multichain Hub</h1>
        </div>
      </Link>
      <button className={`secondary ${styles.logoutButton}`} onClick={action}>{label}</button>
    </nav>
  );
};