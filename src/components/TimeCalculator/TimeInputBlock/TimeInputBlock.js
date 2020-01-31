import React from "react";
import classes from "./TimeInputBlock.module.css";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import PropTypes from "prop-types";

const TimeInputBlock = props => {
  let verb = null;

  switch (props.type) {
    case "start":
      verb = "start";
      break;
    case "end":
      verb = "finish";
      break;
    default:
      break;
  }

  return (
    <div className={classes.TimeInputBlock}>
      <p> I want to {verb} my film at:</p>
      <div className={classes.TimeInputContainer}>
        <Input
          name="time-start"
          class="time"
          changed={props.changed}
          value={props.time}
        />
        <Button type="primary" size="small" maxWidth clicked={props.clicked}>
          Calculate
        </Button>
      </div>
    </div>
  );
};

TimeInputBlock.propTypes = {
  type: PropTypes.oneOf(["start", "end"]).isRequired
};

export default TimeInputBlock;
