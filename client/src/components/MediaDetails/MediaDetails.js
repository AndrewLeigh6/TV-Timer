import React from "react";
import PropTypes from "prop-types";
import classes from "./MediaDetails.module.css";
import Button from "../UI/Button/Button";

const MediaDetails = props => {
  const PLACEHOLDER_POSTER_URL =
    "https://via.placeholder.com/500x750.png?text=No+poster+available";

  const title = props.title;
  const alt = props.title;
  const poster = props.posterPath
    ? `${props.getPosterBaseURL()}/${props.posterPath}`
    : PLACEHOLDER_POSTER_URL;

  const year = props.releaseDate.slice(0, 4);

  return (
    <div className={classes.MediaDetails}>
      <img className={classes.Poster} src={poster} alt={alt} />
      <p className={classes.Title}>
        {title} ({year})
      </p>
      <Button type="secondary" size="small" clicked={props.clicked}>
        {props.buttonText}
      </Button>
    </div>
  );
};

MediaDetails.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default MediaDetails;
