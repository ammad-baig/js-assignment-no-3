//IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS

//Exersice no 1

var input = prompt("Enter a character:");

if (!isNaN(input)) {
  console.log(input + " is a number.");
} else if (input === input.toUpperCase()) {
  console.log(input + " is an uppercase varter.");
} else if (input === input.toLowerCase()) {
  console.log(input + " is a lowercase letter.");
} else {
  console.log("Invalid input.");
}

//Exersice no 2

var Num1 = +prompt("Enter the first integer: ");
var Num2 = +prompt("Enter the second integer: ");

if (Num1 > Num2) {
  console.log(Num1 + " is larger than " + Num2);
} else if (Num2 > Num1) {
  console.log(Num1 + " is smaller than " + Num2);
} else {
  console.log("Both integers are equal");
}

//Exercise no 3

var Num = +prompt("Enter a Number:");

if (Num > 0) {
  console.log(Num + " is a positive Number.");
} else if (Num < 0) {
  console.log(Num + " is a negative Number.");
} else {
  console.log("The Number is zero.");
}

//Exersice no 4

var Vowel = prompt("Enter a Alphabes:");

if (
  (Vowel.length === 1 && Vowel == "a") ||
  Vowel == "e" ||
  Vowel == "i" ||
  Vowel == "o" ||
  Vowel == "u"
) {
  console.log(Vowel + " is a vowel.");
} else {
  console.log(Vowel + " is not a vowel.");
}

//Exercise no 5

var CorrectPassword = "12345";
var UserPassword = prompt("Enter your password:");

if (UserPassword === "") {
  console.log("Please enter your password.");
} else if (UserPassword === CorrectPassword) {
  console.log(
    "Correct! The password you entered matches the original password."
  );
} else {
  console.log("Incorrect password.");
}

//Exercise no 6

var greeting;
var hour = 13;

if (hour < 18) {
  console.log("Good day"); //console missing
} else {
  //{} is not here
  console.log("Good evening"); //console missing
}

//Exercise no 7

var Time = prompt("Enter time");

if (Time >= 0000 && Time < 1200) {
  console.log("Good Morning");
} else if (Time >= 1200 && Time < 1700) {
  console.log("Good Afternoon");
} else if (Time >= 1700 && Time < 2100) {
  console.log("Good Evening");
} else if (Time >= 2100 && Time < 2359) {
  console.log("Good Night");
}
