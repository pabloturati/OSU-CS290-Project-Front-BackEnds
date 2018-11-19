import React, { Component } from "react";
import TopLogo from "../../projectFiles/images/logoWhite.svg";
import "./Header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="header_titles">
          <div>
            <h2>OSU CS290 - Pablo Turati Project</h2>
          </div>
        </div>
        <img src={TopLogo} alt="Foursquare" />
        <Link to="/">
          <h3>Find venues!</h3>
        </Link>
      </header>
    );
  }
}
