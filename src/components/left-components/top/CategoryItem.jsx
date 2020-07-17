import React, { Component } from "react";
import { connect } from "react-redux";

class CategoryItem extends Component {
  _chosenCategory = (payload) => {
    this.props.dispatch({
      type: "SET_CATEGORY",
      payload,
    });
  };
  render() {
    let { showName, type } = this.props.tab;
    return (
      <button
        className={
          this.props.chosenCategory === type
            ? "btn btn-primary"
            : "btn btn-outline-primary"
        }
        onClick={() => this._chosenCategory(type)}
      >
        {showName}
      </button>
    );
  }
}
const mapStateToProps = (state) => ({
  chosenCategory: state.chosenCategory,
});
export default connect(mapStateToProps)(CategoryItem);
