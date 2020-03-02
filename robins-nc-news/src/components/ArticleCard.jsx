import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({
  article: {
    title,
    votes,
    topic,
    author,
    created_at,
    comment_count,
    article_id
  }
}) => {
  return (
    <section className="ArticleCard">
      <Link to={`/articles/${article_id}`}>
        <button>
          `<h4>{title}</h4>
          <p>Rating: {votes}</p>
          <p>Topic: {topic}</p>
          <p>Author: {author}</p>
          <p>Posted: {created_at}</p>
          <p>comments: {comment_count}</p>
        </button>
      </Link>
    </section>
  );
};

export default ArticleCard;
