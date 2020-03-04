import React from "react";
import { Link } from "@reach/router";

const TopicCard = ({ topic: { description, slug } }) => {
  return (
    <Link to={`/topic/${slug}/articles/999`}>
      <section className="Card">
        <div className="ACMain">
          <p>{description}</p>
          <h2>{slug}</h2>
        </div>
      </section>
    </Link>
  );
};

export default TopicCard;
