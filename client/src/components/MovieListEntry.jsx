import React from "react";

const MovieListEntry = (props) => {
  return (
    <div>
      <div className="movie-list-title" onClick={props.showInfo}>
        {props.movies.title}
      </div>
    </div>
  );
};

export default MovieListEntry;
