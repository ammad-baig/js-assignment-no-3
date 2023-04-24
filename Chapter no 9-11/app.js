//USER INPUT & CONDITIONAL STATEMENT

//Exercise no 1

var City = prompt("Enter City Name");

if (City == "karachi") {
  console.log("Welcome to city of lights");
} else {
  console.log("Welcome to " + City);
}

//Exercise no 2

var Gender = prompt("Your Gender");

if (Gender == "male") {
  console.log("Good Morning Sir");
} else if (Gender == "female") {
  console.log("Good Morning Ma'am");
} else {
  console.log("Good Morning all");
}

//Exercise no 3

var TrafficLights = prompt("Enter Color");

if (TrafficLights == "red") {
  console.log("Must Stop");
} else if (TrafficLights == "yellow") {
  console.log("Ready to move");
} else if (TrafficLights == "green") {
  console.log("Move now");
} else {
  console.log("don't drive");
}

//Exercise no 4

var Fuel = +prompt("Enter Fuel Remaining");

if (Fuel < 0.25) {
  console.log("Please refill the fuel in your car");
} else {
  console.log("just drive peacefully");
}

//Exercise no 5

var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true"); //True
}
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true"); //False
}
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true"); //False
}
if (c === 13) {
  alert("condition 2 is true"); //True
}
if (++c < 14) {
  alert("condition 3 is true"); //False
}
if (c === 14) {
  alert("condition 4 is true"); //True
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals"); //True
}
if (true) {
  alert("True"); //True
}
if (false) {
  alert("False"); //False
}
if ("car" < "cat") {
  alert("car is smaller than cat"); //True
}

//Exercise no 6

var Subject1 = +prompt("Enter Subject 1 Marks");
var Subject2 = +prompt("Enter Subject 2 Marks");
var Subject3 = +prompt("Enter Subject 3 Marks");
var PerSubMarks = 100;
var TotalMarks = 300;
var MarksObtained = Subject1 + Subject2 + Subject3;
var Percentage = (MarksObtained / TotalMarks) * 100;

document.write("Mark ");
document.write("<br />Total Marks : " + TotalMarks);
document.write("<br />Marks Obatained : " + MarksObtained);
document.write("<br />Percentage : " + Percentage + "%");

if (Percentage >= 80) {
  document.write("<br />Grade: A-one");
  document.write("<br />Remarks : Excellent");
} else if (Percentage >= 70) {
  document.write("<br />Grade: A");
  document.write("<br />Remarks : Good");
} else if (Percentage >= 60) {
  document.write("<br />Grade: B");
  document.write("<br />Remarks : You need to Improve");
} else if (Percentage < 60) {
  document.write("<br />Grade: Fail");
  document.write("<br />Remarks : Sorry");
}

//Exercise no 7

var SecretNumber = prompt("Enter Lucky Number");

if (SecretNumber == 7) {
  console.log("Bingo! Correct answer");
} else if (SecretNumber == 7 + 1 || SecretNumber == 7 - 1) {
  console.log("Close enough to the correct answer");
} else {
  console.log("Sorry! Wrong Answer");
}

//Exercise no 8

var GivenNumber = +prompt("Enter any divisible Number");
var divisible = GivenNumber % 3;

if (divisible) {
  console.log(GivenNumber + " is not divided by 3");
} else {
  console.log(GivenNumber + " is divided by 3");
}

//Exercise no 9

var GivenInput = +prompt("Enter any Odd or Even Number");
var divisibleOddEven = GivenInput % 2;

if (divisibleOddEven) {
  console.log(GivenInput + " is odd");
} else {
  console.log(GivenInput + " is even");
}

//Exercise no 10

var Tempreature = +prompt("Writr Current Tempreature");

if (Tempreature >= 40) {
  console.log("It is too hot outside.");
} else if (Tempreature >= 30) {
  console.log("The Weather today is Normal.");
} else if (Tempreature >= 20) {
  console.log("Today’s Weather is cool.");
} else if (Tempreature < 20) {
  console.log("OMG! Today’s weather is so Cool.");
}

//Exercise no 11
