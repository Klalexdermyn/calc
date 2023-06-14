import "./calcstyle.css";
import { Button } from "./Button";
import { ReactComponent as SlashSvg } from "./assets/slash.svg";
import { ReactComponent as DeleteSvg } from "./assets/ri_delete-back-2-line.svg";
import { ReactComponent as StarSvg } from "./assets/star.svg";

export default function HorizontalCalcControls({handleBothClicks, clearButton}) {
  return (
    <div className="horizontalControls">
      <Button content={"Ac"} clearButton={clearButton} style="GREY" />
      <Button content={<DeleteSvg />} style="GREY" />
      <Button content={<SlashSvg />} style="BLUE" handleBothClicks={handleBothClicks} id={"/"}/>
      <Button style="BLUE" content={<StarSvg />} handleBothClicks={handleBothClicks} id={"*"}/>
    </div>
  );
}
  