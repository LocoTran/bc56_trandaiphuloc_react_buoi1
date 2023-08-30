import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div
        className="bg-dark text-white"
        style={{
          height: "80px",
          width: "100%",
          position: "absolute",
          bottom: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className="p-0">Copyright Your website</p>
      </div>
    );
  }
}
