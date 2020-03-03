import React, { Component } from "react";
import Loading from "./Loading";
import * as api from "../utils/api";
import CommentCard from "../components/CommentCard";

class CommentList extends Component {
  state = {
    comments: this.props.comments,
    isLoading: true
  };

  componentDidMount() {
    api.fetchCommentsByArticleId(this.props.id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  }

  componentDidUpdate() {
    api.fetchCommentsByArticleId(this.props.id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  }

  render() {
    const { isLoading, comments } = this.state;
    if (isLoading) return <Loading />;
    return (
      <main>
        {comments.map(comment => {
          return (
            <CommentCard
              comment={comment}
              key={comment.comment_id}
              username={this.props.username}
            />
          );
        })}
      </main>
    );
  }
}

export default CommentList;
