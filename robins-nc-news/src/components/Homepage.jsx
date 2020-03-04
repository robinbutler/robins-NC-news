import React from "react";
import { Link } from "@reach/router";
import ArticleList from "./ArticleList";

const Homepage = () => {
  return (
    <main>
      <section className="HomepageButtons">
        <Link to="/topics">
          <button>All Topics</button>
        </Link>
        <Link to="/articles/999">
          <button>All Articles</button>
        </Link>
      </section>
      <h2>Top articles</h2>
      <ArticleList limit={5} />
    </main>
  );
};

export default Homepage;
