import React from "react";
import classes from "./TimeCalculator.module.css";
import MediaDetails from "../MediaDetails/MediaDetails";
import TimeInputBlock from "./TimeInputBlock/TimeInputBlock";

const TimeCalculator = props => {
  return (
    <div className={classes.TimeCalculator}>
      <MediaDetails
        title="Blade Runner 2049"
        year="2017"
        poster="https://via.placeholder.com/500x750.png?text=No+poster+available"
      />
      <div className={classes.Container}>
        <TimeInputBlock type="start" />
        <hr />
        <TimeInputBlock type="finish" />
      </div>
    </div>
  );
};

export default TimeCalculator;
