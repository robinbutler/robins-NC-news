import React from "react";
import { Link } from "@reach/router";

const PostButton = () => {
  return (
    <div>
      <Link to="/post" className="Link">
        <h3>Post article</h3>
      </Link>
    </div>
  );
};

export default PostButton;
