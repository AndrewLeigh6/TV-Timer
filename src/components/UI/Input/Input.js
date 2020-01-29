import React from "react";
import PropTypes from "prop-types";
import classes from "./Input.module.css";

const Input = props => {
  const styles = [classes.Input];
  let type = "text";

  switch (props.class) {
    case "search":
      styles.push(classes.Search);
      break;
    case "time":
      styles.push(classes.Time);
      type = "time";
      break;
    case "break":
      styles.push(classes.Break);
      break;
    default:
      break;
  }

  if (props.class === "time") {
    return (
      <input
        className={styles.join(" ")}
        type={type}
        name={props.name}
        id={props.name}
        min="00:00"
        max="23:59"
        pattern="[0-9]{2}:[0-9]{2}"
        required="true"
      />
    );
  }

  return (
    <input
      className={styles.join(" ")}
      type={type}
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
