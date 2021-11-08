import React from "react";
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const [state, setstate] = React.useState("");

  return (
    <div className="search-box">
      <button className="btn-search">
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <input
        type="text"
        onChange={() => {
          setstate(document.querySelector(".search-box input").value);
        }}
        className="input-search"
        placeholder="Type to Search..."
      />
    </div>
  );
};
export default Search;
