import React, { Component } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h5>BÀI TẬP LAYOUT</h5>
        <div className="row">
          <div className="col-12 bg-warning">
            <Header />
          </div>
          <div className="col-5 bg-success vh-100">
            <Navigation />
          </div>
          <div className="col-7 bg-info vh-100">
            <Content />
          </div>
          <div className="col-12 bg-danger">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
