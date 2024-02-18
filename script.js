// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

var length = prompt("How many characters between 8-128?", "8");
console.log(length);

var letters = confirm ("Include letters?");
console.log(letters);
if(letters === true){
  var upper = confirm("Include uppercase?");
console.log(upper);
}
if (letters === true){
  var lower = confirm("Include lowercase?");
console.log(lower); 
}

var numbers = confirm("Include numbers?");
console.log(numbers);

var specialChar = confirm("Include special characters?");
console.log(specialChar);
}
// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
