import React from "react";

import SearchForm from "./SearchForm.jsx";
import MovieList from "./Movies.jsx";
import AddMovies from "./AddMovies.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.updateIfWatched = this.updateIfWatched.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    axios
      .get("/api/movies")
      .then(({ data }) => this.setState({ movies: data }))
      .catch((err) => console.log(err));
  }

  addNewMovie(movie) {
    axios
      .post("/api/movies", movie)
      .then(() => this.getMovies())
      .catch((err) => console.log(err));
  }

  deleteMovie(e) {
    const { value } = e.target;
    console.log(value);
    axios
      .delete(`/api/movies/${value}`)
      .then(() => this.getMovies())
      .catch((err) => console.log(err));
  }

  updateIfWatched(movie) {
    axios
      .put("/api/movies", movie)
      .then(() => this.getMovies())
      .then(() => console.log(this.state))
      .catch((err) => console.log(err));
  }

  onSubmit(event) {
    let container = [];
    this.state.movies.map((x) => {
      if (x.title === event.target[0].value) return container.push(x);
    });
    if (container.length === 0) {
      alert("No results found!");
    }
    this.setState({
      movies: container,
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Movies</h1>
        <SearchForm onSubmit={this.onSubmit} />
        <AddMovies addNewMovie={this.addNewMovie} />
        <MovieList
          movies={this.state.movies}
          updateMovie={this.updateIfWatched}
          deleteMovie={this.deleteMovie}
          showInfo={this.showInfo}
        />
      </div>
    );
  }
}

export default App;
