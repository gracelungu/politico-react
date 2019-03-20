import React, { Component } from "react";
import "../Home/Home.css";
import "./Account.css";
import Header from "../Header/Header";

// Images
import upload from "../../assets/imgs/icons/upload.png";
import votes from "../../assets/imgs/icons/votes.png";
import save from "../../assets/imgs/icons/save.png";
import del from "../../assets/imgs/icons/delete.png";

class Account extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <section className="flex justify-start">
          <nav className=" column">
            <div className="title bold">Settings</div>
            <a href="/account" className="subtitle active">
              Personal account
            </a>
            <a href="../html/reset.html" className="subtitle ">
              Reset password
            </a>
            <div className="title bold">Parties</div>
            <a href="../html/parties.html" className="subtitle ">
              Political parties
            </a>
            <div className="title bold">Offices</div>
            <a href="../html/offices.html" className="subtitle ">
              Political offices
            </a>
          </nav>
          <div className="settings flex column">
            <div className="flex top justify-between align-center">
              <div className="subtitle bold">Personal settings | </div>
              <div className="flex align-center">
                <a
                  href="../html/offices.html"
                  className="btn shadow-1 primary text-white"
                >
                  <img width="auto" height="15px" src={votes} alt="" />
                  <span className="bold">VOTE HERE</span>
                </a>
              </div>
            </div>
            <div className="title bold">Account</div>
            <div className="profile flex ">
              <div className="flex details">
                <div className="image cover" />
                <div className="info">
                  <div className="name bold">Grace lungu</div>
                  <div className="light">Birindwa</div>
                </div>
              </div>
              <div className="flex column">
                <div
                  className="flex align-center btn btn-small upload primary text-white shadow-1"
                  onclick="account.update()"
                >
                  <img width="auto" height="15px" src={upload} alt="" />
                  <span>UPLOAD A PICTURE</span>
                </div>
                <div onclick="account.delete()">
                  <span className="btn btn-small delete shadow-1">
                    <img width="auto" height="15px" src={del} alt="" />
                    <span>DELETE</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="candidates">
              <div className="subtitle bold">
                Candidates |
                <span className="light">
                  The list of the candidates you have voted for.
                </span>
              </div>
              <div className="list">
                <div className="candidate">
                  <div className="bold office">Prime minister's office :</div>
                  <div className="item shadow-1  flex justify-between align-center">
                    <div className="info flex justify-between">
                      <div className="flex">
                        <div className="image cover" />
                        <div className="flex column">
                          <div className="name bold">Karen Castillo </div>
                          <div className="email light">Karie</div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="votes flex align-center primary text-white">
                          <span className="EBold">12</span>
                          <img width="auto" height="22px" src={votes} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="candidate">
                  <div className="bold office">Another office :</div>
                  <div className="item shadow-1  flex justify-between align-center">
                    <div className="info flex justify-between">
                      <div className="flex">
                        <div className="image cover" />
                        <div className="flex column">
                          <div className="name bold">Dorothy Maldonado</div>
                          <div className="email light">Dorte</div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="votes flex align-center primary text-white">
                          <span className="EBold">10</span>
                          <img width="auto" height="22px" src={votes} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="candidate">
                  <div className="bold office">Another office :</div>
                  <div className="item shadow-1  flex justify-between align-center">
                    <div className="info flex justify-between">
                      <div className="flex">
                        <div className="image cover" />
                        <div className="flex column">
                          <div className="name bold">Scarlet Mcmillan</div>
                          <div className="email light">Fowler</div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="votes flex align-center primary text-white">
                          <span className="EBold">16</span>
                          <img width="auto" height="22px" src={votes} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="subtitle bold personal">Personal details |</div>
            <form action="" className="flex justify-between">
              <div className="wrapper">
                <div className="field flex column">
                  <label for="" className="">
                    First name
                    <span className="text-primary">*</span>
                  </label>
                  <input type="text" id="first-name" value="grace" />
                  <div className="error text-primary" id="first-name-error" />
                </div>
                <div className="field flex column">
                  <label for="" className="">
                    Last name
                    <span className="text-primary">*</span>
                  </label>
                  <input type="text" id="last-name" value="lungu" />
                  <div className="error text-primary" id="last-name-error" />
                </div>
              </div>
              <div className="wrapper">
                <div className="field flex column">
                  <label for="" className="">
                    Other name
                    <span className="text-primary">*</span>
                  </label>
                  <input type="text" id="other-name" value="birindwa" />
                  <div className="error text-primary" id="other-name-error" />
                </div>
                <div className="field flex column">
                  <label for="" className="">
                    Telephone
                    <span className="text-primary" />
                  </label>
                  <input type="number" id="telephone" value="0706973278" />
                  <div className="error text-primary" id="telephone-error" />
                </div>
                <div
                  className="flex save align-center justify-center btn primary text-white shadow-1"
                  onclick="account.saveSettings()"
                >
                  <img width="auto" height="14px" src={save} alt="" />
                  <span>SAVE SETTINGS</span>
                </div>
              </div>
            </form>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Account;
