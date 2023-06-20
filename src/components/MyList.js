import React from "react";
import { useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MovieShow from "./MovieShow";
import MoviesList from "./MoviesList";
import { Container, Card } from "semantic-ui-react";
import ListCard from "./ListCard";
import ReactPlayer from "react-player/youtube";

function MyList({ movies }) {
  const match = useRouteMatch();
  const [currentMovie, setCurrentMovie] = useState({});
  console.log(currentMovie);
  return (
    <>
      <h1>My list</h1>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          {movies.map((movie) => (
            <ListCard movie={movie} setCurrentMovie={setCurrentMovie} />
          ))}
        </div>
        <div style={{ flex: 1 }}>
          <ReactPlayer
            style={{ width: "100%", height: "auto" }}
            url={currentMovie.trailer}
            controls={true}
          />
        </div>
      </div>
    </>
  );
}
export default MyList;
