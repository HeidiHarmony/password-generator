//Variables

let userHowMany = document.getElementById ("num-characters");
let userUpper = document.getElementById ("uppercase-letters");
let userLower = document.getElementById ("lowercase-letters");
let userNumeric = document.getElementById ("numeric");
let userSpecial = document.getElementById ("special-charcters");

//Constants

const alphaUpperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const alphaLowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const numericArray = [0, 1, 2,3, 4, 5, 6, 7, 8, 9];

const specialCharArray = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];



function characterTypes() {

  let fullCharacterTypesArray = []; 

  if (document.getElementById ("uppercase-letters").checked) {
    fullCharacterTypesArray.push(alphaUpperArray);}
    console.log(fullCharacterTypesArray);
  if (document.getElementById ("lowercase-letters").checked) {
      fullCharacterTypesArray.push(alphaLowerArray);}
      console.log(fullCharacterTypesArray);
  if (document.getElementById ("numeric").checked) {
        fullCharacterTypesArray.push(numericArray);}    console.log(fullCharacterTypesArray);
  if (document.getElementById ("special-characters").checked) {
        fullCharacterTypesArray.push(specialCharArray);}    console.log(fullCharacterTypesArray);

      return fullCharacterTypesArray;  
}

  let fullCharacterTypesArray = characterTypes();


const generateBtn = document.getElementById("generate");
//Temp test of the generated array
generateBtn.addEventListener("click", characterTypes);


console.log(specialCharArray);
console.log(alphaUpperArray); 
console.log(alphaLowerArray);
console.log(numericArray);
console.log(fullCharacterTypesArray);

//TEST POINT






/*
// Write password to the #password input
function generatePassword() {
  if 





  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

*/