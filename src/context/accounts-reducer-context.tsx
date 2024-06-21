import React, { createContext, Dispatch, useCallback, useContext, useEffect, useReducer, useState } from "react";
import { NearContext } from "./near-context";

export interface Account {
  network: string;
  id: string;
  name?: string;
  publicKey?: string;
}

interface AccountsAction {
  type: "INITIALIZE" | "ADD_ACCOUNT";
  account?: Account;
  accounts?: Account[];
}

function accountsReducer(accounts: Account[], action: AccountsAction): Account[] {
  switch (action.type) {
    case "INITIALIZE":
      return action.accounts || [];
    case "ADD_ACCOUNT":
      if (!action.account) return accounts;
      return [...accounts, action.account];
    default:
      return accounts;
  }
}

interface AccountsContextInterface {
  state: Account[];
  dispatch: Dispatch<AccountsAction>;
}

export const AccountsContext = createContext<AccountsContextInterface>({
  state: [],
  dispatch: () => {}
});

export function AccountsProvider({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);
  const { signedAccountId } = useContext(NearContext);
  const storageKey = `accounts-${signedAccountId}`;
  const [state, dispatch] = useReducer(accountsReducer, []);

  const getInitialAccounts = useCallback(() => {
    const storedAccounts = localStorage.getItem(storageKey);
    return storedAccounts ? JSON.parse(storedAccounts) : [];
  }, [storageKey]);

  useEffect(() => {
    if (signedAccountId && !isInitialized) {
      const initialAccounts = getInitialAccounts();
      dispatch({ type: "INITIALIZE", accounts: initialAccounts });
      setIsInitialized(true);
    }
  }, [signedAccountId, getInitialAccounts, isInitialized]);

  useEffect(() => {
    if (signedAccountId && state.length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(state));
    }
  }, [state, storageKey, signedAccountId]);

  return (
    <AccountsContext.Provider value={{ state, dispatch }}>
      {children}
    </AccountsContext.Provider>
  );
}