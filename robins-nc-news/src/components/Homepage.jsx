import React from "react";
import { Link } from "@reach/router";
import ArticleList from "./ArticleList";

const Homepage = () => {
  return (
    <div>
      <Link to="/topics">
        <button>All Topics</button>
      </Link>
      <Link to="/articles/999">
        <button>All Articles</button>
      </Link>
      <h2>Top articles</h2>
      <ArticleList limit={5} />
    </div>
  );
};

export default Homepage;
