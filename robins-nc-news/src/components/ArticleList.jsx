import React, { Component } from "react";
import Loading from "./Loading";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    api.fetchTopArticles(this.props).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.slug !== this.props.slug) {
      api.fetchTopArticles(this.props).then(articles => {
        this.setState({ articles, isLoading: false });
      });
    }
  }
  render() {
    const { isLoading, articles } = this.state;
    if (isLoading) return <Loading />;
    return (
      <main>
        <select>Sort By</select>
        {articles.map(article => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </main>
    );
  }
}

export default ArticleList;
