import React, { Component } from "react";
import TopicCard from "./TopicCard";
import * as api from "../utils/api";
import Loading from "./Loading";

class TopicList extends Component {
  state = {
    topics: [],
    isLoading: true
  };

  componentDidMount() {
    api.fetchTopics().then(topics => {
      this.setState({ topics, isLoading: false });
    });
  }
  render() {
    const { isLoading, topics } = this.state;
    if (isLoading) return <Loading />;
    return (
      <main>
        <h2>Topics</h2>
        {topics.map(topic => {
          return <TopicCard topic={topic} key={topic.slug} />;
        })}
      </main>
    );
  }
}

export default TopicList;
