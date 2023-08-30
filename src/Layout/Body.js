import React, { Component } from "react";
import Banner from "./Banner";
import Item from "./Item";

export default class Body extends Component {
  render() {
    return (
      <div className="container">
        <Banner />
        <div className="row container m-0 p-0">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    );
  }
}
