import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

function MovieShow({ movies }) {
  const params = useParams();

  return (
    <div>
      <h3>{movies[params.movieId].title}</h3>

      <p>This is a description of the card.</p>

      <div style={{ display: "flex", alignContent: "center" }}>
        {/* <div style={{ flex: 1 }}>
          <img
            style={{ width: "150px" }}
            src={movies[params.movieId].imageUrl}
            alt="Movie Poster"
          />
        </div> */}

        <ReactPlayer
          style={{ width: "100%", height: "auto" }}
          url={movies[params.movieId].trailer}
          controls={true}
        />
      </div>
    </div>
  );
}

export default MovieShow;
