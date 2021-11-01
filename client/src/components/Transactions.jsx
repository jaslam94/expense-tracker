import React, { useContext } from "react";
import { GlobalContext } from "./../context/GlobalState";
import { Transaction } from "./Transaction";

export const Transactions = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((e) => (
          <Transaction key={e.id} transaction={e} />
        ))}
      </ul>
    </>
  );
};