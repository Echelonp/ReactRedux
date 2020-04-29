import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";

// component
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
