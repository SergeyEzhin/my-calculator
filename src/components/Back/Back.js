import React, { useContext } from "react";
import { StoreContext } from "../../StoreContext/StoreContext";

export const Back = () => {
  const store = useContext(StoreContext);
  return (
    <button
      type="button"
      className="btn btn-light"
      onClick={() => store.onBack()}
    >
      &#8592;
    </button>
  );
};
