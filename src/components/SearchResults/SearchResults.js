import React, { Component } from "react";
import MediaDetails from "../MediaDetails/MediaDetails";
import classes from "./SearchResults.module.css";

class SearchResults extends Component {
  // sort by date descending
  sortFilms = films => {
    return films.sort(
      (a, b) => b.release_date.slice(0, 4) - a.release_date.slice(0, 4)
    );
  };

  formatFilms = films => {
    const PLACEHOLDER_POSTER_URL =
      "https://via.placeholder.com/500x750.png?text=No+poster+available";
    return films.map(film => {
      const id = film.id;
      const title = film.title;
      const poster = film.poster_path
        ? `${this.props.getPosterBaseURL()}/${film.poster_path}`
        : PLACEHOLDER_POSTER_URL;
      const year = film.release_date.slice(0, 4);

      return (
        <MediaDetails key={id} title={title} poster={poster} year={year} />
      );
    });
  };

  render() {
    const films = this.props.films
      ? this.formatFilms(this.sortFilms(this.props.films))
      : null;

    return <div className={classes.SearchResults}>{films}</div>;
  }
}

export default SearchResults;
