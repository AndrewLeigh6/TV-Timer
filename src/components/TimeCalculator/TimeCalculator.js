import React, { useState, useEffect } from "react";
import classes from "./TimeCalculator.module.css";
import MediaDetails from "../MediaDetails/MediaDetails";
import TimeInputBlock from "./TimeInputBlock/TimeInputBlock";
import BreakInputBlock from "./BreakInputBlock/BreakInputBlock";
import { withRouter } from "react-router-dom";
import api from "../../api";

const TimeCalculator = props => {
  const BUTTON_TEXT = "Go back";
  const [currentMediaDetails, setCurrentMediaDetailsState] = useState(null);
  const [startTime, setStartTimeState] = useState("12:00");

  useEffect(() => {
    const mediaID = props.currentMedia.id;

    api
      .getFilmDetails(mediaID)
      .then(res => setCurrentMediaDetailsState(res.data));
  }, [props.currentMedia]);

  if (props.currentMedia === null) {
    props.history.push("/");
    return null;
  }

  const setStartTimeHandler = event => {
    const time = event.target.value;
    setStartTimeState(time);
  };

  const getTimeDate = chosenTime => {
    const chosenTimeHours = chosenTime.slice(0, 2);
    const chosenTimeMinutes = chosenTime.slice(3);

    const chosenTimeDate = new Date();
    chosenTimeDate.setHours(chosenTimeHours);
    chosenTimeDate.setMinutes(chosenTimeMinutes);

    return chosenTimeDate;
  };

  const calcFromStartTime = () => {
    const chosenTime = getTimeDate(startTime);

    chosenTime.setMinutes(
      chosenTime.getMinutes() + currentMediaDetails.runtime
    );

    /* this looks absolutely hideous, but it's just so
    we can get the getMinutes result to look like 01, 02,
    etc instead of 1, 2. */
    const chosenTimeString =
      chosenTime.getHours() +
      ":" +
      String(chosenTime.getMinutes()).padStart(2, "0");

    console.log("Your film will end at ", chosenTimeString);
  };

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
        <TimeInputBlock
          type="start"
          changed={setStartTimeHandler}
          clicked={calcFromStartTime}
          time={startTime}
        />
        <hr />
        <TimeInputBlock type="finish" />
      </div>
    </div>
  );
};

export default withRouter(TimeCalculator);
