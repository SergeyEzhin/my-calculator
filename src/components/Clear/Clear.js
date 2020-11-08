import React from "react";
import { inject, observer } from "mobx-react";

export const Clear = observer(({ resetNumber }) => {
  return (
    <button type="button" className="btn btn-light" onClick={resetNumber}>
      C
    </button>
  );
});

export default Clear;
