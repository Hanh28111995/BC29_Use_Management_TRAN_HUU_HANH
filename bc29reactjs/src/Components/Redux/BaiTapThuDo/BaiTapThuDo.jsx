import React, { Component } from "react";
import Model from "./Model";

import "./style.css";
import TabContent from "./TabContent";
import Tabs from "./Tabs";
import Title from "./Title";

export default class BaiTapThuDo extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <Title />
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <Tabs />
            <TabContent />
          </div>
          <div className="col-md-4">
            <Model />
          </div>
        </div>
      </div>
    );
  }
}
