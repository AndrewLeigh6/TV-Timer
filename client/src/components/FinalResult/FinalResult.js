import React from "react";
import classes from "./FinalResult.module.css";

const FinalResult = props => {
  let text = "";

  switch (props.currentCalculationType) {
    case "start":
      text = (
        <React.Fragment>
          <p>
            To finish your film by
            <span className={classes.ChosenTime}> {props.chosenEndTime}</span>,
            start it at...
          </p>
          <p className={classes.CalculatedTime}> {props.calculatedStartTime}</p>
        </React.Fragment>
      );
      break;
    case "end":
      text = (
        <React.Fragment>
          <p>
            If you start your film at
            <span className={classes.ChosenTime}> {props.chosenStartTime}</span>
            , you'll finish it at...
          </p>
          <p className={classes.CalculatedTime}> {props.calculatedEndTime}</p>
        </React.Fragment>
      );
      break;
    default:
  }

  return (
    <div className={classes.FinalResult}>
      {text}
      <p>
        Enjoy watching <span className={classes.Title}>{props.title}!</span>
      </p>
    </div>
  );
};

export default FinalResult;
