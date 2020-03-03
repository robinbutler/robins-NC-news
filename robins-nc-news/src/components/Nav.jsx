import React, { Component } from "react";
import Title from "./Title";
import { bubble as Menu } from "react-burger-menu";
import { Link } from "@reach/router";

class Nav extends Component {
  render() {
    return (
      <main>
        <Menu right id={"sidebar"} className={"my-menu"}>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/topics">
            <p>Topics</p>
          </Link>
          <Link to="/articles/999">Articles</Link>
        </Menu>
        <Title />
      </main>
    );
  }
}

export default Nav;
