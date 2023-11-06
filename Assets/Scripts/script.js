// Assignment code here
// Character group variables
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


  var lowerCase = "abcdefghijklmnopqrstuvwxyz";

  var numbersList = "0123456789";
 

  var symbolList = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// password length function with prompts
function passwordSize() {
var passwordSizeCondition = prompt('How many characters would you like your password to be?', 'Enter Length (8-128)')
 if (passwordSizeCondition < 8 || passwordSizeCondition > 128 || isNaN(passwordSizeCondition)) {
  alert('Please enter a valid number from 8-128')
 }
   passwordSizeCondition = parseInt(passwordSizeCondition, 10);
   return passwordSizeCondition;
 }

// prompt functions for specifying character groups allowed in password
 function upperCaseCriteria() {
  var upperCaseAccepted = confirm('Would you like to use Upper Case letters?');
   if (upperCaseAccepted !== true) {
    return;
   } else {
    return upperCase;
   }
 }

 function lowerCaseCriteria() {
  var lowerCaseAccepted = confirm('Would you like to use Lower Case letters?');
   if (lowerCaseAccepted !== true) {
    return;
   } else {
    return lowerCase;
   }
 }

 function symbolsCriteria() {
  var symbolsAccepted = confirm('Would you like to use Special Characters?');
   if (symbolsAccepted !== true) {
    return;
   } else {
    return symbolList;
   }
 }

 function numbersCriteria() {
  var numbersAccepted = confirm('Would you like to use Numbers?');
   if (numbersAccepted !== true) {
    return;
   } else {
    console.log(numbersList);
    return numbersList;
    
   }
 }


//  password generator function using length input from passwordSize function and character inputs from other functions above
 function generatePassword() {
  var errorMsg = "error"
  var passwordLength = passwordSize();
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    return errorMsg;
  }
  var characterInput = '';
  characterInput += upperCaseCriteria() || '';
  characterInput += lowerCaseCriteria() || '';
  characterInput += symbolsCriteria() || '';
  characterInput += numbersCriteria() || '';
  console.log(characterInput);
  var result = "";
  for (var i = 0; i < passwordLength; i++) {
    result += characterInput.charAt(Math.floor(Math.random() * characterInput.length));
}
  console.log(result);
  return result;
 }

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


