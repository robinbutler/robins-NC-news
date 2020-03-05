import React, { Component } from "react";
import Loading from "./Loading";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";
import ArticleSort from "./ArticleSort";
import ErrorHandler from "./ErrorHandler";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    username: this.props.username,
    error: {
      status: "",
      msg: "",
      isError: false
    }
  };

  componentDidMount() {
    api
      .fetchTopArticles(this.props)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.slug !== this.props.slug) {
      api.fetchTopArticles(this.props).then(articles => {
        this.setState({ articles, isLoading: false });
      });
    }
  }

  sortArticles = name => {
    api.fetchTopArticles(this.props, name).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };

  removeArticle = article_id => {
    api.deleteArticle(article_id).then(() => {
      api.fetchTopArticles(this.props).then(articles => {
        this.setState({ articles, isLoading: false }).catch(({ response }) => {
          if (response) {
            this.setState({
              error: {
                status: response.status,
                msg: response.data.msg,
                isError: true
              }
            });
          }
        });
      });
    });
  };

  render() {
    const {
      isLoading,
      articles,
      error: { isError }
    } = this.state;
    if (isLoading) return <Loading />;
    if (isError) return <ErrorHandler error={this.state.error} />;
    return (
      <main>
        <ArticleSort sortArticles={this.sortArticles} />
        {articles.map(article => {
          return (
            <ArticleCard
              article={article}
              key={article.article_id}
              username={this.props.username}
              removeArticle={this.removeArticle}
            />
          );
        })}
      </main>
    );
  }
}

export default ArticleList;
