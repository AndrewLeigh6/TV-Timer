import React from "react";
import PropTypes from "prop-types";
import classes from "./MediaDetails.module.css";
import Button from "../UI/Button/Button";

const MediaDetails = props => {
  return (
    <div className={classes.MediaDetails}>
      <img className={classes.Poster} src={props.poster} alt={props.alt} />
      <p className={classes.Title}>
        {props.title} ({props.year})
      </p>
      <Button type="secondary" size="small">
        Watch this
      </Button>
    </div>
  );
};

MediaDetails.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default MediaDetails;
