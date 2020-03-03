import React, { Component } from "react";
import * as api from "../utils/api";
import Loading from "./Loading";
import CommentList from "./CommentList";
import PostComment from "./PostComment";

class ArticleDetail extends Component {
  state = {
    isLoading: true,
    comments: []
  };

  componentDidMount() {
    const { article_id } = this.props;
    api.fetchArticleById(article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  }

  insertComment = (username, body) => {
    const article_id = this.state.article.article_id;
    api
      .postComment(article_id, username, body)
      .then(({ data: { comment } }) => {
        this.setState(currentState => {
          return { comments: [comment, ...currentState.comments] };
        });
      });
  };

  render() {
    if (this.state.isLoading) return <Loading />;
    const {
      title,
      votes,
      topic,
      author,
      body,
      created_at
    } = this.state.article;
    return (
      <>
        <p>{title}</p>
        <p>{body}</p>
        <p>{topic}</p>
        <p>{votes}</p>
        <p>{author}</p>
        <p>{created_at}</p>
        <PostComment
          username={this.props.username}
          insertComment={this.insertComment}
        />
        <CommentList
          id={this.props.article_id}
          comments={this.state.comments}
          username={this.props.username}
        />
      </>
    );
  }
}

export default ArticleDetail;
