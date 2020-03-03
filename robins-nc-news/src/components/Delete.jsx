import React, { Component } from "react";

class Delete extends Component {
  handleDelete = ({ target: { name } }) => {
    if (name === "comment") {
      this.props.removeComment(this.props.comment_id);
    }
  };
  render() {
    return (
      <button onClick={this.handleDelete} name={this.props.name}>
        Delete {this.props.type}
      </button>
    );
  }
}

export default Delete;
