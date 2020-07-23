import React from "react";
import Button from "../UI/Button/Button";
import classes from "./TypeSelector.module.css";

const TypeSelector = () => {
  return (
    <div className={classes.TypeSelector}>
      <div className={classes.Container}>
        <p>I want to watch a...</p>
        <Button type="primary" size="large" maxWidth>
          Film
        </Button>
        <Button type="secondary" size="large" maxWidth>
          TV Series
        </Button>
      </div>
    </div>
  );
};

export default TypeSelector;
