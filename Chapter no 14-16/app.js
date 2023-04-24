//ARRAY

//Exercise no 1

var studentNames = [];

//Exercise no 2

var studentNames = new Array();

//Exersice no 3

var fruits = ["apple", "banana", "orange", "mango"];

//Exersice no 4

var numbers = [1, 2, 3, 4, 5];

//Exersice no 5

var boolean = [true, false];

//Exercise no 6

var MixedArray = ["apple", 2, true, "banana", false];

//Exercise no 7

var Qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "B.COM",
  "MS",
  "M. Phil.",
  "PhD",
];

document.write("<h1>Qualifications:</h1>");

document.write("<ol>");

for (let i = 0; i < Qualifications.length; i++) {
  document.write("<li>" + Qualifications[i] + "</li>");
}

document.write("</ol>");

//Exercise no 8

document.write("<h1>MarkSheet</h1>");

var students = ["Michael", "Jhon", "Tony"];
var MarksObtained = [320, 230, 480];
var totalMarks = 500;

for (var i = 0; i < students.length; i++) {
  var percentage = (MarksObtained[i] / totalMarks) * 100;
  document.write(
    " Score of " +
      students[i] +
      " is " +
      MarksObtained[i] +
      ". Percentage : " +
      percentage +
      "%<br />"
  );
}

//Exercise no 9

document.write("<h1>Colors</h1>");

var colors = ["red", "blue", "green", "yellow", "orange"];

var color = prompt("Enter a color to add to the beginning of the array:");
colors.unshift(color);
document.write(colors + "<br />");

var color = prompt("Enter a color to add to the end of the array:");
colors.push(color);
document.write(colors + "<br />");

colors.unshift("purple", "pink");
document.write(colors + "<br />");

colors.shift();
document.write(colors + "<br />");

colors.pop();
document.write(colors + "<br />");

var position1 = prompt("Enter the index at which you want to add the color:");
var color = prompt("Enter a color to add to the array:");
colors.splice(position1, 0, color);
document.write(colors + "<br />");

var position2 = prompt("Enter the index from where you want to delete color:");
var numberOfColors = prompt("Enter the number of colors you want to delete:");
colors.splice(position2, numberOfColors);
document.write(colors + "<br />");

//Exercise no 10

document.write("<h2>Student Score</h2>");

var StudentScore = [320, 230, 480, 120];
StudentScore.sort(function (a, b) {
  return a - b;
});

document.write([320, 230, 480, 120] + "<br />");
document.write(StudentScore);

//Exercise no 11

document.write("<h2>CITIES</h2>");
const cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

const selectedCities = [];

selectedCities.push(cities[0], cities[3]);

document.write("<br />Cities:", cities);
document.write("<br />Selected cities:", selectedCities);

//Exercise no 12

document.write("<h1>Array to Sting</h1>");

var arr = ["This", "is", "my", "cat"];
var joining = arr.join(" ");
document.write("<br />" + ["This", "is", "my", "cat"]);
document.write("<br />" + joining);

//Exercise no 15

document.write("<h1>DropDown</h1>");

var phoneCompany = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");

for (let i = 0; i < phoneCompany.length; i++) {
  document.write("<option>" + phoneCompany[i] + "</option>");
}

document.write("</select>");
