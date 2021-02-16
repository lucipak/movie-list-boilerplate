import React, { useState } from "react";

const MovieListEntry = ({ movie }) => {
  const [showMore, setShowMore] = useState({ showDetails: false });
  const handleShowMore = (e) => {
    e.preventDefault();

    setShowMore({ showDetails: !showMore.showDetails });
  };
  return (
    <div>
      <div className="movie-list-title" onClick={handleShowMore}>
        {showMore.showDetails ? (
          <div>
            <div>{movie.title}</div>
            <p>{movie.overview}</p>
            <p>{movie.releaseDate}</p>
            <p>{movie.voterAverage}</p>
            <img src={movie.imageURL} />
          </div>
        ) : (
          <div>{movie.title}</div>
        )}
      </div>
    </div>
  );
};

export default MovieListEntry;
