import React, { Component } from "react";

// cách 1
import "./style.css";

// cách 2
import style from "./style.module.css";

// ================================

// 3 cách:
// stylesheets ( ko đc sử dụng nhiều )
// => tạo ra 1 file css thông thường
// module
// => tạo 1 file css [ten].module.css
// inline
// => tạo trực tiếp bên trong thẻ

export default class Styling extends Component {
  state = {
    fontSize: 30,
  };

  // increase => fontSize = 30 + 10
  // decrease => fontSize = 30 - 10

  handleIncrease = () => {
    const newState = {
      fontSize: this.state.fontSize + 10,
    };

    this.setState(newState);
  };

  handleDecrease = () => {
    this.setState({
      fontSize: this.state.fontSize - 10,
    });
  };

  render() {
    return (
      <div>
        <h4>Styling</h4>
        <p className="cybersoft-bg-color">Stylesheets</p>
        <p className={`${style.cybersoft} ${style["cybersoft-color"]}`}>
          Module
        </p>
        <div className="mb-2">
          <button onClick={this.handleIncrease} className="btn btn-warning">
            Increase
          </button>
          <button onClick={this.handleDecrease} className="btn btn-light">
            Decrease
          </button>
        </div>
        <p style={{ background: "blue", fontSize: this.state.fontSize }}>
          Inline
        </p>
      </div>
    );
  }
}
