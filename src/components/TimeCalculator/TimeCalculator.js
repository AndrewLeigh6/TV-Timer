import React from "react";
import classes from "./TimeCalculator.module.css";
import MediaDetails from "../MediaDetails/MediaDetails";
import TimeInputBlock from "./TimeInputBlock/TimeInputBlock";
import BreakInputBlock from "./BreakInputBlock/BreakInputBlock";
import { withRouter } from "react-router-dom";

const TimeCalculator = props => {
  const BUTTON_TEXT = "Go back";

  if (props.currentMedia === null) {
    props.history.push("/");
    return null;
  }

  return (
    <div className={classes.TimeCalculator}>
      <div className={classes.BreakInputContainer}>
        <BreakInputBlock />
      </div>
      <div className={classes.MediaDetailsContainer}>
        <MediaDetails
          title={props.currentMedia.title}
          releaseDate={props.currentMedia.release_date}
          posterPath={props.currentMedia.poster_path}
          buttonText={BUTTON_TEXT}
          getPosterBaseURL={props.getPosterBaseURL}
          clicked={() => props.history.push("/")}
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

export default withRouter(TimeCalculator);
