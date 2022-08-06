import React, { Component } from "react";

import { connect } from "react-redux";

class DienThoai extends Component {
  render() {
    console.log("DienThoai render");

    const { hinhAnh, name } = this.props.phone;

    return (
      <div className="col-4">
        <div className="card">
          <img className="card-img-top" src={hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <div>
              <button
                onClick={() => this.props.selectPhone(this.props.phone)}
                className="btn btn-success"
              >
                XEM CHI TIẾT
              </button>
              <button
                onClick={() => this.props.addToCart(this.props.phone)}
                className="btn btn-danger"
              >
                THÊM GIỎ HÀNG
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectPhone: (phone) => {
      dispatch({
        type: "SELECT_PHONE",
        payload: phone,
      });
    },
    addToCart: (phone) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: phone,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(DienThoai);
