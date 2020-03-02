import React, { Component } from "react";
import Loading from "./Loading";
import * as api from "../utils/api";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    api.fetchArticles().then(articles => {
      console.log("hello");
      this.setState({ articles, isLoading: false });
    });
  }
  render() {
    const { isLoading } = this.state;
    if (isLoading) return <Loading />;
    return <main>article list here</main>;
  }
}

export default ArticleList;
