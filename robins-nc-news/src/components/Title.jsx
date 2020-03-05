import React from "react";
import { Link } from "@reach/router";

const Title = () => {
  return (
    <Link to="/" className="Title">
      <header>
        <h2>Robin's News</h2>
      </header>
    </Link>
  );
};

export default Title;
