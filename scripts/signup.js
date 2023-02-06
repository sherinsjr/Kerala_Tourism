const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeatPassword");

let emailError = document.getElementById("email-error");
let phoneError = document.getElementById("phone-error");
let passwordError = document.getElementById("password-error");
let repeatPasswordError = document.getElementById("repeatPassword-error");

// email validation

function emailValidation() {
  const emailFormat = /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
  if (emailFormat.test(email.value)) {
    emailError.innerHTML = "<small>! valid email</small>";
    emailError.style.fontStyle="italic"
    emailError.style.color = "green";
    return true;
  } else {
    emailError.innerHTML = "<small>! invalid email</small>";
    emailError.style.fontStyle="italic"
    emailError.style.color = "red";
    return false;
  }
}

//  phone validation
function phoneValidation() {
  const phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if (phoneFormat.test(phone.value)) {
    phoneError.innerHTML = "<small>! valid Phone Number";
    phoneError.style.fontStyl="italic"
    phoneError.style.color = "green";
    return true;
  } else {
    phoneError.innerHTML = "<small>!invalid phone number";
    phoneError.style.fontStyle="italic"
    phoneError.style.color = "red";
    return false;
  }
}

//  password valiadation

function passwordValidation() {
  const passwordFormat =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/;
    if(password.value.length>=8){
      if (passwordFormat.test(password.value)) {
        if (password.value.length == 8) {
          passwordError.innerHTML = "<small>! Password Strength:Poor..</small>";
          passwordError.style.fontStyle = "italic";
          passwordError.style.border = "1px soild red";
          passwordError.style.color = "red";
          return false;
        } else if (password.value.length > 8 && password.value.length < 12) {
          passwordError.innerHTML = "<small>! Password Strength:Medium..</small>";
          passwordError.style.fontStyle = "italic";
          passwordError.style.border = "1px soild blue";
          passwordError.style.color = "blue";
          return false;
        } else if (password.value.length>=12) {
          passwordError.innerHTML = "<small>! Password Strength:Strong..</small>";
          passwordError.style.fontStyle = "italic";
          passwordError.style.border = "1px soild green";
          passwordError.style.color = "green";
          return true;
        }
      }
      else {
        passwordError.innerHTML =
          "<small>! Password must contain minimum 8 chracters, atleast one upprcase and one lowercase, must contain one number and one Special chracter</small>";
        passwordError.style.fontStyle = "italic";
        passwordError.style.border = "1px soild orange";
        passwordError.style.color = "orange";
        return false
      } 
    }
    else{
      passwordError.innerHTML="<small>! Password is too short</small>"
      passwordError.style.fontStyle="italic"
      passwordError.style.border="1px soild red"
      passwordError.style.color="red"
      return false
    }
}


// function repeatPassword

function repeatPasswordValidation() {
  if (password.value === repeatPassword.value) {
    repeatPasswordError.innerHTML = "<small>!password matched</small>";
    repeatPasswordError.style.fontStyle = "italic";
    repeatPassword.style.border = "1px solid green";
    repeatPasswordError.style.color = "green";
    return true;
  } else {
    repeatPasswordError.innerHTML = "<small>! password did not match</small>";
    repeatPasswordError.style.fontStyle = "italic";
    repeatPasswordError.style.border = "1 px Soild red";
    repeatPasswordError.style.color = "red";
    return false;
  }
}

function validation() {
  if (emailValidation()) {
    if (phoneValidation()) {
      if (passwordValidation()) {
        if (repeatPasswordValidation()) {
          return true, alert("Successfully Signed In...");
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
