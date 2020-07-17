import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";

class Products extends Component {
  render() {
    let { products, chosenCategory } = this.props;
    return (
      <div className="row">
        {products
          .filter((product) => product.type === chosenCategory)
          .map((product, index) => (
            <div className="col-4" key={index}>
              <ProductItem product={product} />
            </div>
          ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products,
  chosenCategory: state.chosenCategory,
});
export default connect(mapStateToProps)(Products);
