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

function getPasswordBase() {
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].toString();
  var specialCharacters = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  var passwordBase = "";
  var includeLowercase = confirm(
    "Would you like to include lowercase letters?"
  );
  if (includeLowercase) {
    passwordBase = passwordBase.concat(lowercaseLetters);
  }
  var includeUppercase = confirm(
    "Would you like to include uppercase letters?"
  );
  if (includeUppercase) {
    passwordBase = passwordBase.concat(uppercaseLetters);
  }
  var includeNumbers = confirm("Would you like to include numbers?");

  if (includeNumbers) {
    passwordBase = passwordBase.concat(numbers);
  }

  var includeSpecialChars = confirm(
    "Would you like to include special characters?"
  );
  if (includeSpecialChars) {
    passwordBase = passwordBase.concat(specialCharacters);
  }
  if (passwordBase.length === 0) {
    return getPasswordBase();
  }
  return passwordBase;
}

function getPasswordLength() {
  var passwordLength = window.prompt(
    "How many characters do you want in your password?"
  );

  if (passwordLength < 8 || passwordLength > 128) {
    return getPasswordLength();
  }
  return passwordLength;
}

function generatePassword() {
  var passwordLength = getPasswordLength();
  var passwordBase = getPasswordBase();

  var password = "";
  for (let i = 0; i < passwordLength; i++) {
    var randomChar = passwordBase.charAt(
      Math.floor(Math.random() * passwordBase.length)
    );
    password = password.concat(randomChar);
  }

  return password;
}
