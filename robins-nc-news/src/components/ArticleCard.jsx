import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";

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
      <Link to={`/article/${article_id}`}>
        <h4>{title}</h4>
        <p>Topic: {topic}</p>
        <p>Author: {author}</p>
        <p>Posted: {created_at}</p>
        <p>comments: {comment_count}</p>
      </Link>
      <Voter id={article_id} name="articles" votes={votes} />
    </section>
  );
};

export default ArticleCard;
