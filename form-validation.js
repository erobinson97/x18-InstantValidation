function validate() {

  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  userEntered = userEntered.toLowerCase();
  passEntered = passEntered.toLowerCase();


  if (checkSpaces(userEntered)) {
      //Show message that there is an error with the username...
      document.getElementById("usernameError").innerHTML = "There cannot be spaces in the username.";
      document.getElementById("usernameError").classList.remove("hidden-message");
      document.getElementById("usernameError").classList.add("shown-message");
      //Turn the username items red
      document.getElementById("usernameGroup").classList.add("has-error");
  }
  else if (userEntered.length < 6) {
      //Show message that there is an error with the username...
      document.getElementById("usernameError").innerHTML = "Username must have at least 6 characters.";
      document.getElementById("usernameError").classList.remove("hidden-message");
      document.getElementById("usernameError").classList.add("shown-message");
      //Turn the username items red
      document.getElementById("usernameGroup").classList.add("has-error");
  }

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
  }
  else if (passEntered == "password") {

      //Show message that there is an error with the password...
      document.getElementById("passwordError").innerHTML = "Password cannot be password";
      document.getElementById("passwordError").classList.remove("hidden-message");
      document.getElementById("passwordError").classList.add("shown-message");
      //Turn the password items red
      document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if (passEntered.length < 6) {
      //Show message that there is an error with the password...
      document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters.";
      document.getElementById("passwordError").classList.remove("hidden-message");
      document.getElementById("passwordError").classList.add("shown-message");
      //Turn the password items red
      document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if (passEntered.length > 20) {
      //Show message that there is an error with the password...
      document.getElementById("passwordError").innerHTML = "Password must be below 20 characters";
      document.getElementById("passwordError").classList.remove("hidden-message");
      document.getElementById("passwordError").classList.add("shown-message");
      //Turn the password items red
      document.getElementById("passwordGroup").classList.add("has-error");
  }
}

function checkSpaces(str) {
    for (i = 0; i < str.length; i++) {
        if (str[i] == " ") { 
            return true;
        }
    }
}
