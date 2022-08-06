import React, { Component } from "react";

export default class HandlingEvents extends Component {
  handleLogin = () => {
    alert("Welcome to cybersoft!");
  };

  handleLogout = (name) => {
    alert(`${name} đã đăng xuất.`);
  };

  render() {
    return (
      <div>
        <h5>Handling Events</h5>
        {/* Không có tham số */}
        <button onClick={this.handleLogin} className="btn btn-success">
          Login
        </button>
        <button
          onClick={() => {
            alert("Welcome !!!");
          }}
          className="btn btn-info"
        >
          Login 2
        </button>

        <br />
        {/* Có tham số */}
        <button
          onClick={this.handleLogout.bind(this, "Cybersoft")}
          className="btn btn-warning"
        >
          Logout
        </button>
        <button
          onClick={() => {
            this.handleLogout("Cybersoft");

            if (true) {
              this.handleLogin();
            }
          }}
          className="btn btn-danger"
        >
          Logout 2
        </button>
      </div>
    );
  }
}
