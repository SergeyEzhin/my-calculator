import React from "react";
import { inject, observer } from "mobx-react";
import { Display } from "../Display/Display";
import { Number } from "../Number/Number";
import "./Calculator.scss";
import { Operator } from "../Operator/Operator";
import Clear from "../Clear/Clear";
import { Back } from "../Back/Back";
import { ToggleNegation } from "../ToggleNegation/ToggleNegation";
import { Equal } from "../Equal/Equal";

const Calculator = inject((store) => ({
  number: store.number.number,
  resetNumber: store.number.resetNumber,
}))(
  observer(({ resetNumber, number }) => {
    return (
      <div className="calculator">
        <Display number={number} />
        <div className="calculator__pad">
          <Clear resetNumber={resetNumber} />
          <Back />
          <ToggleNegation />
          <Operator operator="/" />
          <Number number="7" />
          <Number number="8" />
          <Number number="9" />
          <Operator operator="*" />
          <Number number="4" />
          <Number number="5" />
          <Number number="6" />
          <Operator operator="-" />
          <Number number="1" />
          <Number number="2" />
          <Number number="3" />
          <Operator operator="+" />
          <div className="zero">
            <Number number="0" />
          </div>
          <Number number="." />
          <Equal />
        </div>
      </div>
    );
  })
);

export default Calculator;
