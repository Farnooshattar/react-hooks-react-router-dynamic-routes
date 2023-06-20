import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import MoviesPage from "./MoviesPage";
import MyList from "./MyList";
import SearchMovie from "./SearchMovie";
import MovieForm from "./MovieForm";
import Slideshow from "./Slideshow";
function App() {
  const [movies, setMovies] = useState([]);
  const [newmovies, setnewMovies] = useState([]);
  const [mylistmovies, setmylistMovies] = useState([]);
  const images = [
    "https://filmdb.landmarkcinemas.com/FilmImages/22/1/124505/NoHardFeelingsOfficialPoster.jpg",
    "https://filmdb.landmarkcinemas.com/FilmImages/22/1/124630/TheBlackeningOfficialPoster.jpg",
    "https://upload.wikimedia.org/wikipedia/en/c/c8/The_Final_Girls_poster.jpg",
  ];

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((r) => r.json())
      .then((data) => {
        setMovies(data);
        //setmylistMovies(data);
        console.log(data);
      });
  }, []);
  function searchMovie(searchedMovie) {
    console.log("search", searchedMovie);
    setMovies(movies.filter((movie) => movie.title === searchedMovie));
  }
  function onAddMovie(newMovie) {
    setnewMovies((prenewmovies) => [newMovie, ...prenewmovies]);
    setMovies((premovies) => [newMovie, ...premovies]);
  }
  function addTomyList(movieId) {
    //look for something
    const found = mylistmovies.find((movie) => movie.id === movieId);
    console.log("movieid", movieId);
    if (found) {
      return;
    }
    setmylistMovies((prelistmovies) => [...prelistmovies, movies[movieId]]);
    fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movies[movieId]),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Item added successfully:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="App">
      <Container style={{ marginTop: "2rem" }}>
        <header className="App-header" style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <NavBar />
          </div>
          <div style={{ flex: 1 }}>
            <SearchMovie searchMovie={searchMovie} />
          </div>
          <div style={{ flex: 1 }}>
            <MovieForm addMovie={onAddMovie} />
          </div>
          <div style={{ flex: 1 }}>
            <Slideshow images={images} />
          </div>
        </header>
        <Switch>
          <Route path="/mylist">
            <MyList movies={mylistmovies} />
          </Route>
          <Route path="/movies">
            <MoviesPage movies={movies} addTomyList={addTomyList} />
          </Route>
          <Route exact path="/">
            <div style={{ display: "flex", alignContent: "center" }}>
              <div style={{ flex: 1 }}>
                <p>
                  <h1 style={{ fontSize: "7rem" }}>UPCOMING MOVIES</h1>
                  <h2>Add the upcoming movies to your list.</h2>
                  <h2>Make sure to watch them when they are released!!!</h2>
                </p>
              </div>
            </div>
          </Route>
        </Switch>
      </Container>
    </div>
  );
}
export default App;
