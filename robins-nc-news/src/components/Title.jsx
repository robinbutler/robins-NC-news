import React from "react";
import { Link } from "@reach/router";

const Title = () => {
  return (
    <Link to="/">
      <header className="Nav">
        <h1>Robin's News</h1>
      </header>
    </Link>
  );
};

export default Title;
