import { Utils } from "./utils";

class User {
  constructor({ email, password }) {
    this.email = email;
    this.password = password;
    this.utils = new Utils();
  }

  validate() {
    let valid = true;
    if (!this.utils.isValidEmail(this.email)) {
      this.utils.Element("email-error").innerHTML = "Invalid email adress";
      valid = false;
    } else {
      this.utils.Element("email-error").innerHTML = "";
    }
    if (this.password.toString().length < 6) {
      this.utils.Element("password-error").innerHTML = "6 characters minimum";
      valid = false;
    } else {
      this.utils.Element("password-error").innerHTML = "";
    }
    return valid;
  }
}

export default User;
