import React from "react";
import Button from "../UI/Button/Button";
import classes from "./SearchBar.module.css";
import Input from "../UI/Input/Input";

const SearchBar = () => {
  return (
    <div className={classes.SearchBar}>
      <form>
        <Input placeholder="e.g. Star Wars" />
        <Button type="primary" size="medium" form>
          Find
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
