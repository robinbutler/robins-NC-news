import React from "react";
import { Link } from "@reach/router";

const Title = () => {
  return (
    <Link to="/">
      <button>
        <header>
          <h1>Robin's News</h1>
        </header>
      </button>
    </Link>
  );
};

export default Title;
