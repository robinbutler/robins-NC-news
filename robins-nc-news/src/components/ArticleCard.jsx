import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";
import Delete from "./Delete";

const ArticleCard = ({
  article: {
    title,
    votes,
    topic,
    author,
    created_at,
    comment_count,
    article_id
  },
  username,
  removeArticle
}) => {
  return (
    <main className="Card">
      <Link to={`/article/${article_id}`} className="Link">
        <section className="ACTop">
          <p>By: {author}</p>
          <div>Posted on: {created_at.substring(0, 10)}</div>
        </section>
        <section className="ACMain">
          <p>Topic: {topic}</p>
          <h2>{title}</h2>
        </section>
      </Link>
      <section className="ACFooter">
        <div>Comments: {comment_count}</div>
        <Voter id={article_id} name="articles" votes={votes} />
      </section>
      {author === username && (
        <Delete
          name={"article"}
          article_id={article_id}
          removeArticle={removeArticle}
        />
      )}
    </main>
  );
};

export default ArticleCard;
