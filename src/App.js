import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";

// component
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/:post_id" component={Post}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
