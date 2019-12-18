import React from "react";
import MediaDetails from "../MediaDetails/MediaDetails";
import classes from "./SearchResults.module.css";

const SearchResults = props => {
  return (
    <div className={classes.SearchResults}>
      <MediaDetails
        title="Star Wars: Episode 1 - The Phantom Menace"
        year="1999"
        poster="https://image.tmdb.org/t/p/original/n8V09dDc02KsSN6Q4hC2BX6hN8X.jpg"
      />
      <MediaDetails
        title="Star Wars: Episode 2 - Attack of the Clones"
        year="2002"
        poster="https://image.tmdb.org/t/p/original/2vcNFtrZXNwIcBgH5e2xXCmVR8t.jpg"
      />
      <MediaDetails
        title="Star Wars: Episode 3 - Revenge of the Sith"
        year="2005"
        poster="https://image.tmdb.org/t/p/original/tgr5Pdy7ehZYBqBkN2K7Q02xgOb.jpg"
      />
    </div>
  );
};

export default SearchResults;
