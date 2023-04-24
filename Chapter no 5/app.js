//MATH EXPRESSIONS

//Exercise no 1

var a1 = 3;
var a2 = 5;
var a3 = a1 + a2;
document.write("Sum of " + a1 + " and " + a2 + " is " + a3);

//Exercise no 2

document.write("<h1>Exercise no 2</h1>");

var b1 = 3;
var b2 = 5;
var b3 = b1 - b2;
document.write("<br />Subtraction of " + b1 + " and " + b2 + " is " + b3);

var c1 = 3;
var c2 = 5;
var c3 = c1 * c2;
document.write("<br />Multiplication of " + c1 + " and " + c2 + " is " + c3);

var d1 = 3;
var d2 = 5;
var d3 = d1 / d2;
document.write("<br />Division of " + d1 + " and " + d2 + " is " + d3);

var e1 = 3;
var e2 = 5;
var e3 = e1 % e2;
document.write("<br />Modulus of " + e1 + " ane " + e2 + " is " + e3);

//Exercise no 3

document.write("<h1>Exercise no 3</h1>");
var a;
document.write("<br />Value after variable declaration is:" + a);
a = 5;
document.write("<br />Initial Value : " + a);
a++;
document.write("<br />Value after increment is: " + a);
a += 7;
document.write("<br />Value after addition is: " + a);
a--;
document.write("<br />Value after decrement is: " + a);
a = a % 3;
document.write("<br />The remainder is: " + a);

//Exercise no 4

document.write("<h1>Exercise no 4</h1>");

var TicketPrice = 600;
var NoOfTickets = 5;
var calculate = TicketPrice * NoOfTickets;

document.write(
  "Total cost to buy " +
    NoOfTickets +
    " Tickets to a movie is " +
    calculate +
    "PKR"
);

//Exercise no 5

document.write("<h1>Exercise no 5</h1>");

document.write("<h3>Table of 8</h3>");

var b = 8;

for (var i = 1; i <= 10; i++) {
  var c = b * i;
  document.write(b + " x " + i + " = " + c + "<br />");
}

//Exercise no 6

document.write("<h1>Exercise no 6</h1>");

var celsius = 25;

document.write(celsius + "'C is " + ((celsius * 9) / 5 + 32) + "'F<br />");

var fahrenheit = 70;

document.write(fahrenheit + "'F is " + ((fahrenheit - 32) * 5) / 9 + "'C");

//Exercise no 7

document.write("<h1>Exercise no 7</h1>");

document.write("<h3>Shopping Cart</h3>");

var Item1Price = 650;
var Item2Price = 100;
var Item1Quantity = 3;
var Item2Quantity = 7;
var shipping = 100;

var TotalCost =
  Item1Price * Item1Quantity + Item2Price * Item2Quantity + shipping;

document.write("<br />Price of item 1 is " + Item1Price);
document.write("<br />Quantity of item 1 is " + Item2Price);
document.write("<br />Price of item 2 is " + Item2Price);
document.write("<br />Quantity of item 2 is " + Item2Price);
document.write("<br />Shipping Charges is " + shipping);

document.write("<br />Total Cost of Your Order is " + TotalCost);

//Exercise no 8

document.write("<h1>Exercise no 8</h1>");
document.write("<h3>Mark Sheet</h3>");

var TotalMarks = 980;
var MarksObtained = 804;
var percentage = (MarksObtained / TotalMarks) * 100;

document.write("<br />Total Marks: " + TotalMarks);
document.write("<br />Mark Obtained: " + MarksObtained);
document.write("<br />Percentage: " + percentage + "%");

//Exercise no 9

document.write("<h1>Exercise no 9</h1>");
document.write("<h3>Currency in PKR</h3>");

var Dollars = 10;
var Riyals = 25;
var USDToPKR = 104.8;
var RYLToPKR = 28;

var TotalCurrency = Dollars * USDToPKR + Riyals * RYLToPKR;

document.write("<br />Dollars = " + 10);
document.write("<br />Riyals = " + 25);
document.write("<br />1 USD = " + 104.8 + "PKR");
document.write("<br />1 RYL = " + 28 + "PKR");

document.write("<br />Total Currency in PKR = " + TotalCurrency + "PKR");

//Exercise no 10

document.write("<h1>Exercise no 10</h1>");
document.write("<h3>Calculations In A Single Expression</h3>");

var d = 8;

document.write(d + "(5 * 10) / 2<br />");
document.write("Total =" + (d + (5 * 10) / 2));

//Exercise no 11

document.write("<h1>Exercise no 11</h1>");
document.write("<h3>The Age Calculator</h3>");

var CurrentYear = 2023;
var BirthYear = 1999;
var CalculateAge = CurrentYear - BirthYear;

document.write("<br />Current Year = " + CurrentYear);
document.write("<br />Birth Year = " + BirthYear);
document.write("<br />Your Age = " + CalculateAge);

//Exercise no 12

document.write("<h1>Exercise no 12</h1>");
document.write("<h3>The Geometrizer</h3>");

var radius = 20;
var pie = 3.142;

document.write("<br />Radius of circle: " + 20);
document.write("<br />The Circumference is: " + 2 * pie * radius);
document.write("<br />The Area is: " + pie * (radius * radius));

//Exercise no 13

document.write("<h1>Exercise no 13</h1>");
document.write("<h3>The Lifetime Supply Calculator</h3>");

var snack = "Lays";
var CurrentAge = 15;
var MaxAge = 65;
var PerDaySnack = 3;

var TotalSnack = (MaxAge - CurrentAge) * PerDaySnack;

document.write("<br />Favourite Snack: " + snack);
document.write("<br />Current Age: " + CurrentAge);
document.write("<br />Estimated Maximum Age: " + MaxAge);
document.write("<br />Amount of Snack per day: " + PerDaySnack);

document.write(
  "<br />You will need " +
    TotalSnack +
    " to last you until the ripe old age of " +
    MaxAge
);
