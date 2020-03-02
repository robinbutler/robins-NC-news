import React from "react";
import { Link } from "@reach/router";

const Homepage = () => {
  return (
    <div>
      <Link to="/topics">
        <button>All Topics</button>
      </Link>
      <Link to="/articles">
        <button>All Articles</button>
      </Link>
    </div>
  );
};

export default Homepage;
