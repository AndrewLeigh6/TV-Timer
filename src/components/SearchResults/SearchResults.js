import React from "react";
import MediaDetails from "../MediaDetails/MediaDetails";
import classes from "./SearchResults.module.css";

const SearchResults = props => {
  // sort by date descending
  const sortFilms = films => {
    return films.sort(
      (a, b) => b.release_date.slice(0, 4) - a.release_date.slice(0, 4)
    );
  };

  const formatFilms = films => {
    return films.map(film => {
      const id = film.id;
      const title = film.title;
      const poster = `${props.getPosterBaseURL()}/${film.poster_path}`;
      const year = film.release_date.slice(0, 4);

      return (
        <MediaDetails key={id} title={title} poster={poster} year={year} />
      );
    });
  };

  const films = props.films ? formatFilms(sortFilms(props.films)) : null;

  return <div className={classes.SearchResults}>{films}</div>;
};

export default SearchResults;
