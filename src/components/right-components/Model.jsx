import React, { Component } from "react";
import classes from "./style.module.css";
import { connect } from "react-redux";

class Model extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: "./images/background/background_998.jpg",
      body: "./images/allbody/bodynew.png",
      bikinitop: "./images/allbody/bikini_branew.png",
      bikinibottom: "./images/allbody/bikini_pantsnew.png",
      model: "./images/model/1000new.png",
      feetleft: "./images/allbody/feet_high_leftnew.png",
      feetright: "./images/allbody/feet_high_rightnew.png",
    };
  }
  render() {
    return (
      <div
        className={classes.contain}
        style={{ background: `url(${this.state.background})` }}
      >
        <div
          className={classes.body}
          style={{ background: `url(${this.state.body})` }}
        ></div>
        <div
          className={classes.model}
          style={{ background: `url(${this.state.model})` }}
        ></div>
        <div
          className={classes.bikinitop}
          style={{ background: `url(${this.state.bikinitop})` }}
        ></div>
        <div
          className={classes.bikinibottom}
          style={{ background: `url(${this.state.bikinibottom})` }}
        ></div>
        <div
          className={classes.feetleft}
          style={{ background: `url(${this.state.feetleft})` }}
        ></div>
        <div
          className={classes.feetright}
          style={{ background: `url(${this.state.feetright})` }}
        ></div>
        {/* Dữ liệu đổ từ props */}
        <div
          className={classes.bikinitop}
          style={{
            backgroundImage: `url(${this.props.model.topclothes})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className={classes.bikinibottom}
          style={{
            backgroundImage: `url(${this.props.model.botclothes})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className={classes.feetStyle}
          style={{
            background: `url(${this.props.model.shoes})`,
          }}
        ></div>
        <div
          className={classes.handbagStyle}
          style={{
            background: `url(${this.props.model.handbags})`,
          }}
        ></div>
        <div
          className={classes.hairStyle}
          style={{
            background: `url(${this.props.model.hairstyle})`,
          }}
        ></div>
        <div
          className={classes.hairStyle}
          style={{
            background: `url(${this.props.model.hairstyle})`,
          }}
        ></div>
        <div
          className={classes.necklaceStyle}
          style={{
            background: `url(${this.props.model.necklaces})`,
          }}
        ></div>
        <div
          className={classes.backgroundStyle}
          style={{
            background: `url(${this.props.model.background})`,
          }}
        ></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  model: state.model,
});
export default connect(mapStateToProps)(Model);
