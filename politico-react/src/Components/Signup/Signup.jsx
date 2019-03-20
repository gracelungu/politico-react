import React, { Component } from "react";
import Header from "../Header/Header";
import "./Signup.css";

import axios from "axios";
import global from "../../Utils/global";

import User from "../../Utils/SignupValidator";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      user: { password: 0, passwordConfirm: 0 }
    };
  }

  signup = () => {
    const validator = new User(this.state.user);
    const valid = validator.validate(this.state.user.passwordConfirm);

    if (valid) {
      const user = this.state.user;

      // send a request to the api
      axios
        .post(`${global.url}/auth/signup`, user)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <section className="signup flex justify-center align-center">
          <div className="container shadow-1">
            <div className="top flex justify-between align-end">
              <div className="title bold">Signup</div>
            </div>
            <div className="form flex justify-between" action="">
              <div className="wrapper flex column justify-between align-start">
                <div className="field flex column">
                  <label className="">
                    First name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    onChange={event => {
                      this.setState({
                        user: Object.assign(this.state.user, {
                          firstname: event.target.value
                        })
                      });
                    }}
                  />
                  <div className="error text-primary" id="first-name-error" />
                </div>
                <div className="field flex column">
                  <label className="">
                    Last name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    onChange={event => {
                      this.setState({
                        user: Object.assign(this.state.user, {
                          lastname: event.target.value
                        })
                      });
                    }}
                  />
                  <div className="error text-primary" id="last-name-error" />
                </div>
                <div className="field flex column">
                  <label className="">
                    Other name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="other-name"
                    onChange={event => {
                      this.setState({
                        user: Object.assign(this.state.user, {
                          othername: event.target.value
                        })
                      });
                    }}
                  />
                  <div className="error text-primary" id="other-name-error" />
                </div>
                <div className="field flex column">
                  <label className="">
                    Telephone <span className="text-primary" />
                  </label>
                  <input
                    type="number"
                    id="telephone"
                    onChange={event => {
                      this.setState({
                        user: Object.assign(this.state.user, {
                          phoneNumber: event.target.value
                        })
                      });
                    }}
                  />
                  <div className="error text-primary" id="telephone-error" />
                </div>
              </div>
              <div className="wrapper flex column justify-between align-end">
                <div className="field flex column">
                  <label className="">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    onChange={event => {
                      this.setState({
                        user: Object.assign(this.state.user, {
                          email: event.target.value
                        })
                      });
                    }}
                  />
                  <div className="error text-primary" id="email-error" />
                </div>
                <div className="field flex column">
                  <label className="">
                    Password <span className="text-primary">*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    onChange={event => {
                      this.setState({
                        user: Object.assign(this.state.user, {
                          password: event.target.value
                        })
                      });
                    }}
                  />
                  <div className="error text-primary" id="password-error" />
                </div>
                <div className="field flex column">
                  <label className="">
                    Confirm password <span className="text-primary">*</span>
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    onChange={event => {
                      this.setState({
                        user: Object.assign(this.state.user, {
                          passwordConfirm: event.target.value
                        })
                      });
                    }}
                  />
                  <div
                    className="error text-primary"
                    id="confirm-password-error"
                  />
                </div>
                <div className="field m-field">
                  <div
                    id="signup"
                    className="btn btn-submit text-white primary shadow-1"
                    onClick={this.signup}
                  >
                    SIGNUP
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Signup;
