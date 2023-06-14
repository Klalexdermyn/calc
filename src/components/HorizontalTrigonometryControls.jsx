import "./calcstyle.css";
import { Button } from "./Button";
import { ReactComponent as DegSvg } from "./assets/deg.svg";
import { ReactComponent as ESvg } from "./assets/e.svg";
import { ReactComponent as SinSvg } from "./assets/sin.svg";
import { ReactComponent as USvg } from "./assets/u.svg";

export default function HorizontalTrigonometryControls() {
  return (
    <div className="horizontalControls-ceiling">
      <Button content={<ESvg />} size="SMALL" />
      <Button content={<USvg />} size="SMALL" />
      <Button content={<SinSvg />} size="SMALL" />
      <Button content={<DegSvg />} size="SMALL" />
    </div>
  );
}
