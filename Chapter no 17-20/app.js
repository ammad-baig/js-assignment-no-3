//ARRAYS AND LOOPS

//Exercise no 1

var ArrinArr = [[]];

//Exercise no 2

//Exercise no 3

for (var i = 1; i <= 10; i++) {
  console.log(i);
  document.write("<br />" + i);
}

//Exercise no 4

document.write("<h1>Table</h1> ");

var tableNum = +prompt("Enter the number to print its multiplication table:");
var tableLength = +prompt("Enter the length of multiplication table:");

for (var i = 1; i <= tableLength; i++) {
  console.log(tableNum + " x " + i + " = " + tableNum * i);
  document.write("<br />" + tableNum + " x " + i + " = " + tableNum * i);
}

//Exercise no 5

const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
  console.log("Element at index " + i + " is " + fruits[i]);
}

//Exercise no 6

document.write("<h1>Counting:</h1> ");
for (var i = 1; i <= 15; i++) {
  document.write(i + ", ");
}
document.write("<h1>Reverse counting:</h1> ");
for (var i = 10; i >= 1; i--) {
  document.write(+i + ", ");
}
document.write("<h1>Even:</h1> ");
for (var i = 0; i <= 20; i += 2) {
  document.write(i + ", ");
}
document.write("<h1>Odd:</h1> ");
for (var i = 1; i <= 19; i += 2) {
  document.write(i + ", ");
}
document.write("<h1>Series:</h1> ");
for (var i = 1; i <= 10; i++) {
  document.write(i * 2 + "k, ");
}

//Exercise no 7

var Bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt(
  "Welcome to ABC Bakery.What do you want to order sir/ma'am?"
);

var found = false;
for (var i = 0; i < Bakery.length; i++) {
  if (Bakery[i] === userInput) {
    found = true;
    break;
  }
}

if (found) {
  console.log(userInput + " is Available at index " + i + " in our bakery ");
} else {
  console.log("We are Sorry. " + userInput + " is Not Available in our bakery");
}

//Exercise no 8

document.write("<h2>Largest Number</h2>");

var A = [24, 53, 78, 91, 12];
var largest = A[0];

for (var i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}

document.write("A = [24, 53, 78, 91, 12]");
document.write("<br />The largest number is: " + largest);

//Exercise no 9

document.write("<h2>Smallest Number</h2>");

var B = [24, 53, 78, 91, 12];
var smaller = A[0];

for (var i = 1; i < A.length; i++) {
  if (B[i] < smaller) {
    smaller = B[i];
  }
}

document.write("B = [24, 53, 78, 91, 12]");
document.write("<br />The smaller number is: " + smaller);

//Exercise no 10

document.write("<h1>Multipy by 5</h1>");

for (var i = 1; i <= 100; i++) {
  if (i % 5 == 0) {
    document.write(i + " ,");
  }
}
