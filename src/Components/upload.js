import React, { Component } from "react";
import "../App.css";
import ImageFilter from "react-image-filter";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = { file: null };
    this.fileChange = this.fileChange.bind(this);
  }

  fileChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }

  render() {
    return (
      <div className="Center">
        <input type="file" onChange={this.fileChange} />
        <br />
        <div>
          <img src={this.state.file} />
        </div>
      </div>
    );
  }
}
