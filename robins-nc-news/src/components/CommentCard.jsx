import React from "react";
import Delete from "./Delete";

const CommentCard = ({
  comment: { author, article_id, votes, created_at, body, comment_id },
  username
}) => {
  return (
    <section>
      <p>Author: {author}</p>
      <p> {body}</p>
      <p>Votes: {votes}</p>
      <p>Posted: {created_at}</p>
      {author === username && (
        <Delete name={"comment"} comment_id={comment_id} />
      )}
    </section>
  );
};

export default CommentCard;
