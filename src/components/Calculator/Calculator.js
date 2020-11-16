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
        <div className="row">
          <div className="row__column">
            <Clear />
          </div>
          <div className="row__column">
            <Back />
          </div>
          <div className="row__column">
            <ToggleNegation />
          </div>
          <div className="row__column">
            <Operator operator="/" />
          </div>
        </div>
        <div className="row">
          <div className="row__column">
            <Number number={7} />
          </div>
          <div className="row__column">
            <Number number={8} />
          </div>
          <div className="row__column">
            <Number number={9} />
          </div>
          <div className="row__column">
            <Operator operator="*" />
          </div>
        </div>
        <div className="row">
          <div className="row__column">
            <Number number={4} />
          </div>
          <div className="row__column">
            <Number number={5} />
          </div>
          <div className="row__column">
            <Number number={6} />
          </div>
          <div className="row__column">
            <Operator operator="-" />
          </div>
        </div>
        <div className="row">
          <div className="row__column">
            <Number number={1} />
          </div>
          <div className="row__column">
            <Number number={2} />
          </div>
          <div className="row__column">
            <Number number={3} />
          </div>
          <div className="row__column">
            <Operator operator="+" />
          </div>
        </div>
        <div className="row">
          <div className="zero">
            <Number number={0} />
          </div>
          <div className="row__column">
            <Number number="." />
          </div>
          <div className="row__column">
            <Equal />
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Calculator;
