import React, { Component } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";


class App extends Component {
  render() {
    return (
      <div className="App">
      <About />
      <Contact />
      <Projects />
      </div>
    );
  }
}

export default App;
