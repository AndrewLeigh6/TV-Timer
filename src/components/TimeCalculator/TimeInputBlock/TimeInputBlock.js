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
    case "finish":
      verb = "finish";
      break;
    default:
      break;
  }

  return (
    <div className={classes.TimeInputBlock}>
      <p> I want to {verb} my film at:</p>
      <div className={classes.TimeInputContainer}>
        <Input name="time-start" class="time" placeholder="19:30" />
        <Button type="primary" size="small" maxWidth>
          Calculate
        </Button>
      </div>
    </div>
  );
};

TimeInputBlock.propTypes = {
  type: PropTypes.oneOf(["start", "finish"]).isRequired
};

export default TimeInputBlock;
