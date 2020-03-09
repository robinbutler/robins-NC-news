import React, { Component } from "react";
import Title from "./Title";
import { bubble as Menu } from "react-burger-menu";
import { Link } from "@reach/router";
import PostButton from "./PostButton";

class Nav extends Component {
  render() {
    return (
      <>
        <nav>
          <section className="Nav">
            <section className="Account">
              <p className="Account">Account: {this.props.username}</p>
              <PostButton />
            </section>
            <Title />
          </section>
          <Menu right id={"sidebar"} className={"my-class"}>
            <Link to="/" className="Link">
              <p>Home</p>
            </Link>
            <Link to="/topics" className="Link">
              <p>Topics</p>
            </Link>
            <Link to="/articles/999" className="Link">
              Articles
            </Link>
          </Menu>
        </nav>
      </>
    );
  }
}

export default Nav;
