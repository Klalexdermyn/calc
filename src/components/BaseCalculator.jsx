import "./calcstyle.css";
import { Button } from "./Button";

export default function BaseCalculator({ handleBothClicks }) {
  return (
    <div className="mainSection">
      <div className="culcLeft">
        <div className="culcNumbers">
          <Button content={7} handleBothClicks={handleBothClicks} />
          <Button content={8} handleBothClicks={handleBothClicks} />
          <Button content={9} handleBothClicks={handleBothClicks} />
          <Button content={4} handleBothClicks={handleBothClicks} />
          <Button content={5} handleBothClicks={handleBothClicks} />
          <Button content={6} handleBothClicks={handleBothClicks} />
          <Button content={1} handleBothClicks={handleBothClicks} />
          <Button content={2} handleBothClicks={handleBothClicks} />
          <Button content={3} handleBothClicks={handleBothClicks} />
        </div>
        <div className="bottom">
          <Button
            content={0}
            size="LARGE"
            alignement="HORIZONTAL"
            handleBothClicks={handleBothClicks}
          />
          <Button content={"."} handleBothClicks={handleBothClicks} />
        </div>
      </div>
      <div className="verticalControls">
        <Button
          content={"-"}
          style="BLUE"
          handleBothClicks={handleBothClicks}
          id={"-"}
        />
        <Button
          content={"+"}
          alignement="VERTICAL"
          size="LARGE"
          style="BLUE"
          handleBothClicks={handleBothClicks}
          id={"+"}
        />
        <Button
          content={"="}
          alignement="VERTICAL"
          size="LARGE"
          style="LIGHTBLUE"
        />
      </div>
    </div>
  );
}
