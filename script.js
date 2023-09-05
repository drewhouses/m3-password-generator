// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = 0;

  passwordLength = window.prompt("How many characters do you want in your password?");

  while (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters");

    passwordLength = window.prompt("How many characters do you want in your password?");
  }

  var includeLowercase = confirm("Would you like to include lowercase letters?");
  var includeUppercase = confirm("Would you like to include uppercase letters?");
  var includeNumbers = confirm("Would you like to include numbers?");
  var includeSpecialChars = confirm("Would you like to include special characters?");

  if (!includeLowercase || !includeUppercase || !includeNumbers || !includeSpecialChars) {
    alert("Invalid! At least one must be true");

    includeLowercase = confirm("Would you like to include lowercase letters?");
    includeUppercase = confirm("Would you like to include uppercase letters?");
    includeNumbers = confirm("Would you like to include numbers?");
    includeSpecialChars = confirm("Would you like to include special characters?");
  }

  var password = "";
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = [1,2,3,4,5,6,7,8,9,0];
  var specialCharacters = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

  
}


/*

to implement randomization

if (includeLowercase === true) {
  append character to password string variable or maybe use array
}

This will be modularized to includeUppercase, includeNumbers etc.

In the 'if' statement use Math.random to randomly select a character from the following variables:
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";



*/ 
