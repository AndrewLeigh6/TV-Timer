import React from "react";
import classes from "./TimeCalculator.module.css";
import MediaDetails from "../MediaDetails/MediaDetails";
import TimeInputBlock from "./TimeInputBlock/TimeInputBlock";
import BreakInputBlock from "./BreakInputBlock/BreakInputBlock";

const TimeCalculator = props => {
  const BUTTON_TEXT = "Go back";
  return (
    <div className={classes.TimeCalculator}>
      <div className={classes.BreakInputContainer}>
        <BreakInputBlock />
      </div>
      <div className={classes.MediaDetailsContainer}>
        <MediaDetails
          title="Blade Runner 2049"
          year="2017"
          poster="https://via.placeholder.com/500x750.png?text=No+poster+available"
          buttonText={BUTTON_TEXT}
        />
      </div>
      <div className={classes.TimeInputContainer}>
        <TimeInputBlock type="start" />
        <hr />
        <TimeInputBlock type="finish" />
      </div>
    </div>
  );
};

export default TimeCalculator;
