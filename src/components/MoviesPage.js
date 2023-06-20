import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MovieShow from "./MovieShow";
import MoviesList from "./MoviesList";
import { Container, Card } from "semantic-ui-react";

function MoviesPage({ movies, addTomyList }) {
  const match = useRouteMatch();
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <MoviesList movies={movies} addTomyList={addTomyList} />
      </div>
      <div style={{ flex: 1 }}>
        <Route path={`${match.url}/:movieId`}>
          <MovieShow movies={movies} />
        </Route>
      </div>
    </div>
  );
}
export default MoviesPage;
