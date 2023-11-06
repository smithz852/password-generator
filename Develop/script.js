// Assignment code here
// functions for generating random text from different strings

// var passwordSize = x;
// var passwordLength = 8 >= x >= 128;

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


  var lowerCase = "abcdefghijklmnopqrstuvwxyz";

  var numbersList = "0123456789";
 

  var symbolList = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// array for generator
var generatorList = [upperCase, lowerCase, numbersList, symbolList];
console.log(generatorList);

// password length function with prompts
function passwordSize() {
var passwordSizeCondition = prompt('How many characters would you like your password to be?', 'Enter Length (8-128)')
 if (passwordSizeCondition < 8 || passwordSizeCondition > 128 || isNaN(passwordSizeCondition)) {
  alert('Please enter a valid number from 8-128')
 }
   passwordSizeCondition = parseInt(passwordSizeCondition, 10);
   return passwordSizeCondition;
 }


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
  var symbolsAccepted = confirm('Would you like to use Symbols?');
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


//  password generator function using length input from passwordSize function and character inputs from other functions above. Not working yet
 function generatePassword() {
  var passwordLength = passwordSize();
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
 }


 //  generates one random character from a list of all character functions
//  function randomTextGenerator() {
//   var textList = capLetters() + smallLetters() + numbers() + symbols();
//   var passwordLength = passwordSize() ;
//   var result = textList.charAt(Math.floor(Math.random() * passwordLength));
//   return result;
// }

//  For later, figure out how to make an alert if text is entered.
//  else if (passwordSizeCondition === ) {
//   alert('Please enter a valid number');
//   return;


//  (8 >= passwordSizeCondition <= 128)
//    return passwordSizeCondition;
//   }


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

