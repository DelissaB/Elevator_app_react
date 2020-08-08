import React from "react"

import Navbar from "./components/Navbar";
import Main from "./sections/Main";
import About from "./sections/About";
import Contacts from "./sections/Contact";
import "./App.css";
import { render } from "react-dom";

function App extends Components () {
  render() {
    return (
      <div className="App">
        <ul>
        <Navbar />
        <Main />
        <About />
        <Contact />
        </ul>
        
      </div>
    );
  }
}
export default App;