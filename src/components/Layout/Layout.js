import React, { useEffect } from "react";
import classes from "./Layout.module.css";
import Logo from "../Logo/Logo";

const Layout = props => {
  const styles = {};
  const backdropBaseURL = props.getBackdropBaseURL();
  const backdropURL = backdropBaseURL + props.backdropPath;

  /* set backdrop URL by updating css variable, 
    since we can't access ::after using js */
  useEffect(() => {
    const layout = document.querySelector(".App > div");

    if (props.pathName === "/result") {
      layout.style.setProperty(`--backdrop`, `url(${backdropURL})`);
      layout.style.setProperty(`--backdrop-display`, `block`);
    } else {
      layout.style.setProperty(`--backdrop`, `none`);
      layout.style.setProperty(`--backdrop-display`, `none`);
    }
  });

  return (
    <div className={classes.Layout} style={styles}>
      <Logo />
      {props.children}
    </div>
  );
};

export default Layout;
