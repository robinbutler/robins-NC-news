import React from "react";
import { Link } from "@reach/router";

const TopicCard = ({ topic: { description, slug } }) => {
  return (
    <section>
      <Link to={`/topic/${slug}/articles/999`}>
        <button>
          <h4>{slug}</h4>
          <p>{description}</p>
        </button>
      </Link>
    </section>
  );
};

export default TopicCard;
