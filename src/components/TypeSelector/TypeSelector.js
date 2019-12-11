import React from "react";
import Button from "../UI/Button/Button";
import classes from "./TypeSelector.module.css";

const TypeSelector = () => {
  return (
    <div className={classes.TypeSelector}>
      <div className={classes.Container}>
        <Button type="primary">Film</Button>
        <Button type="secondary">TV Series</Button>
      </div>
    </div>
  );
};

export default TypeSelector;
