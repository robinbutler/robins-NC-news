import React from "react";
import { Link } from "@reach/router";
import ArticleList from "./ArticleList";

const Homepage = () => {
  return (
    <div>
      <Link to="/topics">
        <button>All Topics</button>
      </Link>
      <Link to="/articles">
        <button>All Articles</button>
      </Link>
      <h3>Top articles</h3>
      <ArticleList />
    </div>
  );
};

export default Homepage;
