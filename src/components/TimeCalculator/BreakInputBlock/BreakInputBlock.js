import React from "react";
import classes from "./BreakInputBlock.module.css";

const BreakInputBlock = () => {
  return (
    <div className={classes.BreakInputBlock}>
      <p> break length (mins)</p>
      <p> no. of breaks </p>
    </div>
  );
};

export default BreakInputBlock;
