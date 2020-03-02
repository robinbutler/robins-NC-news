import React from "react";
import "./App.css";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Router } from "@reach/router";
import Homepage from "./components/Homepage";
import ArticleList from "./components/ArticleList";
import TopicList from "./components/TopicList";

function App() {
  return (
    <section className="App">
      <header className="HeaderBar">
        <Title />
        <Nav />
      </header>
      <main className="Mainpage">
        <Router>
          <Homepage path="/" />
          <ArticleList path="/articles/:limit" />
          <ArticleList path="/topic/:slug/articles/:limit" />
          <TopicList path="/topics" />
        </Router>
      </main>
      <footer className="Footer">
        <Footer />
      </footer>
    </section>
  );
}

export default App;
