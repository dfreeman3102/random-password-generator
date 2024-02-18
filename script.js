// Assignment Code
var generateBtn = document.querySelector("#generate");

// this function generates the password based on parameters
function generatePassword(length, numbers, specialChar, upper, lower) {

// these prompts and variables give the funcion the parameter answers
var length = prompt("How many characters between 8-128?", "8");
console.log(length);

var numbers = confirm("Include numbers?");
console.log(numbers);

var specialChar = confirm("Include special characters?");
console.log(specialChar);

var upper = confirm("Include uppercase?");
console.log(upper);

var lower = confirm("Include lowercase?");
console.log(lower);

var passwordLength = length;

var includeNumbers = numbers;

var includeSpecial = specialChar;

var includeUpper = upper;

var includeLower = lower;

  // these variables give all the possible options for characters
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var allowedSpecial = "`~!@#$%^&*()-_=+[{]};<>/?";
// this var gives the allowed characters a place to go for picking
  var allowedChars = "";

  var password = "";
// these statements say if they are included, go into allowedChars, if not do nothing
  allowedChars += includeLower ? lowerChars : "";
  allowedChars += includeUpper ? upperChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSpecial ? allowedSpecial : "";
// if statements for the inputs of length and what characters are allowed
  if (passwordLength < 8 || passwordLength > 128) {
    return "*-Password must be between 8 and 128 Characters-*";
  }
  if (allowedChars.length === 0) {
    return "At least one option must be selected";
  }
  // for statement to determine actual password based on length allowed and what chars are avaliable to use
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
