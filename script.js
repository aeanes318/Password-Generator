//assign variables

var characterLength = 128;
var userChoice = [];
var specialCharacter = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "_",
  "`",
  "{",
  "}",
  "|",
  "~",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
//true or false response to prompts
function writePassword() {
  var truePrompt = userPrompt();

  if (truePrompt) {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = newPassword;
  } else{
    alert("Please select one type of character")
  }

  console.log(truePrompt);
}
function userPrompt() {
  characterLength = prompt("Password character length? (8-128 characters)");
  var lower = confirm("Do you want to use lowercase letters?");
  if (lower) {
    userChoice = userChoice.concat(lowerCase);
  }
  var upper = confirm("Do you want to use uppercase letters?");
  if (upper) {
    userChoice = userChoice.concat(upperCase);
  }
  var num = confirm("Do you want to use numbers?");
  if (num) {
    userChoice = userChoice.concat(numbers);
  }
  var special = confirm("Do you want to use special characters?");
  if (special) {
    userChoice = userChoice.concat(specialCharacter);
  }
  if (lower || upper || num || special) {
    return true;
  } else {
    return false;
  }
}

//generate password from prompts
function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomLetter = Math.floor(Math.random() * userChoice.length);
    password += userChoice[randomLetter];

  }
  return password;
}
