import React from "react";
import PropTypes from "prop-types";
import classes from "./Input.module.css";

const Input = props => {
  return (
    <input
      className={classes.Input}
      type="text"
      name="search"
      id="search"
      placeholder={props.placeholder}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string
};

export default Input;
