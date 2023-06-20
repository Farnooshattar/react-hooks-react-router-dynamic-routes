import React from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies, addTomyList }) {
  // function addTomyList(movieID) {
  //   console.log(movieID);
  // }

  const renderMovies = Object.keys(movies).map((movieID) => (
    <div style={{ width: "300px", margin: "10px" }} key={movieID}>
      <img
        src={movies[movieID].imageUrl}
        alt={movies[movieID].title}
        style={{ width: "200px", height: "auto" }}
      />
      <div>
        <h4>
          <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
        </h4>
      </div>
      <button
        type="button"
        onClick={() => {
          console.log(movieID);
          addTomyList(movieID);
        }}>
        Add to my List
      </button>
    </div>
  ));

  return <div>{renderMovies}</div>;
}

export default MoviesList;
