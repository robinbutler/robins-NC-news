import React, { Component } from "react";
import * as api from "../utils/api";

class PostArticle extends Component {
  state = {
    isLoading: true,
    topic: "",
    title: "",
    body: ""
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  handleTitleChange = event => {
    const title = event.target.value;
    this.setState({ title });
  };

  handleTopicChange = event => {
    const topic = event.target.value;
    this.setState({ topic });
  };

  handleBodyChange = event => {
    const body = event.target.value;
    this.setState({ body });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { topic, title, body } = this.state;
    const author = this.props.username;
    api.postArticle({ title, body, topic, author }).then(response => {
      console.log(response);
    });

    this.setState({ topic: "", title: "", body: "" });
  };

  render() {
    return (
      <main className="PostArticle">
        <h2 className="PAheader">Add a new article!</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            className="PATopic"
            type="text"
            placeholder="Topic"
            value={this.state.topic}
            onChange={this.handleTopicChange}
            required={true}
          ></input>
          <input
            className="PATitle"
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleTitleChange}
            required={true}
          ></input>
          <textarea
            className="ArticleBox"
            rows="4"
            cols="40"
            name="article"
            placeholder="Wrtie your article here!"
            value={this.state.body}
            onChange={this.handleBodyChange}
            required={true}
          ></textarea>
          <button className="PAButton">Submit Article</button>
        </form>
      </main>
    );
  }
}

export default PostArticle;
