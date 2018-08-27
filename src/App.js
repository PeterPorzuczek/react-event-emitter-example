import React, { Component } from "react";
import WeekSlider from "./components/WeekSlider.js";
import WeekHeader from "./components/WeekHeader.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Week chooser app</p>
        <WeekSlider />
        <WeekHeader />
      </div>
    );
  }
}

export default App;
