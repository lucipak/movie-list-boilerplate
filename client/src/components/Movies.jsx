import React from "react";
import MovieListEntry from "./MovieListEntry.jsx";
import ToggleButton from "./ToggleButton.jsx";

const MovieList = (props) => {
  console.log();
  return (
    <div className="movie-list">
      {props.movies.map((movie, idx) => {
        return (
          <div key={idx}>
            <MovieListEntry movies={movie} showInfo={props.showInfo} />
            <ToggleButton
              updateMovie={props.updateMovie}
              id={movie.id}
              hasWatched={movie.hasWatched}
            />
            <button
              value={movie.id}
              name={movie.title}
              onClick={props.deleteMovie}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
