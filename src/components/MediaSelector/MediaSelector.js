import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

const MediaSelector = props => {
  return (
    <div>
      <SearchBar searchHandler={props.searchHandler} />
      <SearchResults
        media={props.media}
        getPosterBaseURL={props.getPosterBaseURL}
      />
    </div>
  );
};

export default MediaSelector;
