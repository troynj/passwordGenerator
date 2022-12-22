// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwOptions = {
  lowercase: null,
  uppercase: null,
  numeric: null,
  special: null,
  pwLength: null,
  exclude: null,
};
var availableCriteria = {
  lAplha: [
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
  uAplha: [
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
  //num: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  symbol: {
    "!": true,
    "@": true,
    "#": true,
    //$: true,
    "%": true,
    "^": true,
    "&": true,
    "*": true,
    "(": true,
    ")": true,
    "-": true,
    "=": true,
    //_: true,
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
var updatedSymbolArr = [];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.innerHTML = password;
}

function setPwLength() {
  var pwLengthCheck = false;
  var desiredLength;
  while (!pwLengthCheck) {
    desiredLength = prompt(
      "How many characters would you like your password to be? Enter a number between 8 and 128"
    );
    if (desiredLength < 8) {
      alert("Password must be atleast 8 characters long");
    } else if (desiredLength > 128) {
      alert("Password cannot be longer than 128 characters");
    } else {
      pwLengthCheck = true;
    }
  }
  return desiredLength;
}
function setCharTypes(type) {
  return confirm(
    "Would you like your password to include " + type + " characters?"
  );
}
function generatePassword() {
  var generatedPassword = "";
  defineCriteria();
  for (var i = 0; i < pwOptions.pwLength; i++) {
    //generatedPassword.concat(generateCharacter());
    //generatedPassword.push(generateCharacter());
    generatedPassword += generateCharacter();
  }

  return generatedPassword;
  //   console.log("generatedPassword: " + generatedPassword)
}

function defineCriteria() {
  //ask user params for pw
  pwOptions.pwLength = setPwLength();
  pwOptions.lowercase = setCharTypes("lowercase");
  pwOptions.uppercase = setCharTypes("uppercase");
  pwOptions.numeric = setCharTypes("numeric");
  pwOptions.special = setCharTypes("special");
  //if they want symbols, which ones should be excluded
  if (pwOptions.special) {
    pwOptions.exclude = prompt(
      "Which characters should not be included in your password: " +
        availableCriteria.symbol
    );
    //convert to array
    var tempArr = [];
    if (pwOptions.exclude) {
        tempArr = Object.values(pwOptions.exclude);
    }
    var tempArr2 = Object.keys(availableCriteria.symbol);

    //if tempArr has length (has any values/ length != 0)
    if (tempArr.length) {
    //loop through excluded symbols obj
    tempArr.forEach((e, i) => {
      //if symbol obj includes excluded symbols array
      if (tempArr2.includes(e)) {
        //change key:value pair from true to false
        availableCriteria.symbol[e] = false;
      }
    });
}
    //go through sumbol obj
    tempArr2.forEach((e) => {
      //if value of symbol obj's key is true,
      if (availableCriteria.symbol[e]) {
        //add symbol to new array
        updatedSymbolArr.push(e);
      }
    });

  }
}
function generateCharacter() {
  var genChar = "";
  var index = Math.floor(Math.random() * 4);
  var tempValueArr = Object.values(pwOptions);
  var desiredCharTypeCheck = false;

  // console.log("============")
  // console.log("==pwOptions")
  // console.log(pwOptions)
  // console.log("==tempValueArr")
  // console.log(tempValueArr)
  console.log("==index: " + index);
  console.log("==tempValueArr[index]");
  console.log(tempValueArr[index]);

  while (!desiredCharTypeCheck) {
    if (!tempValueArr[index]) {
      index = Math.floor(Math.random() * 3);
      console.log("new index = " + index);
    } else {
      desiredCharTypeCheck = true;
    }
  }

  switch (index) {
    case 0:
      var char = Math.floor(Math.random() * 26);
      genChar = availableCriteria.lAplha[char];
      break;
    case 1:
      genChar = availableCriteria.uAplha[char];
      break;
    case 2:
      genChar = Math.floor(Math.random() * 10);
      break;
    case 3:
      rndmIndex = Math.floor(Math.random() * updatedSymbolArr.length);
      genChar = updatedSymbolArr[rndmIndex];
      break;
  }
  console.log("genChar: " + genChar);
  return genChar;
}
//passwordText.value = password;
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
