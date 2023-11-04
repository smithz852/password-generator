// Assignment code here

function capLetters() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var upperCaseLength = upperCase.length;
  var result = upperCase.charAt(Math.floor(Math.random() * upperCaseLength));
  return result;
}

console.log(capLetters());


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
