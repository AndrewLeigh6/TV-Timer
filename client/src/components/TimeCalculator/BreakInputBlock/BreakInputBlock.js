import React from "react";
import classes from "./BreakInputBlock.module.css";
import Input from "../../UI/Input/Input";

const BreakInputBlock = props => {
  return (
    <div className={classes.BreakInputBlock}>
      <div className={classes.BreakLength}>
        <p> Break length (mins)</p>
        <Input
          name="break-length"
          class="break"
          maxLength="2"
          value={props.breakLength}
          changed={props.breakLengthChanged}
        />
      </div>

      <div className={classes.BreakNo}>
        <p> No. of breaks </p>
        <Input
          name="break-number"
          class="break"
          maxLength="2"
          value={props.breakNum}
          changed={props.breakNumChanged}
        />
      </div>
    </div>
  );
};

export default BreakInputBlock;
