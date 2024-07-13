import { useState } from "react";

import "./btngrp.css";
export default function Btngrp() {
  const [count, setcount] = useState("");

  let values = ["%", "*", "-", "+", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];

  let clicked = (event) => {
    let target = event.target.value;
    return setcount((prevcount) => prevcount + target);
  };

  let equ = () => {
    return setcount((val) => eval(val));
  };

  let reset = () => {
    return setcount("");
  };

  return (
    <div className="container">
      <div>
        <span>
          {" "}
          <input
            className="display-input"
            type="text"
            placeholder=""
            value={count}
            readOnly
          />
        </span>
      </div>
      <div className="test">
        {values.map((symbol) => (
          <button
            className="btns"
            id={symbol}
            onClick={clicked}
            key={symbol}
            value={symbol}
          >
            {symbol}
          </button>
        ))}
        <button className="btns" onClick={reset}>
          Ac
        </button>
        <button className="equals" onClick={equ}>
          =
        </button>
      </div>
    </div>
  );
}
