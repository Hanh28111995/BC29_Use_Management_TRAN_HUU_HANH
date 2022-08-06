import React, { Component } from "react";

import { connect } from "react-redux";

class Child extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        {/* button.btn.btn-info.mr-2 */}
        <button
          onClick={() => this.props.decrease()}
          className="btn btn-primary mr-2"
        >
          Decrease
        </button>
        <button
          onClick={() => this.props.increase()}
          className="btn btn-info mr-2"
        >
          Increase
        </button>
        <button
          onClick={() => this.props.random(Math.random())}
          className="btn btn-success"
        >
          Random
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => {
      const action = {
        type: "INCREASE",
      };

      dispatch(action);
    },
    decrease: () => {
      dispatch({
        type: "DECREASE",
      });
    },
    random: (newCount) => {
      dispatch({
        type: "RANDOM",
        payload: newCount,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Child);
