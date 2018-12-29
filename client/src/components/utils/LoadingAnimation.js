import React, { Component } from "react";
import "./LoadingAnimation.css";

class LoadingAnimation extends Component {

    render() {
        return (
            <div class="cube-wrapper">
            <div class="cube-folding">
                <span class="leaf1"></span>
                <span class="leaf2"></span>
                <span class="leaf3"></span>
                <span class="leaf4"></span>
            </div>
            <span class="loading" data-name="Loading">Loading</span>
            </div>
        )
    }
}

export default LoadingAnimation;