import React from "react";
import { StoreContext } from "../../StoreContext/StoreContext";
import { useContext } from "react";

export const Equal = () => {
  const store = useContext(StoreContext);
  return (
    <button
      type="button"
      className="btn btn-light"
      onClick={() => store.doMath()}
    >
      =
    </button>
  );
};
