//MATH EXPRESSIONS EXTENDED

//Exercise no 1

document.write("<h1>Exercise no 1</h1>");

var a = 10;
document.write("<br />The Value of a is:" + a);

document.write("<br />The Value of ++a is:" + ++a);
document.write("<br />Now The Value of a is:" + a);

document.write("<br /> The Value of a++ is:" + a++);
document.write("<br />Now The Value of a is:" + a);

document.write("<br /> The Value of --a is:" + --a);
document.write("<br />Now The Value of a is:" + a);

document.write("<br /> The Value of a-- is:" + a--);
document.write("<br />Now The Value of a is:" + a);

//Exercise no 2

document.write("<h1>Exercise no 2</h1>");

var b = 2;
var c = 1;
// var result = --b - --c + ++c + c--;

document.write("<br />a is" + b);
document.write("<br />b is" + c);
document.write("<br />--a is 1");
document.write("<br />--a - --b is 1");
document.write("<br />--a - --b + ++b is 2");

document.write("<br />--a - --b + ++b + b-- is 3");
var result = --b - --c + ++c + c--;
document.write("<br />result is" + result);


//Exercise no 3

document.write("<h1>Exercise no 3</h1>");
document.write("<p>Greetings</p>");

var FullName = prompt("Enter Full Name");

alert(FullName + "! Welcome To My WebPage");

//Exercise no 5

document.write("<h1>Exercise no 5</h1>");
document.write("<h3>Table </h3>");

var TableNum = +prompt("Enter Any Number");

for (var i = 1; i <= 10; i++) {
  if (TableNum > 0) {
    var d = TableNum * i;
    document.write(TableNum + " x " + i + " = " + d + "<br />");
  } else {
    TableNum = 5;
  }
}

//Exercise no 6

document.write("<h1>Exercise no 6</h1>");
document.write("<h3>MarkSheet </h3>");

var Subject1 = prompt("Enter Subject 1 Name" , "English");
var Subject2 = prompt("Enter Subject 2 Name" , "Maths");
var Subject3 = prompt("Enter Subject 3 Name" , "Urdu");
var Subject4 =  " " ;
var PerSubMarks = 100;
var TotalMarks = PerSubMarks + PerSubMarks + PerSubMarks;
var Sub1Marks = +prompt("Enter " + Subject1 + " Marks");
var Sub2Marks = +prompt("Enter " + Subject2 + " Marks");
var Sub3Marks = +prompt("Enter " + Subject3 + " Marks");
var TotalObtMarks = Sub1Marks + Sub2Marks + Sub3Marks;
var sub1percent = (Sub1Marks / PerSubMarks) * 100;
var sub2percent = (Sub2Marks / PerSubMarks) * 100;
var sub3percent = (Sub3Marks / PerSubMarks) * 100;

var Percentage = (TotalObtMarks / TotalMarks) * 100;

document.write(`    <table>
<tr>
    <th>Subjects</th>
    <th>Total Marks</th>
    <th>Obatained Marks</th>
    <th>Percentage</th>
</tr>
<tr>
    <td>` + Subject1 + `</td>
    <td>` + PerSubMarks + `</td>
    <td>` + Sub1Marks + `</td>
    <td>` + sub1percent + `</td>
</tr>
<tr>
    <td>` + Subject2 + `</td>
    <td>` + PerSubMarks + `</td>
    <td>` + Sub2Marks + `</td>
    <td>` + sub2percent + `</td>
</tr>
<tr>
    <td>` + Subject3 + `</td>
    <td>` + PerSubMarks + `</td>
    <td>` + Sub3Marks + `</td>
    <td>` + sub3percent + `</td>
</tr>
<tr>
    <td>` + Subject4  + `</td>
    <td>` + TotalMarks + `</td>
    <td>` + TotalObtMarks + `</td>
    <td>` + Percentage + `</td>
</tr>
</table>`);

