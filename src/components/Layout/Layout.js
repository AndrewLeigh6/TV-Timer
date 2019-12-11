import React from "react";
import classes from "./Layout.module.css";
import Logo from "../Logo/Logo";

const Layout = props => {
  return (
    <div className={classes.Layout}>
      <Logo />
      {props.children}
    </div>
  );
};

export default Layout;
