import React, { Component } from "react";

class Delete extends Component {
  state = {
    hasBeenPressed: false
  };
  handleDelete = () => {
    const { name } = this.props;
    if (name === "comment") {
      this.props.removeComment(this.props.comment_id);
      this.setState({ hasBeenPressed: true });
    } else if (this.props.name === "article") {
      const { article_id } = this.props;
      this.props.removeArticle(article_id);
    }
  };
  render() {
    return (
      <section
        onClick={this.handleDelete}
        name={this.props.name}
        disabled={this.state.hasBeenPressed === true}
        className="x"
      />
    );
  }
}

export default Delete;
