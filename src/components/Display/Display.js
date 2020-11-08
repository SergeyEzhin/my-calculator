import React from "react";
import "./Display.scss";

export const Display = ({ number }) => {
  return (
    <div className="display">
      <h1 className="display__title">Calculator</h1>
      <div className="display__elem">
        <h2 className="display__value">{number}</h2>
        <p className="display__text">Введите числа</p>
      </div>
    </div>
  );
};
