import React from "react";
import MediaDetails from "../MediaDetails/MediaDetails";
import classes from "./SearchResults.module.css";

const SearchResults = props => {
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

  const films = props.films ? formatFilms(props.films) : null;

  return <div className={classes.SearchResults}>{films}</div>;
};

export default SearchResults;
