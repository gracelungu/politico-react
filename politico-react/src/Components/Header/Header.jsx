import React, { Component } from "react";
import "./Header.css";
import folder from "../../assets/imgs/folder.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header className="flex justify-between align-center card-1">
          <div className="title ">
            <img width="auto" height="18px" src={folder} alt="" />
            <a href="/" className="poli EBold">
              Poli<span className="tico EBold text-primary">tico</span>
            </a>
          </div>
          <nav>
            <a href="/signup" className="btn signup-btn">
              SIGNUP
            </a>
            <a href="/signin" className="btn primary text-white shadow-1">
              SIGNIN
            </a>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
