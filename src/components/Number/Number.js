import React, { useContext } from "react";
import { StoreContext } from "../../StoreContext/StoreContext";

export const Number = ({ number }) => {
  const store = useContext(StoreContext);
  return (
    <button type="button" onClick={() => store.setDisplayValue(number)}>
      {number}
    </button>
  );
};
