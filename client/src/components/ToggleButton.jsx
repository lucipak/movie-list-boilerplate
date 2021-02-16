import axios from "axios";
import React from "react";
import MovieList from "./Movies.jsx";

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      hasWatched: this.props.hasWatched == 1 ? true : false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ hasWatched: !this.state.hasWatched });
    this.props.updateMovie(this.state);
  }

  render() {
    console.log(this.props.hasWatched);
    return (
      <label className="switch">
        <input
          type="checkbox"
          value={this.props.hasWatched}
          onChange={this.handleChange}
        />
        <div className="slider"></div>
      </label>
    );
  }
}

export default ToggleButton;
