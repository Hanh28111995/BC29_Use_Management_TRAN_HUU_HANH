import React, { Component } from "react";

import { connect } from "react-redux";

class ChiTietSanPham extends Component {
  render() {
    const {
      tenSP,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
      hinhAnh,
    } = this.props.selectedPhone;

    return (
      <div>
        <div className="row mt-5">
          <div className="col-5">
            <h4>{tenSP}</h4>
            <img src={hinhAnh} className="img-fluid" alt="phone" />
          </div>
          <div className="col-7">
            <h4 className="mb-5">THÔNG SỐ KỸ THUẬT</h4>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedPhone: state.phoneReducer.selectedPhone,
  };
};

export default connect(mapStateToProps)(ChiTietSanPham);
