import React, { Component, PureComponent, createRef } from "react";

// string, number, null, undefined
// pure component ko so sánh đc dạng object và array
// export default class Child extends PureComponent {
export default class Child extends Component {
  state = {
    number: 1,
  };

  constructor(props) {
    super(props);

    this.numberRef = createRef();

    this.timout = setInterval(() => {
      console.log("working");
    }, 2000);

    console.log("constructor child");
  }

  static getDerivedStateFromProps(nextProps, currentState) {
    console.log("getDerivedStateFromProps child");

    currentState.number = nextProps.number;

    return currentState;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate child");

    return this.props.number !== nextState.number;

    // if (this.props.number !== nextState.number) {
    //   return true;
    // }

    // return false;
  }

  render() {
    console.log("render child");

    return (
      <div className="bg-light text-center p-5">
        <h4>Child</h4>
        <p ref={this.numberRef}>{this.state.number}</p>
      </div>
    );
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log("getSnapshotBeforeUpdate child");

    console.log(this.numberRef.current.innerHTML);

    return this.numberRef.current.innerHTML;
  }

  componentDidUpdate(preProps, preState, snapshot) {
    // if (preProps.number === 5) {
    //   callApi();
    //   dispatch({})
    // }

    console.log("componentDidUpdate child");
  }

  componentDidMount() {
    console.log("componentDidMount child");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timout);
  }
}
