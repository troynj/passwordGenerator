// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwObj = [
  {//0
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
  {//1
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
  {//2
    type: "numeric",
    desired: null,
    options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    generateChar: function () {
      return Math.floor(Math.random() * 10);
    },
  },
  {//3
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
  { length: null },//4
  { exclude: [] },//5
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

    for (var i = 0; i < 4; i++) {
        console.log("pwObj[i].type")
        console.log(pwObj[i].type)
    pwObj[i].desired = setCharTypes(pwObj[i].type);
 
    }

    if (
      !pwObj[0].desired &&
      !pwObj[1].desired &&
      !pwObj[2].desired &&
      !pwObj[3].desired
    ) {
      alert("The Password must have alpha, numeric, or special characters!");
    } else {
      pwHasChar = true;
    }
  }

  //if they want symbols, which ones should be excluded
  if (pwObj[3].desired) {
    pwObj[5].exclude = prompt(
      "Which characters should not be included in your password: " +
      Object.keys(pwObj[3].options));
    
  };

  console.log("Exclude: " + pwObj[5].exclude)
    //convert to array
    var tempArr = Object.values(pwObj[5].exclude);
    var tempArr2 = Object.keys(pwObj[3].options);
    //loop through excluded symbols obj
    tempArr.forEach((e, i) => {
      //if symbol obj includes excluded symbols array
      if (tempArr2.includes(e)) {
        //change key:value pair from true to false
        //console.log("pwObj[3].options[e]");
        console.log(pwObj[3].options[e]);
        pwObj[3].options[e] = false;
        console.log(pwObj[3].options[e]);
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

    console.log(pwObj[3])
    console.log(pwObj[3].desired)

    for ( var i = 0; i < 4; i++) {
        console.log("wtf");
        console.log(i)
        console.log(pwObj[i].desired)
        // console.log(!Object.values(pwObj[i].desired));
        // console.log(!pwObj[i]["desired"]);
        if (!pwObj[i].desired) {
            // console.log("Entered if statement")
            // console.log(!pwObj[i].desired)
            pwObj.splice(i, 1);
        }
    }

  }

//passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
