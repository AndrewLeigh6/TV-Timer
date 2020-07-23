import React, { useState, useEffect } from "react";
import classes from "./TimeCalculator.module.css";
import MediaDetails from "../MediaDetails/MediaDetails";
import TimeInputBlock from "./TimeInputBlock/TimeInputBlock";
import BreakInputBlock from "./BreakInputBlock/BreakInputBlock";
import { withRouter } from "react-router-dom";
import api from "../../api";
import { getTimeString } from "../../helpers/helpers";

const TimeCalculator = props => {
  const BUTTON_TEXT = "Go back";
  const [currentMediaDetails, setCurrentMediaDetailsState] = useState(null);
  const [breakLength, setBreakLengthState] = useState("5");
  const [breakNum, setBreakNumState] = useState("2");

  useEffect(() => {
    if (props.currentMedia === null) {
      props.history.push("/");
    } else {
      const mediaID = props.currentMedia.id;

      api
        .getFilmDetails(mediaID)
        .then(res => setCurrentMediaDetailsState(res.data));
    }
  }, [props.currentMedia, props.history]);

  const setStartTimeHandler = event => {
    const time = event.target.value;
    props.setChosenStartTimeState(time);
  };

  const setEndTimeHandler = event => {
    const time = event.target.value;
    props.setChosenEndTimeState(time);
  };

  const setBreakLengthHandler = event => {
    const breakLength = event.target.value;
    setBreakLengthState(breakLength);
  };

  const setBreakNumHandler = event => {
    const breakNum = event.target.value;
    setBreakNumState(breakNum);
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
    props.setCurrentCalculationType("end");
    const chosenTime = getTimeDate(props.startTime);

    chosenTime.setMinutes(
      chosenTime.getMinutes() +
        (currentMediaDetails.runtime + breakLength * breakNum)
    );

    const chosenTimeString = getTimeString(chosenTime);

    //console.log("Your film will end at ", chosenTimeString);
    props.setCalculatedEndTimeState(chosenTimeString);

    props.history.push("/result");
  };

  const calcFromEndTime = () => {
    props.setCurrentCalculationType("start");
    const chosenTime = getTimeDate(props.endTime);

    chosenTime.setMinutes(
      chosenTime.getMinutes() -
        (currentMediaDetails.runtime + breakLength * breakNum)
    );

    const chosenTimeString = getTimeString(chosenTime);

    //console.log("You should start your film at ", chosenTimeString);
    props.setCalculatedStartTimeState(chosenTimeString);

    props.history.push("/result");
  };

  return (
    <div className={classes.TimeCalculator}>
      <div className={classes.BreakInputContainer}>
        <BreakInputBlock
          breakLength={breakLength}
          breakLengthChanged={setBreakLengthHandler}
          breakNum={breakNum}
          breakNumChanged={setBreakNumHandler}
        />
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
          time={props.startTime}
        />
        <hr />
        <TimeInputBlock
          type="end"
          changed={setEndTimeHandler}
          clicked={calcFromEndTime}
          time={props.endTime}
        />
      </div>
    </div>
  );
};

export default withRouter(TimeCalculator);
