import React, { Component } from "react";

class Delete extends Component {
  state = {
    hasBeenPressed: false
  };
  handleDelete = ({ target: { name } }) => {
    if (name === "comment") {
      this.props.removeComment(this.props.comment_id);
      this.setState({ hasBeenPressed: true });
    } else if (name === "article") {
      const { article_id, username } = this.props;
      this.props.removeArticle(article_id, username);
    }
  };
  render() {
    return (
      <button
        onClick={this.handleDelete}
        name={this.props.name}
        disabled={this.state.hasBeenPressed === true}
        className="ACTop"
      >
        Delete {this.props.type}
      </button>
    );
  }
}

export default Delete;
