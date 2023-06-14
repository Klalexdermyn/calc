import "./calcstyle.css";

import Display from "./Display";
import CalculatorControls from "./CalculatorControls";
import { useState, useEffect } from "react";

export default function Calculator() {
  const [sequence, setState] = useState([]);
  const [currentValue, setCurrentValue] = useState("");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [resultDisplay, setResultDisplay] = useState(null);

  useEffect(() => {
    if (currentValue === "") {
      setResultDisplay(resultDisplay);
    } else {
      const nextValue = parseFloat(currentValue);
      const firstValue = parseFloat(previousValue);
      let result;
      switch (operator) {
        case "+":
          result = firstValue + nextValue;
          setResultDisplay(result);
          break;
        case "-":
          result = firstValue - nextValue;
          setResultDisplay(result);
          break;
        case "*":
          result = firstValue * nextValue;
          setResultDisplay(result);
          break;
        case "/":
          result = firstValue / nextValue;
          setResultDisplay(result);
          break;
        default:
          setResultDisplay(parseFloat(currentValue));
      }
    }
  }, [currentValue, operator, previousValue, resultDisplay]);

  function clearButton(event) {
    event.preventDefault();
    setState([]);
    setCurrentValue("");
    setPreviousValue(null);
    setOperator(null);
    setResultDisplay(null);
  }

  function buttonHandler(event) {
    event.preventDefault();
    setState((state) => {
      return [...state, event.target.innerText];
    });
    setCurrentValue((currentValue) => {
      return currentValue + event.target.innerText;
    });
    console.log(typeof resultDisplay)
  }

  function signHandler(event) {
    event.preventDefault();

    setPreviousValue(resultDisplay);
    setCurrentValue("");
    setOperator(event.target.id);
    setState((state) => {
      return [...state, event.target.id];
    });
  }
  const handleBothClicks = (e) => {
    if (e.target.id) {
      const ifSequenceIsSign = sequence.length
        ? sequence[sequence.length - 1].match(/[+\-*/]/)
        : false;
      if (ifSequenceIsSign) {
        return;
      } else if (e.target.id === "-") {
        signHandler(e);
      } else if (sequence.length) {
        signHandler(e);
      }
    } else {
      buttonHandler(e);
    }
  };

  return (
    <div className="calcBody">
      <Display sequence={sequence} resultDisplay={resultDisplay} />
      <CalculatorControls
        handleBothClicks={handleBothClicks}
        clearButton={clearButton}
      />
    </div>
  );
}
