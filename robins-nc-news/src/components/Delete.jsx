import React, { Component } from "react";
import * as api from "../utils/api";

class Delete extends Component {
  handleClick() {
    const { name, comment_id } = this.props;
    if (name === "comment") {
      api.deleteComment(comment_id);
    }
  }
  render() {
    return (
      <button>
        onClick={this.handleClick} name={this.props.name}> Delete{" "}
        {this.props.type}
      </button>
    );
  }
}

export default Delete;
