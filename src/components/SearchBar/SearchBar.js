import React from "react";
import Button from "../UI/Button/Button";
import classes from "./SearchBar.module.css";
import Input from "../UI/Input/Input";

const SearchBar = props => {
  return (
    <div className={classes.SearchBar}>
      <form onSubmit={props.searchHandler}>
        <Input name="search" class="search" placeholder="e.g. Star Wars" />
        <Button type="primary" size="medium" form>
          Find
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
