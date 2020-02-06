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
    if (props.pathName === "/result") {
      const layout = document.querySelector(".App > div");
      layout.style.setProperty(`--backdrop`, `url(${backdropURL})`);
      layout.style.setProperty(`--backdrop-display`, `block`);
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
