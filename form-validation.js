function validatePassword() {

  //Grab the user's input and store in variables
  var passEntered = document.getElementById("pass").value;
  passEntered = passEntered.toLowerCase();

  var userEntered = document.getElementById("user").value;
  userEntered = userEntered.toLowerCase();
 
  if (passEntered == userEntered) {
      //Show message that there is an error with the username...
      document.getElementById("usernameError").innerHTML = "Username and password cannot be the same.";
      document.getElementById("usernameError").classList.remove("hidden-message");
      document.getElementById("usernameError").classList.add("shown-message");
      //Turn the username items red
      document.getElementById("usernameGroup").classList.add("has-error");

      //Show message that there is an error with the password...
      document.getElementById("passwordError").innerHTML = "Username and password cannot be the same.";
      document.getElementById("passwordError").classList.remove("hidden-message");
      document.getElementById("passwordError").classList.add("shown-message");
      //Turn the password items red
      document.getElementById("passwordGroup").classList.add("has-error");
      document.getElementById("usernameGroup").classList.remove("has-success");
  }
  else if (passEntered == "password") {

      //Show message that there is an error with the password...
      document.getElementById("passwordError").innerHTML = "Password cannot be password";
      document.getElementById("passwordError").classList.remove("hidden-message");
      document.getElementById("passwordError").classList.add("shown-message");
      //Turn the password items red
      document.getElementById("passwordGroup").classList.add("has-error");
      document.getElementById("usernameGroup").classList.remove("has-success");
  }
  else if (passEntered.length < 6) {
      //Show message that there is an error with the password...
      document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters.";
      document.getElementById("passwordError").classList.remove("hidden-message");
      document.getElementById("passwordError").classList.add("shown-message");
      //Turn the password items red
      document.getElementById("passwordGroup").classList.add("has-error");
      document.getElementById("usernameGroup").classList.remove("has-success");
  }
  else if (passEntered.length > 20) {
      //Show message that there is an error with the password...
      document.getElementById("passwordError").innerHTML = "Password must be below 20 characters";
      document.getElementById("passwordError").classList.remove("hidden-message");
      document.getElementById("passwordError").classList.add("shown-message");
      //Turn the password items red
      document.getElementById("passwordGroup").classList.add("has-error");
      document.getElementById("usernameGroup").classList.remove("has-success");
  }
  else {
      document.getElementById("passwordError").classList.remove("shown-message");
      document.getElementById("passwordError").classList.add("hidden-message");
      document.getElementById("passwordGroup").classList.add("has-success");
      document.getElementById("passwordGroup").classList.remove("has-error");
  }
}

function checkSpaces(str) {
    for (i = 0; i < str.length; i++) {
        if (str[i] == " ") { 
            return true;
        }
    }
}

function validateUsername() {
    var userEntered = document.getElementById("user").value;
    userEntered = userEntered.toLowerCase();

    if (checkSpaces(userEntered)) {
        //Show message that there is an error with the username...
        document.getElementById("usernameError").innerHTML = "There cannot be spaces in the username.";
        document.getElementById("usernameError").classList.remove("hidden-message");
        document.getElementById("usernameError").classList.add("shown-message");
        //Turn the username items red
        document.getElementById("usernameGroup").classList.add("has-error");
        document.getElementById("usernameGroup").classList.remove("has-success");
    }
    else if (userEntered.length < 6) {
        //Show message that there is an error with the username...
        document.getElementById("usernameError").innerHTML = "Username must have at least 6 characters.";
        document.getElementById("usernameError").classList.remove("hidden-message");
        document.getElementById("usernameError").classList.add("shown-message");
        //Turn the username items red
        document.getElementById("usernameGroup").classList.add("has-error");
        document.getElementById("usernameGroup").classList.remove("has-success");
    }
    else {
        document.getElementById("usernameError").classList.remove("shown-message");
        document.getElementById("usernameError").classList.add("hidden-message");
        document.getElementById("usernameGroup").classList.add("has-success");
        document.getElementById("usernameGroup").classList.remove("has-error");
    }
}

function register() {
    var passEntered = document.getElementById("pass").value;
    var userEntered = document.getElementById("user").value;

    console.log(userEntered);
    console.log(passEntered);
}