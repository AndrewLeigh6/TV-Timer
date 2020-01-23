import React, { Component } from "react";
import MediaDetails from "../MediaDetails/MediaDetails";
import classes from "./SearchResults.module.css";
import { setEqualHeights } from "../../helpers/helpers";

class SearchResults extends Component {
  componentDidMount() {
    setEqualHeights();

    // ensure we set the heights again if the window is resized
    window.addEventListener("resize", setEqualHeights);
  }

  componentDidUpdate() {
    setEqualHeights();
  }

  // sort by date descending
  sortMedia = media => {
    return media.sort(
      (a, b) => b.release_date.slice(0, 4) - a.release_date.slice(0, 4)
    );
  };

  generateMedia = media => {
    return media.map(media => {
      const BUTTON_TEXT = "Watch this";

      return (
        <MediaDetails
          key={media.id}
          title={media.title}
          posterPath={media.poster_path}
          releaseDate={media.release_date}
          buttonText={BUTTON_TEXT}
          clicked={this.props.setCurrentMediaHandler.bind(this, media.id)}
          getPosterBaseURL={this.props.getPosterBaseURL}
        />
      );
    });
  };

  render() {
    const media = this.props.media
      ? this.generateMedia(this.sortMedia(this.props.media))
      : null;

    return <div className={classes.SearchResults}>{media}</div>;
  }
}

export default SearchResults;
