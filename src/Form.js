import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div className="form">
        <input
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="Whats on your mind?"
          required
        />
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}
