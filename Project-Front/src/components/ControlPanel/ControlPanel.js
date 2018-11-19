import React, { Component } from "react";
import "./ControlPanel.css";
import { Link } from "react-router-dom";
import FileDownload from "../../projectFiles/DineWithUs.pdf";

export default class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.addressInpRef = React.createRef();
    this.findAddress = this.findAddress.bind(this);
    this.countRef = React.createRef();
  }

  findMe = () => {
    this.props.findMe();
  };

  findAddress = event => {
    if (event.key === "Enter") {
      const address = event.target.value;
      this.props.setAddress(address);
    }
  };

  render() {
    return (
      <div className="control_panel">
        <section>
          <div className="byAddress">
            <h3>Find venues by city or by Address</h3>

            <input
              type="text"
              ref={this.addressInpRef}
              placeholder="Address Finder"
              onKeyPress={e => this.findAddress(e)}
            />
          </div>
          <span> - OR - </span>
          <div className="byProximity">
            <h3>Find venues close to you!</h3>
            <button onClick={this.findMe} value="Find venues around me">
              Find me!
            </button>
          </div>
          {/* <div className="amount" /> */}
          <div className="byProximity">
            <h3>Download a FILE!</h3>
            <a href={FileDownload} download>
              <button
                // onClick={this.downloadSomething}
                id="downloadFile"
                value="DOWNLOAD a file"
              >
                CLICK ME!
              </button>
            </a>
          </div>
          <div>
            <Link to="/">
              <button id="reset_btn">Search Reset</button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}
