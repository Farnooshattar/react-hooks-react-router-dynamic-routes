import React, { useState } from "react";

function SearchMovie({ searchMovie }) {
  const [searchedMovie, setSearchedMovie] = useState("");
  function handleSearchChange(e) {
    //console.log(e.target.value)
    setSearchedMovie(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(searchedMovie);
    if (searchedMovie !== "") searchMovie(searchedMovie);
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <form onSubmit={handleClick}>
          <input
            className="prompt"
            value={searchedMovie}
            onChange={handleSearchChange}
          />
          <button type="submit">
            Search Movies
            <i className="search icon" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchMovie;
