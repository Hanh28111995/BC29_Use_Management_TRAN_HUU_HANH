import React, { Component } from "react";

export default class DataBinding extends Component {
  price = 5000;

  product = {
    name: "Macbook",
    price: 2000,
  };

  renderProduct = () => {
    const content = (
      <div>
        <h5>{this.product.name}</h5>
        <p>{this.product.price}</p>
      </div>
    );

    return content;
  };

  render() {
    const name = "Iphone X";

    return (
      <div className="card w-50 mx-auto mt-5">
        <h5 id="name">{name}</h5>
        <p>{this.price}$</p>
        <div>{this.renderProduct()}</div>
      </div>
    );
  }
}
