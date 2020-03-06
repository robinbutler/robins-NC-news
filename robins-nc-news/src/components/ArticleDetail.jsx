import React, { Component } from "react";
import * as api from "../utils/api";
import Loading from "./Loading";
import CommentList from "./CommentList";
import Voter from "./Voter";
import ErrorHandler from "./ErrorHandler";

class ArticleDetail extends Component {
  state = {
    isLoading: true,
    comments: [],
    error: {
      status: "",
      msg: "",
      isError: false
    }
  };

  componentDidMount() {
    const { article_id } = this.props;
    api
      .fetchArticleById(article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(({ response }) => {
        if (response) {
          this.setState({
            isLoading: false,
            error: {
              status: response.status,
              msg: response.data.msg,
              isError: true
            }
          });
        }
      });
  }

  render() {
    if (this.state.isLoading) return <Loading />;
    if (this.state.error.isError)
      return <ErrorHandler error={this.state.error} />;
    const {
      title,
      votes,
      topic,
      author,
      body,
      created_at,
      article_id
    } = this.state.article;

    return (
      <>
        <section className="Card">
          <div className="ACTop">
            <p>Topic: {topic}</p>
            <p>User: {author}</p>
          </div>
          <h2 className="ACHeader">{title}</h2>
          <p>{body}</p>
          <div className="ACFooter">
            <p>Posted on: {created_at.substring(0, 10)}</p>
            <Voter id={article_id} name="articles" votes={votes} />
          </div>
        </section>
        <CommentList
          article_id={this.props.article_id}
          username={this.props.username}
        />
      </>
    );
  }
}

export default ArticleDetail;
