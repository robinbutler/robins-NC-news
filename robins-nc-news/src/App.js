import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Router } from "@reach/router";
import Homepage from "./components/Homepage";
import ArticleList from "./components/ArticleList";
import TopicList from "./components/TopicList";
import ArticleDetail from "./components/ArticleDetail";
import React, { Component } from "react";
import PostArticle from "./components/PostArticle";
import ErrorHandler from "./components/ErrorHandler";

class App extends Component {
  state = {
    username: "tickle122"
  };
  render() {
    return (
      <section className="App">
        <header className="HeaderBar">
          <Nav />
        </header>
        <main className="Mainpage">
          <Router>
            <Homepage path="/" />
            <TopicList path="/topics" />
            <ArticleList
              path="/articles/:limit"
              username={this.state.username}
            />
            <ArticleList
              path="/topic/:slug/articles/:limit"
              username={this.state.username}
            />
            <ArticleDetail
              path="/article/:article_id"
              username={this.state.username}
            />
            <PostArticle path="/post" username={this.state.username} />
            <ErrorHandler
              default
              error={{ msg: "Path not found", status: "404" }}
            />
          </Router>
        </main>
        <footer className="Footer">
          <Footer />
        </footer>
      </section>
    );
  }
}

export default App;
