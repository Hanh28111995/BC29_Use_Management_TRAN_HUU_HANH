import React, { Component } from "react";

import phoneList from "../../../Data/phoneList.json";
import ChiTietSanPham from "./ChiTietSanPham";
import DanhSachDienThoai from "./DanhSachDienThoai";
import DienThoai from "./DienThoai";
import GioHang from "./GioHang";

export default class BaiTapDienThoai extends Component {
  state = {
    selectedPhone: phoneList[0],
    cartList: [],
  };

  selectPhone = (phone) => {
    console.log(phone);
    this.setState({
      selectedPhone: phone,
    });
  };

  addToCart = (phone) => {
    // this.state.cartList.push(phone);
    const data = [...this.state.cartList];

    const idx = data.findIndex((ele) => ele.maSP === phone.maSP);

    if (idx !== -1) {
      data[idx].soLuong += 1;
    } else {
      data.push({
        ...phone,
        soLuong: 1,
      });
    }

    this.setState(
      {
        cartList: data,
      },
      () => {
        console.log(this.state.cartList);
      }
    );
  };

  handleQuantity = (phone, isIncrease) => {
    const data = [...this.state.cartList];

    const idx = data.findIndex((ele) => ele.maSP === phone.maSP);

    // if (idx !== -1) {
    //   if (isIncrease) {
    //     data[idx].soLuong += 1;
    //   } else {
    //     if (data[idx].soLuong > 1) {
    //       data[idx].soLuong -= 1;
    //     } else if (window.confirm("Bạn có muốn xoá ko ?")) {
    //       data.splice(idx, 1);
    //     }
    //   }
    // }

    if (idx === -1) {
      alert("Không tìm thấy sản phẩm");

      throw new Error("Không tìm thấy sản phẩm");
    }

    if (isIncrease) {
      data[idx].soLuong += 1;
    } else if (data[idx].soLuong > 1) {
      data[idx].soLuong -= 1;
    } else if (window.confirm("Bạn có muốn xoá ko ?")) {
      data.splice(idx, 1);  
    }

    this.setState({
      cartList: data,
    });
  };

  render() {
    console.log("BaiTapDienThoai render...")

    return (
      <div className="container">
        <GioHang
          handleQuantity={this.handleQuantity}
          cartList={this.state.cartList}
        />
        <DanhSachDienThoai
          addToCart={this.addToCart}
          selectPhone={this.selectPhone}
        />
        <ChiTietSanPham selectedPhone={this.state.selectedPhone} />
      </div>
    );
  }
}
