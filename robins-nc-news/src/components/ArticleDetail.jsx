import React, { Component } from "react";
import * as api from "../utils/api";
import Loading from "./Loading";
import CommentList from "./CommentList";

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
        <p>Topic: {topic}</p>
        <p>Rating: {votes}</p>
        <p>User: {author}</p>
        <p>Posted on: {created_at}</p>
        <CommentList
          article_id={this.props.article_id}
          username={this.props.username}
        />
      </>
    );
  }
}

export default ArticleDetail;
