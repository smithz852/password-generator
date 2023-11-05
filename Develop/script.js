// Assignment code here
// functions for generating random text from different strings

// var passwordSize = x;
// var passwordLength = 8 >= x >= 128;

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
var generatorList = [capLetters(), smallLetters(), numbers(), symbols()];
console.log(generatorList);

function passwordSize() {
var passwordSizeCondition = prompt('How many characters would you like your password to be?', 'Enter Length (8-128)')
 if (8 > passwordSizeCondition > 0) {
  alert('Password too short, please enter a number from 8-128.');
  passwordSize();
 } else if (passwordSizeCondition > 128)  {
  alert('Password too long, please enter a number from 8-128.');
  passwordSize();
 } else if (passwordSizeCondition === null ) {
  return;
 }
}

//  (8 >= passwordSizeCondition <= 128)
//    return passwordSizeCondition;
//   }
// function randomTextGenerator() {
//   var textList = capLetters() + smallLetters() + numbers() + symbols();
//   var textLength = 4;
//   var result = textList.charAt(Math.floor(Math.random() * textLength));
//   return result;
// }

// console.log(randomTextGenerator());

// for (var i = 0; 8 >= i <= 128; i++) {
//   console.log(randomTextGenerator[i]);
// }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// password function

// function generatePassword() {
//   var passwordLength = 
// } 