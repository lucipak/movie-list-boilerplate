import axios from "axios";
import React from "react";

class AddMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      overview: "",
      releaseDate: "",
      voterAverage: 0,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=931b9eb47631a23f6cd5175e78e2a251&query=${this.state.title}`
      )
      .then((res) => {
        const result = res.data.results[0];
        this.setState({
          title: result.original_title,
          overview: result.overview,
          releaseDate: result.release_date,
          voterAverage: result.vote_average,
        });
      })
      .then(() => this.props.addNewMovie(this.state));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            name="title"
            type="text"
            placeholder={"Add movie..."}
            value={this.state.title}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">ADD!</button>
      </form>
    );
  }
}

export default AddMovies;
