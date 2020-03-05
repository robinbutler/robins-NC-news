import React from "react";
import Delete from "./Delete";
import Voter from "./Voter";

const CommentCard = ({
  comment: { author, article_id, votes, created_at, body, comment_id },
  username,
  removeComment
}) => {
  return (
    <section className="Card">
      <p>Author: {author}</p>
      <p>{body}</p>
      <section className="ACFooter">
        <p>Posted on: {created_at.substring(0, 10)}</p>
        <Voter id={comment_id} name={"comments"} votes={votes} />
      </section>
      {author === username && (
        <Delete
          name={"comment"}
          comment_id={comment_id}
          removeComment={removeComment}
        />
      )}
    </section>
  );
};

export default CommentCard;
