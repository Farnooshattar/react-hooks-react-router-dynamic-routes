import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function MovieForm({ addMovie }) {
  const [movieData, setMovieData] = useState({
    title: "",
    imageUrl: "",
    trailer: "",
  });

  function handleChange(event) {
    setMovieData({
      ...movieData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div>
      <h3>Add a Movie!</h3>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitting form...", e);
          console.log("change", movieData);
          const newMovie = {
            title: movieData.title,
            imageUrl: movieData.imageUrl,
            trailer: movieData.trailer,
          };

          fetch("http://localhost:3000/movies", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newMovie),
          });
          addMovie(newMovie);
        }}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Movie Title"
            placeholder="Movie Name"
            name="title"
            value={movieData.title}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="URL"
            placeholder="Movie Image"
            name="imageUrl"
            value={movieData.imageUrl}
            onChange={handleChange}
          />

          <Form.Input
            fluid
            label="Movie Trailer"
            placeholder="Movie Trailer"
            name="trailer"
            value={movieData.trailer}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default MovieForm;
