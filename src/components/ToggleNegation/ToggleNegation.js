import React, { useContext } from "react";
import { StoreContext } from "../../StoreContext/StoreContext";

export const ToggleNegation = () => {
  const store = useContext(StoreContext);
  return (
    <button
      type="button"
      className="btn btn-light"
      onClick={() => store.changeToggleNegation()}
    >
      -/+
    </button>
  );
};
