import React, { useContext } from "react";
import { StoreContext } from "../../StoreContext/StoreContext";

export const Operator = ({ operator }) => {
  const store = useContext(StoreContext);
  return (
    <button
      type="button"
      className="btn btn-success"
      onClick={() => store.setCalcFunction(operator)}
    >
      {operator}
    </button>
  );
};
