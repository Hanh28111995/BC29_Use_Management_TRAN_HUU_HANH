import React, { Component } from "react";

import phoneList from "../../../Data/phoneList.json";
import ChiTietSanPham from "./ChiTietSanPham";
import DanhSachDienThoai from "./DanhSachDienThoai";
import DienThoai from "./DienThoai";
import GioHang from "./GioHang";

export default class BaiTapDienThoaiRedux extends Component {
  render() {
    console.log("BaiTapDienThoai render...");

    return (
      <div className="container">
        <GioHang />
        <DanhSachDienThoai />
        <ChiTietSanPham />
      </div>
    );
  }
}
