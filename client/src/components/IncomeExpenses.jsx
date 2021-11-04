import React, { useContext } from "react";
import { GlobalContext } from "./../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((m) => m.amount);
  const income = amounts
    .filter((e) => e > 0)
    .reduce((preVal, curVal) => (preVal += curVal), 0)
    .toFixed(2);
  const expense = amounts
    .filter((m) => m < 0)
    .reduce((preVal, curVal) => (preVal += curVal), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${numberWithCommas(income)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${numberWithCommas(expense)}
        </p>
      </div>
    </div>
  );
};
