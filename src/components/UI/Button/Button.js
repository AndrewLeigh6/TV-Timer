import React from "react";
import PropTypes from "prop-types";
import classes from "./Button.module.css";

const Button = props => {
  const getClasses = () => {
    const buttonClasses = [classes.Button];

    if (props.type === "primary") {
      buttonClasses.push(classes.Primary);
    }

    if (props.type === "secondary") {
      buttonClasses.push(classes.Secondary);
    }

    return buttonClasses.join(" ");
  };

  return (
    <div className={getClasses()} onClick={props.clicked}>
      {props.children}
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"])
};

export default Button;
