import React, { Component } from "react";
import "../services/GlobalEventService.js";
import globalEventService from "../services/GlobalEventService.js";

class WeekHeader extends Component {
  state = this.getInitialState();

  getInitialState() {
    return { week: 1 };
  }

  componentDidMount() {
    globalEventService.on(
      "change-week-from-slider",
      this.handleWeekChangeFromSlider
    );
  }

  handleWeekChangeFromSlider = value => {
    this.setState({ week: value });
  };

  previous = () => {
    const week = this.state.week > 1 ? this.state.week - 1 : this.state.week;

    this.setState({ week: week });

    globalEventService.emit("change-week-from-header", week);
  };

  next = () => {
    const week = this.state.week < 12 ? this.state.week + 1 : this.state.week;

    this.setState({ week: week });

    globalEventService.emit("change-week-from-header", week);
  };

  render() {
    return (
      <div className="week-header">
        <button onClick={this.previous}>previous</button>
        <p>Week {this.state.week}</p>
        <button onClick={this.next}>next</button>
      </div>
    );
  }
}

export default WeekHeader;
