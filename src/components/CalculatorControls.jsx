import "./calcstyle.css";
import BaseCalculator from "./BaseCalculator";
import HorizontalCalcControls from "./HorizontalСalcControls";
import HorizontalTrigonometryControls from "./HorizontalTrigonometryControls";

export default function CalculatorControls({handleBothClicks, clearButton}) {
  return (
    <div className="calcControls">
      <HorizontalTrigonometryControls />
      <HorizontalCalcControls handleBothClicks={handleBothClicks} clearButton={clearButton}/>
      <BaseCalculator handleBothClicks={handleBothClicks}/>
    </div>
  );
}
