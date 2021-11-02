import React from "react";
import "./search.css";
import searchIcon from "./search.svg";

const Search = () => {
  return (
    <div class="search-box">
      <button class="btn-search">
        <img src={searchIcon} alt="S" />
      </button>
      <input type="text" class="input-search" placeholder="Type to Search..." />
    </div>
  );
};
export default Search;
