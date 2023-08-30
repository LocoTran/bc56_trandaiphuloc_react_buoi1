import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="p-2">
        <div
          className="card text-left"
          style={{
            height: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
          <div className="pl-5">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
