import React, { useContext } from "react";
import { StoreContext } from "../../StoreContext/StoreContext";
import { useObserver } from "mobx-react";
import "./Display.scss";

export const Display = () => {
  const store = useContext(StoreContext);
  console.log(store.number, store.storedNumber);

  return useObserver(() => (
    <div className="display">
      <h1 className="display__title">Calculator</h1>
      <div className="display__elem">
        <h2 className="display__value">
          {!store.number.length && !store.storedNumber
            ? "0"
            : store.number || store.storedNumber}
        </h2>
      </div>
    </div>
  ));
};
