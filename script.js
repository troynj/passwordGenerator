// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwObj = [
  {//1
    type: "lowercase",
    desired: null,
    options: [
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
    ],
    generateChar: function () {
      var char = Math.floor(Math.random() * 26);
      return availableCriteria.aplha[char].toLowerCase();
    },
  },
  {//2
    type: "uppercase",
    desired: null,
    options: [
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
  },
  {//3
    type: "numeric",
    desired: null,
    options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    generateChar: function () {
      return Math.floor(Math.random() * 10);
    },
  },
  {//4
    type: "special",
    desired: null,
    options: {
      "!": true,
      "@": true,
      "#": true,
      //"$": true,
      "%": true,
      "^": true,
      "&": true,
      "*": true,
      "(": true,
      ")": true,
      "-": true,
      "=": true,
      //"_": true,
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
    generateChar: function () {
      rndmIndex = Math.floor(Math.random() * updatedSymbolArr.length);
      return updatedSymbolArr[rndmIndex];
    },
  },
  { length: null },//5
  { exclude: null },//6
];

var pwRandomizerArr = [];
var updatedSymbolArr = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.innerHTML = password;
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
  var generatedPassword = "";
  defineCriteria();
  //setRandomizer();

  for (var i = 0; i < pwObj.length; i++) {
    var rndmIndex = Math.floor(Math.random() * pwRandomizerArr.length);
    generatedPassword += pwRandomizerArr[rndmIndex];
  }

  return generatedPassword;
  //   console.log("generatedPassword: " + generatedPassword)
}

function defineCriteria() {
  var pwHasChar = false;

  //ask user params for pw
  pwObj.length = setPwLength();

  while (pwHasChar == false) {
    pwObj.lowercase = setCharTypes("lowercase");
    pwObj.uppercase = setCharTypes("uppercase");
    pwObj.numeric = setCharTypes("numeric");
    pwObj.special = setCharTypes("special");

    if (
      !pwObj.lowercase &&
      !pwObj.uppercase &&
      !pwObj.numeric &&
      !pwObj.special
    ) {
      alert("The Password must have alpha, numeric, or special characters!");
    } else {
      pwHasChar = true;
    }
  }

  //if they want symbols, which ones should be excluded
  if (pwObj.special) {
    pwObj.exclude = prompt(
      "Which characters should not be included in your password: " +
      Object.keys(pwObj[3].options));
    
  };

  console.log("Exclude: " + pwObj.exclude)
    //convert to array
    var tempArr = Object.values(pwObj.exclude);
    var tempArr2 = Object.keys(pwObj[3].options);
    //loop through excluded symbols obj
    tempArr.forEach((e, i) => {
      //if symbol obj includes excluded symbols array
      if (tempArr2.includes(e)) {
        //change key:value pair from true to false
        //console.log("pwObj[3].options[e]");
        //console.log(pwObj[3].options[e]);
        pwObj[3].options[e] = false;
        //console.log(pwObj[3].options[e]);
      }
    });

    //go through sumbol obj
    tempArr2.forEach((e) => {
      //if value of symbol obj's key is true,
      if (pwObj[3].options[e]) {
        //add symbol to new array
        updatedSymbolArr.push(e);
      }
    });
  }


// function setRandomizer() {
//   if (pwOptions.lowercase) {
//     var temp = function () {
//       var char = Math.floor(Math.random() * 26);
//       return availableCriteria.aplha[char];
//     };
//     pwRandomizerArr.push(temp);
//   }
//   if (pwOptions.uppercase) {
//     var temp = function () {
//       var char = Math.floor(Math.random() * 26);
//       return availableCriteria.aplha[char].toLowerCase();
//     };
//     pwRandomizerArr.push(temp);
//   }
//   if (pwOptions.numeric) {
//     var temp = function () {
//       return Math.floor(Math.random() * 10);
//     };
//     pwRandomizerArr.push(temp);
//   }
//   if (pwOptions.special) {
//     var temp = function () {
//       rndmIndex = Math.floor(Math.random() * updatedSymbolArr.length);
//       return updatedSymbolArr[rndmIndex];
//     };
//     pwRandomizerArr.push(temp);
//   }

//   console.log("pwRandomizerArr");
//   console.log(pwRandomizerArr);
// }

pwRandomizer = {
  generateUpper: function () {
    var char = Math.floor(Math.random() * 26);
    return availableCriteria.aplha[char];
  },
  generateLower: function () {
    var char = Math.floor(Math.random() * 26);
    return availableCriteria.aplha[char].toLowerCase();
  },
  generateNum: function () {
    return Math.floor(Math.random() * 10);
  },
  generateSymbol: function () {
    rndmIndex = Math.floor(Math.random() * updatedSymbolArr.length);
    return updatedSymbolArr[rndmIndex];
  },
};
//passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
