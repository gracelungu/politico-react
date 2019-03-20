import React, { Component } from "react";
import "./Home.css";
import Header from "../Header/Header";
import folder from "../../assets/imgs/folder.png";
import start from "../../assets/imgs/icons/start.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <section className="landing flex justify-between align-center">
          <div className="left flex column justify-start ">
            <div>
              <div className="title EBold">Politico</div>
              <div className="text light">
                A platform that enables citizens give their mandate to
                politicians running for different government offices and
                political parties.
              </div>
            </div>
            <div>
              <a
                href="/signup"
                className="btn btn-large primary text-white EBold shadow-1"
              >
                <img className="start-img" src={start} alt="" />{" "}
                <span>GET STARTED</span>
              </a>
            </div>
          </div>
          <div className="right flex column justify-end align-end">
            <img src={folder} alt="" />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
