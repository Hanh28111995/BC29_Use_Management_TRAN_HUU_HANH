import React, { Component } from "react";
import Child from "./Child";

import { connect } from "react-redux";

class Parent extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h4>DEMO REDUX</h4>
        <p>Current count: {this.props.countRedux}</p>
        <Child />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countRedux: state.countReducer.count,
  };
};

const parentReduxComponent = connect(mapStateToProps)(Parent);

export default parentReduxComponent;
