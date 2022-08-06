import React, { Component } from "react";
import Child from "./Child";

export default class LifeCycle extends Component {
  state = {
    number: 1,
    like: 0,
  };

  constructor(props) {
    super(props);

    // console.log("constructor parent");
  }

  static getDerivedStateFromProps(nextProps, currentState) {
    // console.log("getDerivedStateFromProps parent");

    // if (true) {
    //   currentState.number = 10;
    // }

    return currentState;
  }

  render() {
    // console.log("render parent");

    return (
      <div className="bg-warning w-75 text-center mx-auto mt-5 p-5">
        <h4>Parent</h4>
        <div className="my-2">
          <button
            onClick={() => this.setState({ number: this.state.number - 1 })}
            className="btn btn-primary mr-2"
          >
            Decrease
          </button>
          <button
            onClick={() => this.setState({ number: this.state.number + 1 })}
            className="btn btn-success mr-2"
          >
            Increase
          </button>
          <button
            onClick={() => this.setState({ like: this.state.like + 1 })}
            className="btn btn-danger mr-2"
          >
            Like
          </button>
        </div>
        {this.state.number < 5 && <Child number={this.state.number} />}
      </div>
    );
  }

  componentDidMount() {
    // console.log("componentDidMount parent");
  }
}
