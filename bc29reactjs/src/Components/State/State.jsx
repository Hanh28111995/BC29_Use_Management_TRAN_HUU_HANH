import React, { Component } from "react";

export default class State extends Component {
  state = {
    isShowMessage: true,
  };

  //   isShowMessage = true;

  handleHideMessage = () => {
    // this.state.isShowMessage = false;

    const newState = {
      isShowMessage: false,
    };

    this.setState(newState, () => {
      console.log(this.state.isShowMessage);
    });
  };

  handleShowMessage = () => {
    this.setState({
      isShowMessage: true,
    });
  };

  render() {
    console.log("Rendering...");

    return (
      <div>
        <h4>State</h4>
        <div>
          <button onClick={this.handleShowMessage} className="btn btn-warning">
            Show
          </button>
          <button onClick={this.handleHideMessage} className="btn btn-light">
            Hidden
          </button>
        </div>
        {this.state.isShowMessage && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            quod est vel, ex ducimus provident nisi dolorem velit libero in?
            Laboriosam sunt veritatis modi expedita accusantium error aspernatur
            porro omnis maiores fugiat! Expedita maiores facilis saepe ut
            suscipit, accusamus nisi. lorem40
          </p>
        )}
        <p className="cybersoft-bg-color">State</p>
      </div>
    );
  }
}
