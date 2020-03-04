import React, { Component } from "react";

class ArticleSort extends Component {
  handleSort = sort_by => {
    this.props.sortArticles(sort_by);
  };

  render() {
    return (
      <div className="ArticleSort">
        <p>sort by:</p>
        <section
          className="ClockLogo"
          onClick={() => {
            this.handleSort("created_at");
          }}
        ></section>
        <section
          className="VotesLogo"
          onClick={() => {
            this.handleSort("votes");
          }}
        ></section>
        <section
          className="CommentsLogo"
          onClick={() => {
            this.handleSort("comment_count");
          }}
        ></section>
      </div>
    );
  }
}

export default ArticleSort;
