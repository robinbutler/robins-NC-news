import React, { Component } from "react";
import Title from "./Title";
import { bubble as Menu } from "react-burger-menu";
import { Link } from "@reach/router";
import PostButton from "./PostButton";

class Nav extends Component {
  render() {
    return (
      <>
        <main>
          <section className="Nav">
            <PostButton />
            <Title />
          </section>
          <Menu right id={"sidebar"} className={"my-class"}>
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/topics">
              <p>Topics</p>
            </Link>
            <Link to="/articles/999">Articles</Link>
          </Menu>
        </main>
      </>
    );
  }
}

export default Nav;
