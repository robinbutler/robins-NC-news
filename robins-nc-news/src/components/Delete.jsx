import React, { Component } from "react";

class Delete extends Component {
  state = {
    hasBeenPressed: false
  };
  handleDelete = ({ target: { name } }) => {
    if (name === "comment") {
      this.props.removeComment(this.props.comment_id);
      this.setState({ hasBeenPressed: true });
    }
  };
  render() {
    return (
      <button
        onClick={this.handleDelete}
        name={this.props.name}
        disabled={this.state.hasBeenPressed === true}
      >
        Delete {this.props.type}
      </button>
    );
  }
}

export default Delete;
