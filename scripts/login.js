const email = document.getElementById("email");
const password = document.getElementById("password");

let emailError = document.getElementById("email-error");
let passwordError = document.getElementById("password-error");

// email validation

function emailValidation() {
    const emailFormat = /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    if (emailFormat.test(email.value)) {
      emailError.innerHTML = "<small>! valid email</small>";
      emailError.style.color = "green";
      return true;
    } else {
      emailError.innerHTML = "<small>! invalid email</small>";
      emailError.style.color = "red";
      return false;
    }
  }

//   passwordValidation

function passwordValidation(){
    const passwordFormat =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/;
    if(password.value.length>=8){
        if(passwordFormat.test(password.value)){
            passwordError.innerHTML="<small>! Correct Password</small>";
            passwordError.style.color = "green";
             return true;
        }
        else{
            passwordError.innerHTML="<small>! Incorrect Password</small>";
            passwordError.style.color = "red";
             return false;
        }
    }
    else{
        passwordError.innerHTML="<small>! Incorrect Password</small>";
        passwordError.style.color = "red";
         return false;
    }
}

function validate(){
    if(emailValidation()){
        if(passwordValidation()){
            return true, alert("Successfully Loged In...")
        }
        else{
            return false
        }
    }
    else{
        return false
    }
}