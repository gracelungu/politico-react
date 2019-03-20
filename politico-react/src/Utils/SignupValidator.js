import { Utils } from "./utils";

class User {
  constructor({
    firstname,
    lastname,
    othername,
    phoneNumber,
    email,
    password
  }) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.othername = othername;
    this.phoneNumber = phoneNumber;
    this.passportUrl = "";
    this.email = email;
    this.password = password;
    this.utils = new Utils();
    console.log(othername);
  }

  validate(confrimPassword) {
    let valid = true;
    if (!this.utils.isValidName(this.firstname)) {
      this.utils.Element("first-name-error").innerHTML = "Invalid first name";
      valid = false;
    } else {
      this.utils.Element("first-name-error").innerHTML = "";
    }
    if (!this.utils.isValidName(this.lastname)) {
      this.utils.Element("last-name-error").innerHTML = "Invalid last name";
      valid = false;
    } else {
      this.utils.Element("last-name-error").innerHTML = "";
    }
    if (!this.utils.isValidName(this.othername)) {
      this.utils.Element("other-name-error").innerHTML = "Invalid other name";
      valid = false;
    } else {
      this.utils.Element("other-name-error").innerHTML = "";
    }
    if (!this.utils.isValidPhoneNumber(this.phoneNumber)) {
      this.utils.Element("telephone-error").innerHTML =
        "Invalid telephone number";
      valid = false;
    } else {
      this.utils.Element("telephone-error").innerHTML = "";
    }
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
    if (this.password.toString() !== confrimPassword.toString()) {
      this.utils.Element("confirm-password-error").innerHTML =
        "The passwords do not match";
      valid = false;
    } else {
      this.utils.Element("confirm-password-error").innerHTML = "";
    }

    return valid;
  }
}

export default User;
