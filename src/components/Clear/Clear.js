import React, { useContext } from "react";
import { StoreContext } from "../../StoreContext/StoreContext";

export const Clear = () => {
  const store = useContext(StoreContext);
  return (
    <button type="button" onClick={() => store.onClear()}>
      C
    </button>
  );
};
