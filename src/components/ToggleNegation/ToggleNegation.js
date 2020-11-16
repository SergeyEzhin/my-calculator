import React, { useContext } from "react";
import { StoreContext } from "../../StoreContext/StoreContext";

export const ToggleNegation = () => {
  const store = useContext(StoreContext);
  return (
    <button type="button" onClick={() => store.changeToggleNegation()}>
      -/+
    </button>
  );
};
