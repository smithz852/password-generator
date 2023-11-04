// Assignment code here
// functions for generating random text from different strings
function capLetters() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var textLength = upperCase.length;
  var result = upperCase.charAt(Math.floor(Math.random() * textLength));
  return result;
}

function smallLetters() {
  var smallCase = "abcdefghijklmnopqrstuvwxyz";
  var textLength = smallCase.length;
  var result = smallCase.charAt(Math.floor(Math.random() * textLength));
  return result;
}

function numbers() {
  var numbersList = "0123456789";
  var textLength = numbers.length;
  var result = numbersList.charAt(Math.floor(Math.random() * textLength));
  return result;
}

function symbols() {
  var symbolList = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var textLength = symbolList.length;
  var result = symbolList.charAt(Math.floor(Math.random() * textLength));
  return result;
}

console.log(capLetters(), smallLetters(), numbers(), symbols());

// array for generator


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
