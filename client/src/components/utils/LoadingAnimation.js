import React, { Component } from "react";
import "./LoadingAnimation.css";
import PrimarySearchAppBar from "./../PrimarySearchAppBar";

class LoadingAnimation extends Component {
  render() {
    return (
      <div>
        {/* <PrimarySearchAppBar /> */}
        <div className="cube-wrapper">
          <div className="cube-folding">
            <span className="leaf1" />
            <span className="leaf2" />
            <span className="leaf3" />
            <span className="leaf4" />
          </div>
          <span className="loading" data-name="Loading">
            Loading
          </span>
        </div>
      </div>
    );
  }
}

export default LoadingAnimation;
