import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  styles = {
    fontSize: 30,
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getButtonColor()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm"> click</button>
      </div>
    );
  }
  getButtonColor() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "primary" : "warning";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
