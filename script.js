// " !"#$%&"()*+,-./:;<=>?@[\]^_`{|}~"

// Assignment code here

//Variables

let userHowMany = document.getElementById ("num-characters");

//Constants

const alphaUpperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const alphaLowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const numericArray = [0, 1, 2,3, 4, 5, 6, 7, 8, 9];

function generateSpecialCharacters () {

  const startCodePoint = 33; // Starting code point for special characters 
  const endCodePoint = 126; // Ending code point for special characters 
  const specialCharacters = [];

  //Returns the entire array as the definition of the specialCharacters constant that called the function
  for  (let codePoint = startCodePoint; codePoint <= endCodePoint; codePoint++) 
    { const character = String.fromCodePoint(codePoint); specialCharacters.push(character); 
    }
    return specialCharacters; 
}

const specialCharacters = generateSpecialCharacters();
    
const characterTypesArray = [alphaUpperArray, alphaLowerArray, numericArray, specialCharacters];


//TEST POINT

    console.log(specialCharacters);

/*
// Get references to the #generate element
const generateBtn = document.getElementById("#generate");
generateBtn.addEventListener('click', writePassword())
// code to execute when button i clicked goes here

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/