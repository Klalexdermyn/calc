import "./calcstyle.css";
import { v4 as uuid } from "uuid";

export default function Display({ sequence, resultDisplay }: any) {
  const regex = /[\-\/\/*\+]/;
  return (
    <div className="display">
      <div className="calculation-block">
        {sequence.map((symbol: any) => {
          if (regex.test(symbol)) {
            return (
              <div className="calculation_blue" key={uuid()}>
                {symbol}
              </div>
            );
          } else {
            return (
              <div className="calculation" key={uuid()}>
                {symbol}
              </div>
            );
          }
        })}
      </div>
      <div
        className={
          resultDisplay
            ? resultDisplay.toString().length > 10 && resultDisplay.toString().length <= 15
              ? "output_fontSz"
              : resultDisplay.toString().length > 15
              ? "output_fontSz output_font_tolong"
              : "output"
            : "output"
        }
      >
        {resultDisplay}
      </div>
    </div>
  );
}
