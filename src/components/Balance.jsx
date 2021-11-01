import React, { useContext } from "react";
import { GlobalContext } from "./../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((e) => e.amount);
  const balance = amounts
    .reduce((preVal, curVal) => (preVal += curVal), 0)
    .toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${balance}</h1>
    </>
  );
};
