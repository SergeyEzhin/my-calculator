import React from "react";
import { useLocalStore } from "mobx-react";

export const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    number: "",
    storedNumber: "",
    functionType: "",
    onClear: () => {
      store.number = "";
      store.storedNumber = "";
      store.functionType = "";
    },
    onBack: () => {
      if (store.number !== "") {
        const deletedNumber = store.number.slice(0, store.number.length - 1);
        store.number = deletedNumber;
      }
    },
    setDisplayValue: (num) => {
      if (
        (!store.number.includes(".") || num !== ".") &&
        store.number.length < 8
      ) {
        store.number = `${(store.number + num).replace(/^0+/, "")}`;
      }
    },
    setStoredValue: () => {
      store.storedNumber = store.number;
      store.number = "";
    },
    setCalcFunction: (type) => {
      if (store.number) {
        store.functionType = type;
        store.setStoredValue();
      }
      if (store.storedNumber) {
        store.functionType = type;
      }
    },
    changeToggleNegation: () => {
      if (store.number) {
        if (store.number > 0) {
          store.number = `-${store.number}`;
        } else {
          const positiveNumber = store.number.slice(1);
          store.number = positiveNumber;
        }
      } else if (store.storedNumber > 0) {
        store.storedNumber = `-${store.storedNumber}`;
      } else {
        const positiveNumber = store.storedNumber.slice(1);
        store.storedNumber = positiveNumber;
      }
    },
    doMath: () => {
      if (store.number && store.storedNumber) {
        switch (store.functionType) {
          case "+":
            store.storedNumber = `${
              Math.round(
                `${
                  (parseFloat(store.storedNumber) + parseFloat(store.number)) *
                  100
                }`
              ) / 100
            }`;
            break;
          case "-":
            store.storedNumber = `${
              Math.round(
                `${
                  (parseFloat(store.storedNumber) - parseFloat(store.number)) *
                  1000
                }`
              ) / 1000
            }`;
            break;
          case "/":
            store.storedNumber = `${
              Math.round(
                `${
                  (parseFloat(store.storedNumber) / parseFloat(store.number)) *
                  1000
                }`
              ) / 1000
            }`;
            break;
          case "*":
            store.storedNumber = `${
              Math.round(
                `${
                  parseFloat(store.storedNumber) *
                  parseFloat(store.number) *
                  1000
                }`
              ) / 1000
            }`;
            break;
          default:
            break;
        }
        store.number = "";
      }
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
