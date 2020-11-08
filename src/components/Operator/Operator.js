import React from "react";

export const Operator = ({ operator }) => {
  return (
    <button type="button" className="btn btn-success">
      {operator}
    </button>
  );
};
