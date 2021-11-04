import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  async function getTransactions() {
    try {
      const response = await axios.get("/api/v1/transactions");
      const { data } = response.data;
      dispatch({ type: "GET_TRANSACTIONS", payload: data });
    } catch (err) {
      const { error } = err.response.data;
      dispatch({ type: "TRANSACTION_ERROR", payload: error });
    }
  }

  //Actions
  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "/api/v1/transactions",
        transaction,
        config
      );
      const { data } = response.data;
      dispatch({ type: "ADD_TRANSACTION", payload: data });
    } catch (err) {
      const { error } = err.response.data;
      dispatch({ type: "TRANSACTION_ERROR", payload: error });
    }
  }

  //Actions
  async function deleteTransaction(id) {
    try {
      await axios.delete("/api/v1/transactions/" + id);
      dispatch({ type: "DELETE_TRANSACTION", payload: id });
    } catch (err) {
      const { error } = err.response.data;
      dispatch({ type: "TRANSACTION_ERROR", payload: error });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
