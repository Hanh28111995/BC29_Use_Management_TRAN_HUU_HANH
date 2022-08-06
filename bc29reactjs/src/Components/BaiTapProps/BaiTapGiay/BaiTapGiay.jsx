import React, { Component } from "react";

import danhSachGiay from "../../../Data/data.json";
import Giay from "./Giay";

export default class BaiTapGiay extends Component {
  colors = ["primary", "success", "danger"];

  renderShoestList = () => {
    return danhSachGiay.map((ele) => {
      return (
        <div className="col-4" key={ele.id}>
          <Giay showDescription={this.showDescription} item={ele}>
            {this.colors.map((item) => {
              return (
                <span key={item.key} className={`badge badge-${item}`}>
                  {item}
                </span>
              );
            })}
          </Giay>
        </div>
      );
    });
  };

  showDescription = (description) => {
    alert(description);
  };

  render() {
    return <div className="row">{this.renderShoestList()}</div>;
  }
}
