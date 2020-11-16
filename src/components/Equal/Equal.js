import React from "react";
import { StoreContext } from "../../StoreContext/StoreContext";
import { useContext } from "react";

export const Equal = () => {
  const store = useContext(StoreContext);
  return (
    <button type="button" onClick={() => store.doMath()}>
      =
    </button>
  );
};
