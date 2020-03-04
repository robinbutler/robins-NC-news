import React, { Component } from "react";
import * as api from "../utils/api";

class Voter extends Component {
  state = {
    optimistic: 0
  };

  handleClick = vote => {
    const { id, name } = this.props;
    api.patchVotes(id, vote, name);
    this.setState(currentState => {
      return { optimistic: currentState.optimistic + vote };
    });
  };
  render() {
    return (
      <section>
        <button
          disabled={this.state.optimistic === 1}
          onClick={() => {
            this.handleClick(1);
          }}
        >
          Up Vote
        </button>
        <p>Ranking: {this.props.votes + this.state.optimistic}</p>
        <button
          disabled={this.state.optimistic === -1}
          onClick={() => {
            this.handleClick(-1);
          }}
        >
          Down Vote
        </button>
      </section>
    );
  }
}

export default Voter;
