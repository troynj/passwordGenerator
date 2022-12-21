// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("Entered wpFunction");
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var pwLengthCheck = false;
  var pwLength;
  while (!pwLengthCheck) {
    pwLength = prompt(
      "How many characters would you like your password to be? Enter a number between 8 and 128"
    );

    if (pwLength < 8) {
      alert("Password must be atleast 8 characters long");
    } else if (pwLength > 128) {
      alert("Password cannot be longer than 128 characters");
    } else pwLengthCheck = true;
  }
}

passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
