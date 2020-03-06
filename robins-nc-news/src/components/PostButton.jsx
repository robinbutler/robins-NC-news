import React from "react";
import { Link } from "@reach/router";

const PostButton = () => {
  return (
    <div>
      <Link to="/post" className="Link">
        <h3 className="PostButton">Post article</h3>
      </Link>
    </div>
  );
};

export default PostButton;
