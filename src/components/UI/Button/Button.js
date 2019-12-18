import React from "react";
import PropTypes from "prop-types";
import classes from "./Button.module.css";

const Button = props => {
  const getClasses = () => {
    const buttonClasses = [classes.Button];

    if (props.maxWidth) {
      buttonClasses.push(classes.MaxWidth);
    }

    switch (props.type) {
      case "primary":
        buttonClasses.push(classes.Primary);
        break;
      case "secondary":
        buttonClasses.push(classes.Secondary);
        break;
      default:
        break;
    }

    switch (props.size) {
      case "small":
        buttonClasses.push(classes.Small);
        break;
      case "medium":
        buttonClasses.push(classes.Medium);
        break;
      case "large":
        buttonClasses.push(classes.Large);
        break;
      default:
        break;
    }

    return buttonClasses.join(" ");
  };

  switch (props.form) {
    case true:
      return (
        <button className={getClasses()} onClick={props.clicked}>
          {props.children}
        </button>
      );

    default:
      return (
        <div className={getClasses()} onClick={props.clicked}>
          {props.children}
        </div>
      );
  }
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
  form: PropTypes.bool,
  maxWidth: PropTypes.bool
};

export default Button;
