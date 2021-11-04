import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./../context/GlobalState";
import { Transaction } from "./Transaction";

export const Transactions = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((e) => (
          <Transaction key={e._id} transaction={e} />
        ))}
      </ul>
    </>
  );
};
