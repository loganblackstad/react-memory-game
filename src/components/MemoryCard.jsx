import React, { Component } from "react";
import "./MemoryCard.css";
import logo from "../logo-wrench-white.png";
// import PropTypes from "prop-types";

// class MemoryCard extends Component {

export default class MemoryCard extends Component {
  render() {
    let innerClass = "MemoryCard_inner";

    if (this.props.isFlipped) {
      innerClass += " flipped";
    }

    return (
      <div className="MemoryCard" onClick={this.props.pickCard}>
        <div className={innerClass}>
          <div className="MemoryCard_back">
            <img src="https://www.digitalcrafts.com/img/logo-wrench-white.png"></img>
          </div>
          <div className="MemoryCard_front">{this.props.symbol}</div>
        </div>
      </div>
    );
  }
}

// export default MemoryCard;
