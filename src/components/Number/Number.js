import React, { useContext } from "react";
import { StoreContext } from "../../StoreContext/StoreContext";

export const Number = ({ number }) => {
  const store = useContext(StoreContext);
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => store.setDisplayValue(number)}
    >
      {number}
    </button>
  );
};
