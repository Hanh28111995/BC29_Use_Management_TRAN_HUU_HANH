import React, { Component } from "react";

export default class BaiTapXe extends Component {
  state = {
    imageUrl: "./images/products/black-car.jpg",
  };

  //   handleChangeBlackCar = () => {
  //       this.setState({
  //         imageUrl: "./images/products/steel-car.jpg",
  //       })
  //   }
  //   handleChangeRedCar = () => {
  //     this.setState({
  //         imageUrl: "./images/products/red-car.jpg",
  //       })
  //   }
  //   handleChangeSteelCar = () => {}
  //   handleChangeSilverCar = () => {}

  handleChangeColor = (color) => {
    this.setState({
      imageUrl: `./images/products/${color}-car.jpg`,
    });
  };

  render() {
    return (
      <div>
        <h4>BaiTapXe</h4>
        <div className="row">
          <div className="col-7">
            <img className="img-fluid" src={this.state.imageUrl} />
          </div>
          <div className="col-5">
            <div className="card">
              <div className="card-header">Colors</div>
              <div className="card-body">
                <div
                  onClick={() => {
                    this.handleChangeColor("black");
                  }}
                >
                  <img width={70} src="./images/icons/icon-black.jpg" />
                  <span>BLACK</span>
                </div>
                <div
                  onClick={() => {
                    this.handleChangeColor("steel");
                  }}
                >
                  <img width={70} src="./images/icons/icon-steel.jpg" />
                  <span>STEEL</span>
                </div>
                <div
                  onClick={() => {
                    this.handleChangeColor("silver");
                  }}
                >
                  <img width={70} src="./images/icons/icon-silver.jpg" />
                  <span>SILVER</span>
                </div>
                <div
                  onClick={() => {
                    this.handleChangeColor("red");
                  }}
                >
                  <img width={70} src="./images/icons/icon-red.jpg" />
                  <span>RED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
