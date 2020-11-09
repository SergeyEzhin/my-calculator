import React from "react";
import { useObserver } from "mobx-react";
import { Display } from "../Display/Display";
import { Number } from "../Number/Number";
import "./Calculator.scss";
import { Operator } from "../Operator/Operator";
import { Clear } from "../Clear/Clear";
import { Back } from "../Back/Back";
import { ToggleNegation } from "../ToggleNegation/ToggleNegation";
import { Equal } from "../Equal/Equal";
import { StoreContext } from "../../StoreContext/StoreContext";

const Calculator = () => {
  const store = React.useContext(StoreContext);
  console.log(store);
  return useObserver(() => (
    <div className="calculator">
      <Display />
      <div className="calculator__pad">
        <Clear />
        <Back />
        <ToggleNegation />
        <Operator operator="/" />
        <Number number={7} />
        <Number number={8} />
        <Number number={9} />
        <Operator operator="*" />
        <Number number={4} />
        <Number number={5} />
        <Number number={6} />
        <Operator operator="-" />
        <Number number={1} />
        <Number number={2} />
        <Number number={3} />
        <Operator operator="+" />
        <div className="zero">
          <Number number={0} />
        </div>
        <Number number="." />
        <Equal />
      </div>
    </div>
  ));
};

export default Calculator;
