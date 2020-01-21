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

  formatMedia = media => {
    const PLACEHOLDER_POSTER_URL =
      "https://via.placeholder.com/500x750.png?text=No+poster+available";
    return media.map(media => {
      const id = media.id;
      const title = media.title;
      const poster = media.poster_path
        ? `${this.props.getPosterBaseURL()}/${media.poster_path}`
        : PLACEHOLDER_POSTER_URL;
      const year = media.release_date.slice(0, 4);
      const BUTTON_TEXT = "Watch this";

      return (
        <MediaDetails
          key={id}
          title={title}
          poster={poster}
          year={year}
          buttonText={BUTTON_TEXT}
        />
      );
    });
  };

  render() {
    const media = this.props.media
      ? this.formatMedia(this.sortMedia(this.props.media))
      : null;

    return <div className={classes.SearchResults}>{media}</div>;
  }
}

export default SearchResults;
