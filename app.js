// // CHAPTER 4

// // Q1
// // var  x = 3; y = 4; z = 5;

// // Q2

// // legal vars
// // var firstName, lastName, age; userInfo ; contact;

// // illegal vars
// // var 1name; @user; true; full-name; \contact;

// // Q3
// document.write ("<h1>Rules for naming JS variables</h1><br>Variable names can only contain words, number, $ and _. For example $my_1stVariable<br>Variables must begin with a letter, $ or _. For example $name, _name or name<br>Variable names are case sensitive<br>Variable names should not be JS keywords <br><br>");

// // CHAPTER 5

// // Q1
// var s1 = +prompt ("Enter first number");
// var s2 = +prompt ("Enter second number");
// s3 = s1-s2;
// document.write("The subtraction of "+s1+" and "+s2+" is " + s3+"<br>");

// // Q2
// var d1 = +prompt ("Enter first number");
// var d2 = +prompt ("Enter second number");
// d3 = d1/d2;
// document.write("The division of "+d1+" and "+d2+" is " + d3+"<br>");

// var a1 = +prompt ("Enter first number");
// var a2 = +prompt ("Enter second number");
// a3 = a1+a2;
// document.write("The sum of "+a1+" and "+a2+" is " + a3+"<br>");

// var m1 = +prompt ("Enter first number");
// var m2 = +prompt ("Enter second number");
// m3 = m1*m2;
// document.write("The multiplication of "+m1+" and "+m2+" is " + m3+"<br><br>");

// // Q3
// var a;
// document.write ("Value after variable declaration is: 5<br>");
// a = 5;
// document.write("Initial value: 5<br>");
// a = 6;
// document.write ("Value after increment is : 6<br>");
// a= 6+7;
// document.write ("Sum of values:  13<br>");
// a=12;
// document.write ("Value after decrement is 12<br>");
// a=12/3;
// document.write("The remainder is 0<br>");

// // Q4
// var oneTicket = 600;
// fiveTickets = 600*5;

// document.write("Total cost to buy 5 tickets to a movie is "+fiveTickets);

// // Q5

// document.write ("Table of 4<br>4 x 1 = 4<br>4 x 2 = 8<br>4 x 3 = 12<br>4 x 4 = 16<br>4 x 5 = 20<br>4 x 6 = 24<br>4 x 7 = 28<br>4 x 8 = 32<br>4 x 9 = 36<br>4 x 10 = 40<br>");

// // Q6
// document.write ("25C is 77F<br>70F is 21.1111111111111C<br>");

// // Q7
// var p1 = 650;p2 = 100, q1 = 3, q2 = 7;sc = 100;
// totalCost = (p1+p2+q1+q2+sc);
// document.write("<h1>Shopping Cart</h1><br>Price of item 1 is 650<br>Quantity of item 1 is 3<br>Price of item 2 is 100<br>Quantity of item 2 is 7<br>Shipping Charges 100<br><br>Total cost of your order is "+totalCost+"<br>");

// // Q8
// var tMarks=1000;
// var sMarks=900;
// percentage=(sMarks/tMarks)*100;
// document.write("<h1>Marks Sheet</h1><br><br>Total marks : 1000<br>Marks Obtained: 900<br>Percentage: "+ percentage +"%");

// // Q9
// var us = 10;sr = 25;
// pkr = (us*104.8)+(sr*28);
// document.write("<h1>Currecny is PKR</h1><br><br>Totak Currency is PKR : "+pkr+"<br>");

// // Q10
// var a=0;
// a=0+5;
// a=a*10;
// a=a/2;

// // Q11
// var year = 2024, byear = 2000;
// document.write("<h1>Age Calculator</h1><br>Current year is 2024<br>Birth year is 2000<br>Your age is 24<br>");

// // Q12
// var radius = 20;
// circumference = 125.6799999999999;
// area = 1256.8;
// document.write("The geometrizer <br>Radius of a circle<br>the circumference os a circle is "+circumference+"<br>the area is 1256.8<br>");

// // Q13
// var snack = "lays", age = 21, maxAge = 80, snackPerDay= 1;
// document.write("<h1>The lifetime supply Calculator</h1><br>Fav Snack = Lays <br>Current Age is 21<br>Max Age is 80<br>Snack per day is 1<br>You will need 88 lays to last you until the age os 80<br>");

// // CHAPTER 6
// // Q1
// x++, x +=1;

// // Q2
// var x= 100;
// x=--x;

// // Q3
// var x = 50; var y = x++;
// y=50;

// // Q4
// var y = 50; var z = --y;
// z = 49;

// // Q5
// var newNum = --num;

// // Q6
// var originalValue = 5;
// var newValue = originalValue + 1;

// // Q7
// var num = ++10;
// alert(num);

// // CHAPTER 7
// // Q1
// var calculatedNum = 2 + (2 * 6);
// // 14 ANSWER

// // Q2
var calculatedNum = (2 + 2) * 6;
// // 24 ANSWER

// Q3
var calculatedNum = (2 + 2) * (4 + 2);
// 24 ANSWER

// Q4
var calculatedNum = ((2 + 2) * 4) + 2;
// 18 ANSWER

//  Q5
var cost = (2 + 2) * 4 + 10;

// Q6
var units = 2 + 2 * 4 + 10;

// Q7
var pressure = (4 / 2) * 4;

// Chapter 8
// Q1

var num = "2"+"2";
// 22 answer

// Q2
var message = ("Hello," + "Dolly");
alert (message);

// Q3
alert("33" + 3);
// 333 answer

// Q4
alert("Pakistan " + "Zindabad");

// Q5
var concatenatedValue = "Hello" + 123;

// Q6
var firstString = "Hello";
var secondString = "World";
var concatenatedString = firstString + secondString;

// Chapter 9
// Q1
var firstName = prompt("Enter first name");

// Q2
var country = prompt("Country?", "China");

// Q3
var yourName = prompt("Enter Your Name");

// Q4
var userInput = prompt("Please enter your favorite color:", "Blue");

// Q5
var firstVariable = "What's your favorite food?";
var secondVariable = "Pizza";
var userResponse = prompt(firstVariable, secondVariable);

// Q6
var userResponse = prompt("Please enter your age:", "25");
alert("Your age is: " + userResponse);

// CHAPTER 6-9

// Q1
var a = prompt ("Enter a number..")
document.write ( "Result:<br>The value of a is : "+ a+"<br>.......................................<br><br>The value of ++a is : "+ ++a+"<br>Now the value of a is: "+a+"<br><br>The value of a++ is : "+ a++ +"<br>Now the value of a is: "+a+"<br><br>The value of --a is : "+ --a+"<br>Now the value of a is: "+a+"<br><br>The value of a-- is : "+ a--+"<br>Now the value of a is: "+a+"<br><br>");

// Q2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

// --a; 1
// --a - --b; 1 - 0
// --a - --b + ++b + b--;  1 - 0 + 1 + 1


document.write ("a is "+a+"<br>b is "+b+"<br>result is "+result+"<br>");

// Q3
var userName = prompt("Enter your name sir..")
alert ("Hello " + userName)

// Q4
var userInput = +prompt("Enter a number")
document.write (userInput + " x 1 = "+(userInput * 1)+"<br>"+userInput + " x 2 = "+(userInput * 2)+"<br>"+userInput + " x 3 = "+(userInput * 3)+"<br>"+
userInput + " x 4 = "+(userInput * 4)+"<br>"+userInput + " x 5 = "+(userInput * 5)+"<br>"+
userInput + " x 6 = "+(userInput * 6)+"<br>"+userInput + " x 7 = "+(userInput * 7)+"<br>"+
userInput + " x 8 = "+(userInput * 8)+"<br>"+userInput + " x 9 = "+(userInput * 9)+"<br>"+
userInput + " x 10 = "+(userInput * 10))

// Q5
var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");
var obtainedMarks1 = prompt("Enter obtained marks for " + subject1 + ":");
var obtainedMarks2 = prompt("Enter obtained marks for " + subject2 + ":");
var obtainedMarks3 = prompt("Enter obtained marks for " + subject3 + ":");
var totalMarks = 300;
var totalMarksGained = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = totalMarks / totalMarksGained * 100;
var resultTable = "<table border='1'><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>";
 resultTable = "<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarksSubject1 + "</td></tr>";
      resultTable = "<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarksSubject2 + "</td></tr>";
      resultTable = "<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarksSubject3 + "</td></tr>";
      resultTable = "<tr><th>Total</th><th>" + (3 * totalMarksPerSubject) + "</th><th>" + totalMarks + "</th></tr>";
      resultTable = "<tr><th>Percentage</th><td colspan='2'>" + percentage.toFixed(2) + "%</td></tr></table>";

      alert (totalMarksGained)



