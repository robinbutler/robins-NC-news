import React, { Component } from "react";
import Loading from "./Loading";
import * as api from "../utils/api";
import CommentCard from "../components/CommentCard";
import PostComment from "./PostComment";

class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  componentDidMount() {
    api.fetchCommentsByArticleId(this.props.article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments.length !== this.state.comments.length)
      api.fetchCommentsByArticleId(this.props.article_id).then(comments => {
        this.setState({ comments });
      });
  }

  removeComment = comment_id => {
    api.deleteComment(comment_id).then(() => {
      api.fetchCommentsByArticleId(this.props.article_id).then(comments => {
        this.setState({ comments });
      });
    });
  };

  insertComment = (username, body) => {
    const article_id = this.props.article_id;
    api
      .postComment(article_id, username, body)
      .then(({ data: { comment } }) => {
        this.setState(currentState => {
          return { comments: [comment, ...currentState.comments] };
        });
      });
  };

  render() {
    const { isLoading, comments } = this.state;
    if (isLoading) return <Loading />;
    return (
      <main>
        <PostComment
          username={this.props.username}
          insertComment={this.insertComment}
        />
        {comments.map(comment => {
          return (
            <CommentCard
              comment={comment}
              key={comment.comment_id}
              username={this.props.username}
              removeComment={this.removeComment}
            />
          );
        })}
      </main>
    );
  }
}

export default CommentList;
