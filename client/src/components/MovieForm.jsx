import React from "react";

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      hasWatched: true,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <label>
          <input
            name="title"
            type="text"
            placeholder={"Add movie..."}
            value={this.state.title}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          <button
            name="hasWatched"
            type="checked"
            checked={this.state.hasWatched}
            onChange={this.handleInputChange}
          >
            ADD!
          </button>
        </label>
      </form>
    );
  }
}

export default MovieForm;
