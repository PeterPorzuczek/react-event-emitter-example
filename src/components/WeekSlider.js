import React, { Component } from "react";
import "../services/GlobalEventService.js";
import globalEventService from "../services/GlobalEventService.js";
import "./WeekSlider.css";

class WeekSlider extends Component {
  state = this.getInitialState();

  getInitialState() {
    return { week: 1 };
  }

  componentDidMount() {
    globalEventService.on(
      "change-week-from-header",
      this.handleWeekChangeFromHeader
    );
  }

  handleWeekChangeFromHeader = value => {
    this.setState({ week: value });
  };

  weekClick = event => {
    const week = Number(event.target.attributes.week.value);

    this.setState({ week: week });

    globalEventService.emit("change-week-from-slider", week);
  };

  slider = (current, length) => {
    let weeks = [];
    for (let i = 0; i < length; i++) {
      const weekClassName =
        i + 1 < current ? "visited" : i + 1 === current ? "current" : "future";
      weeks.push(
        <li key={i} className={weekClassName}>
          <em week={i + 1} onClick={this.weekClick}>
            {i + 1}
          </em>
        </li>
      );
    }
    return <ol className="cd-multi-steps text-bottom count">{weeks}</ol>;
  };

  render() {
    return (
      <div className="week-slider">{this.slider(this.state.week, 12)}</div>
    );
  }
}

export default WeekSlider;
