import React, { Component } from "react";
import "./MemoryCard.css";
import logo from "../logo-wrench-white.png";
// import PropTypes from "prop-types";

// class MemoryCard extends Component {

export default class MemoryCard extends Component {
  constructor(props) {
    super(props);

    this.state = { isFlipped: false };
  }

  clickHandler() {
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  render() {
    let innerClass = "MemoryCard_inner";

    if (this.state.isFlipped) {
      innerClass += " flipped";
    }

    return (
      <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
        <div className={innerClass}>
          <div className="MemoryCard_back">
            <img src="https://www.digitalcrafts.com/img/logo-wrench-white.png"></img>
          </div>
        </div>
      </div>
    );
  }
}

// export default MemoryCard;
