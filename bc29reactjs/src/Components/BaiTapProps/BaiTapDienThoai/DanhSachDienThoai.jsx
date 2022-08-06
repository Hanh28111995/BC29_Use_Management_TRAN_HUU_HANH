import React, { Component } from "react";

import phoneList from "../../../Data/phoneList.json";
import DienThoai from "./DienThoai";

export default class DanhSachDienThoai extends Component {
  renderPhoneList = () => {
    return phoneList.map((ele) => {
      return (
        <DienThoai
          addToCart={this.props.addToCart}
          selectPhone={this.props.selectPhone}
          key={ele.maSP}
          phone={ele}
        />
      );
    });
  };

  render() {
    console.log("DanhSachDienThoai render");

    return (
      <div>
        <h4>PRODUCT LIST</h4>
        <div className="row">{this.renderPhoneList()}</div>
      </div>
    );
  }
}
