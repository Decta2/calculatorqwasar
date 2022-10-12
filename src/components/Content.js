import React, { useState } from "react";

import "./Content.css";

function Content() {
  const [AppResult, setReasult] = useState("");

  const hadleClickButtonApp = (e) => {
    setReasult(AppResult.concat(e.target.name));
  };

  const clear = () => {
    setReasult("");
  };

  const backspace = () => {
    setReasult(AppResult.slice(0, - 1)); // Or -1
  };

  const calculate = () => {
    try {
      setReasult(eval(AppResult).toString());
    } catch (err) {
      setReasult("Error");
    }
  };

  return (
    <>
      <div className="container-content">
        <form>
          <input type="text" value={AppResult} />
        </form>

        <div className="keypad-app">
          <button onClick={clear} id="clear">
            Clear
          </button>
          <button onClick={backspace} id="backspace">
            C
          </button>
          <button name="/" onClick={hadleClickButtonApp} id="clear-app">
            &divide;
          </button>
          <button name="7" onClick={hadleClickButtonApp}>
            7
          </button>
          <button name="8" onClick={hadleClickButtonApp}>
            8
          </button>
          <button name="9" onClick={hadleClickButtonApp}>
            9
          </button>
          <button name="*" onClick={hadleClickButtonApp} id="plus">
            &times;
          </button>
          <button name="4" onClick={hadleClickButtonApp}>
            4
          </button>
          <button name="5" onClick={hadleClickButtonApp}>
            5
          </button>
          <button name="6" onClick={hadleClickButtonApp}>
            6
          </button>
          <button name="-" onClick={hadleClickButtonApp} id="minus">
            &ndash;
          </button>
          <button name="1" onClick={hadleClickButtonApp}>
            1
          </button>
          <button name="2" onClick={hadleClickButtonApp}>
            2
          </button>
          <button name="3" onClick={hadleClickButtonApp}>
            3
          </button>
          <button name="+" onClick={hadleClickButtonApp} id="plus-two">
            +
          </button>
          <button name="0" onClick={hadleClickButtonApp} id="zero">
            0
          </button>
          <button name="." onClick={hadleClickButtonApp} id="tojka">
            .
          </button>
          <button onClick={calculate} id="result">
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default Content;
