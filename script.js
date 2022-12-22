// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwOptions = {
  lowercase: null,
  uppercase: null,
  numeric: null,
  special: null,
  length: null,
  exclude: null,
};
var availableCriteria = {
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
  //num: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
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
  defineCriteria();
  getRndmValue();
}

function defineCriteria() {
  //ask user params for pw
  pwOptions.length = setPwLength();
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
    var tempArr = Object.values(pwOptions.exclude);
    var tempArr2 = Object.keys(availableCriteria.symbol);

    //loop through excluded symbols obj
    tempArr.forEach((e, i) => {
      //if symbol obj includes excluded symbols array
      if (tempArr2.includes(e)) {
        //change key:value pair from true to false
        availableCriteria.symbol[e] = false;
      }
    });
  }
//     console.log("availableCriteria.symbol");
//     console.log(availableCriteria.symbol);
//   }

//   //filter out false values
//   var tempSymbolArr = Object.values(availableCriteria.symbol)
//   //converts to array, returns true values
//   var desiredSymbols = tempSymbolArr.filter( (symbol) => {
//     return symbol.value == true;
//   })
//   console.log("Testing Desired Symbols");
//   console.log(desiredSymbols);
}

function getRndmValue () {
    var genChar = null;
    var index = Math.floor(Math.random() * 3);

    // switch (index) {
    // case 0: 
    // console.log("Entered Case 1")
    // var char = Math.floor(Math.random() * 26);
    // var letterCase = Math.floor(Math.random() * 2);
    // // console.log("char")
    // // console.log(char)
    // // console.log(availableCriteria.aplha[char])
    // // console.log(availableCriteria.aplha[char].toLowerCase())

    // if (letterCase) genChar = availableCriteria.aplha[char]
    // else if (letterCase) genChar = availableCriteria.aplha[char].toUpperCase()
    // break;
    // case 1:
    //     genChar = Math.floor(Math.random() * 10);
    // case 2:
        rndmIndex = Math.floor(Math.random() * 26)

        console.log("newCheck")
        console.log(rndmIndex)
        console.log(availableCriteria.symbol[rndmIndex])

    //}
    // console.log("____");
    // console.log(index);
    // console.log("availableCriteria[index]");
    // console.log(availableCriteria[index]);
}

//passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
