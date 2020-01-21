import React from "react";
import PropTypes from "prop-types";
import classes from "./Input.module.css";

const Input = props => {
  const styles = [classes.Input];

  switch (props.class) {
    case "search":
      styles.push(classes.Search);
      break;
    case "time":
      styles.push(classes.Time);
      break;
    case "break":
      styles.push(classes.Break);
      break;
    default:
      break;
  }

  return (
    <input
      className={styles.join(" ")}
      type="text"
      name={props.name}
      id={props.name}
      placeholder={props.placeholder}
      maxLength={props.maxLength}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  class: PropTypes.oneOf(["search", "break", "time"]).isRequired
};

export default Input;
