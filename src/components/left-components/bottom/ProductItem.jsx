import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItem extends Component {
  _chosenItem = (product) => {
    this.props.dispatch({
      type: "GET_ITEM",
      payload: {
        type: product.type,
        img: product.imgSrc_png,
      },
    });
  };
  render() {
    let { name, imgSrc_jpg} = this.props.product;
    return (
      <div className="card my-2">
        <img src={imgSrc_jpg} alt="hinh" />
        <p className="text-success">{name}</p>
        <button
          className="btn btn-info"
          onClick={() => this._chosenItem(this.props.product)}
        >
          Thử đồ
        </button>
      </div>
    );
  }
}
export default connect()(ProductItem);
