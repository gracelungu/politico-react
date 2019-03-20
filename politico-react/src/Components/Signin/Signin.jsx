import React, { Component } from "react";
import "./Signin.css";
import Header from "../Header/Header";

import User from "../../Utils/SigninValidation";

class Signin extends Component {
  state = { user: { password: 0 } };

  signin = () => {
    const user = new User(this.state.user);
    console.log(user.validate());
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <section className="signup signin flex justify-center align-center">
          <div className="container shadow-1">
            <div className="top flex justify-between align-end">
              <div className="title bold">Signin</div>
            </div>
            <form className="flex justify-between" action="">
              <div className="wrapper flex column justify-between align-start">
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
                  <div className="error text-primary" id="password-error" />{" "}
                  <a href="../html/reset.html" className="forgot">
                    Forgot password?
                  </a>
                </div>
                <div className="field m-field">
                  <div
                    className="btn btn-submit text-white primary shadow-1"
                    onClick={this.signin}
                  >
                    SIGNIN
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Signin;
