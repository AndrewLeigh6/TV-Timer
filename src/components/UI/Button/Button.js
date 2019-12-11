import React from "react";
import PropTypes from "prop-types";
import classes from "./Button.module.css";

const Button = props => {
  return (
    <div className={classes.Button} onClick={props.clicked}>
      {props.children}
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"])
};

export default Button;
