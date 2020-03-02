import React from "react";
import "./App.css";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Searchbar from "./components/Searchbar";
import Footer from "./components/Footer";
import { Router } from "@reach/router";
import Homepage from "./components/Homepage";

function App() {
  return (
    <section className="App">
      <header className="HeaderBar">
        <Title />
        <Searchbar />
        <Nav />
      </header>
      <main className="Mainpage">
        <Router>
          <Homepage path="/" />
        </Router>
      </main>
      <footer className="Footer">
        <Footer />
      </footer>
    </section>
  );
}

export default App;
