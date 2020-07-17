import React, { Component } from "react";
import { connect } from "react-redux";
import CategoryItem from "./CategoryItem";

class Categories extends Component {
  render() {
    return (
      <div className="btn-group w-100">
        {this.props.categories.map((tab, index) => (
          <CategoryItem tab={tab} key={index} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  categories: state.categories,
});
export default connect(mapStateToProps)(Categories);
