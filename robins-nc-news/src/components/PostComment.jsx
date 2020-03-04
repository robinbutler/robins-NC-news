import React, { Component } from "react";
import Loading from "./Loading";

class PostComment extends Component {
  state = {
    isLoading: true,
    commment: "",
    currentUser: this.props.username
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  handleChange = event => {
    const comment = event.target.value;
    this.setState({ comment });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.insertComment(this.state.currentUser, this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    const { isLoading } = this.state;
    if (isLoading) return <Loading />;
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          className="CommentBox"
          rows="4"
          cols="40"
          name="comment"
          form="usrform"
          onChange={this.handleChange}
          value={this.state.userInput}
          placeholder="Write a comment..."
          required={true}
        ></textarea>
        <button>Submit Comment</button>
      </form>
    );
  }
}

export default PostComment;
