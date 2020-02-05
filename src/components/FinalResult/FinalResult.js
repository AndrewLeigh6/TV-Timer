import React from "react";
import classes from "./FinalResult.module.css";

const FinalResult = () => {
  return (
    <div className={classes.FinalResult}>
      <p>
        To finish your film by <span className={classes.ChosenTime}>23:30</span>
        , start it at...
      </p>
      <p className={classes.CalculatedTime}> 21:04</p>
      <p>
        {" "}
        Enjoy watching <span className={classes.Title}>Avengers: Endgame!</span>
      </p>
    </div>
  );
};

export default FinalResult;
