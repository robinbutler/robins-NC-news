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
    <main className="Card">
      <section className="ACHeader">
        <p>Topic: {topic}</p>
        <Voter id={article_id} name="articles" votes={votes} />
      </section>
      <Link to={`/article/${article_id}`}>
        <section className="ACMain">
          <p>By: {author}</p>
          <h2>{title}</h2>
        </section>
        <section className="ACFooter">
          <div>Posted: {created_at}</div>
          <div>Comments: {comment_count}</div>
        </section>
      </Link>
    </main>
  );
};

export default ArticleCard;
