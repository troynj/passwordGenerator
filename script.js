// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwObj = {
  lowercase: null,
  uppercase: null,
  numeric: null,
  special: null,
  length: null,
  exclude: null,
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

function setPwLength() {
  var pwLengthCheck = false;
  var pwLength;
  while (!pwLengthCheck) {
    pwLength = prompt(
      "How many characters would you like your password to be? Enter a number between 8 and 128"
    );

    if (pwLength < 8) {
      alert("Password must be atleast 8 characters long");
    } else if (pwLength > 128) {
      alert("Password cannot be longer than 128 characters");
    } else {
      pwLengthCheck = true;
    }
  }
  return pwLength;
}

function setCharTypes(type) {
  return confirm(
    "Would you like your password to include " + type + " characters?"
  );
}

function generatePassword() {
  pwPopulator = {
    aplha: [
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
    ],
    num: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    symbol: {
      "!": true,
      "@": true,
      "#": true,
      "$": true,
      "%": true,
      "^": true,
      "&": true,
      "*": true,
      "(": true,
      ")": true,
      "-": true,
      "=": true,
      "_": true,
      "+": true,
      "[": true,
      "]": true,
      "{": true,
      "}": true,
      "|": true,
      ":": true,
      ";": true,
      ",": true,
      ".": true,
      "<": true,
      ">": true,
      "?": true,
      "/": true,
    },
  };
  //var excludeArr = [];

  pwObj.length = setPwLength();
  pwObj.lowercase = setCharTypes("lowercase");
  pwObj.uppercase = setCharTypes("uppercase");
  pwObj.numeric = setCharTypes("numeric");
  pwObj.special = setCharTypes("special");

  for (var i = 0; i < pwObj.length; i++) {
    var charType = Math.floor(Math.random() * 4);
    pwPopulator;
  }

  console.log("pwPopulator.symbol");
    console.log(pwPopulator.symbol["!"]);
    console.log(pwPopulator.symbol[3]);
    console.log(pwPopulator.symbol[4]);

  if (pwObj.special) {
    pwObj.exclude = prompt(
      "Which characters should not be included in your password: " + pwPopulator.symbol
    );
var tempArr = Object.values(pwObj.exclude)
var tempArr2 = Object.keys(pwPopulator.symbol)

    tempArr.forEach((e, i) => {
        if (tempArr2.includes(e)) {
            pwPopulator.symbol[e]=false;
        }
        
    })

    console.log("pwPopulator.symbol");
    console.log(pwPopulator.symbol);
  }
}

//getRndmValue ()

//passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
