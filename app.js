//  Chapter # 01

/*  1. Write a script to greet your website visitor using JS alert box.
 
 alert("Hello, Welcome to my website!");
 */

/* 2. Write a script to display following message on your web page:
 
 alert("Error! Please enter a valid password");
 */

/* 3. Write a script to display following message on your web page: (Hint : Use line break)

 alert("Welcome to JS Land..." + "\n" + "Happy Coding");
 */

/*  4. Write a script to display following messages in sequence:

alert("Welcome to JS Land...");
alert("Happy Coding!");
 */

/* 5. Generate the following message through browser’s developer console:

console.log(alert("Hello... I can run JS through my web browser's console")); 
 */

/*  6. Make use of alerts in your new/existing HTML & CSS project.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment 5</title>
</head>
<body onload="showAlert()">
    <script>
        function showAlert() {
          alert ("Hello world!");
        }
    </script>
</body>
</html> */

/* 7. Practice placement of <script></script> element in following sections of your project in exercise 6:
a. Head
b. Body (before your page’s HTML)
c. Body (inside your page’s HTML)
d. Body (after your page’s HTML)

// a.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment 5</title>
    <script>
        function showAlert() {
          alert ("Hello world!");
        }
    </script>
</head>
<body onload="showAlert()">
    
</body>
</html> */

// b, c, d.

/* 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment 5</title>
</head>
<body onload="showAlert()">
     <script>
        function showAlert() {
          alert ("Hello world!");
        }
    </script>
</body>
</html> */

// Chapter # 02

/* 1. Declare a variable called username.

 var username;
 */

/*  2. Declare a variable called myName & assign to it a string that represents your Full Name.

var myName = "Hassan Ahmed";
 */

/* 3. Write script to
a) Declare a JS variable, titled message.
b) Assign “Hello World” to variable message
c) Display the message in alert box. 
 
// a)
var titledMessage;

// b)
titledMessage = "Hello, World!";
 
// c)
alert(titledMessage);
*/

/* 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

var name = "Jhone Doe";
var age = 15;
var course = "Certified Mobile Applocation Development";
alert(name);
alert(age + " years old");
alert(course);
*/

/* 5. Write a script to display the following alert using one JS variable: 

var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);
*/

/* 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation) 

var email = "hassanahmed5022@gmail.com";
alert("My email address is " + email);
*/

/* 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following
message in an alert box: 

var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);
*/

/* 8. Write a script to display this in browser through JS

 document.write("Yah! I can write HTML content through JavaScript");
*/

/* 9. Store following string in a variable and show in alert and
browser through JS
“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” 

var str = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
document.write(str);
alert(str);
*/

// Chapter # 03

/* 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

 var age = 21;
 alert("I am " + age + " years old");
*/

 /* 2. Declare & initialize a variable to keep track of how many
times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: “You
have visited this site N times”.
 */
 
 /* 3. Declare a variable called birthYear & assign to it your
 birth year. Show the following message in your browser:
 
 var birthYear;
 birthYear = 1999;
 alert("My birth year is " + birthYear + "\n" + "Data type of my declared variable is " + typeof(birthYear));

 */

 /* 4. A visitor visits an online clothing store
www.xyzClothing.com . Write a script to store in variables the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to order
Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

 var visitorName = "Doe"; 
 var productTitle = "T-shirts";
 var quanitiy = 5;
 document.write(visitorName + " ordered " + quanitiy + " " + productTitle + " on XYZ Clothing store.");
 */

 // Chapter # 04

 /* 1. Declare 3 variables in one statement.

 var var1 , var2, var3;
 */

 /* 2. Declare 5 legal & 5 illegal variable names.

 var name, $fname, age, _address, city;
 var .name, -fname, 2age, addres's, ,city;
 */

 /* 3. Display this in your browser
a) A heading stating “Rules for naming JS variables”
b) Variable names can only contain ______, ______,
______ and ______.
For example $my_1stVariable
c) Variables must begin with a ______, ______ or
_____. For example $name, _name or name
d) Variable names are case _________
e) Variable names should not be JS _________

 // a)
 document.write("<h1>Rules for naming JS variables</h1>");
 // b)
 document.write("Variable names can only contain numbers, $ and _. For example $my_1stVariable <br>");
 // c)
 document.write("Variables must begin with a letter, $ or _. For example $name, _name or name <br>");
 // d)
 document.write("Variable names are case sensitive <br>");
 // e)
 document.write("Variable names should not be JS keyword <br>");
 */

 // Chapter # 05

 /* 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser. 

 var num1, num2, sum;
 num1 = +prompt("Enter number 1:");
 num2 = +prompt("Enter number 2:");
 sum = num1+num2;
 document.write("Sum of " + num1 + " and " + num2 + " is " + sum);
 */

 /* 2. Repeat task1 for subtraction, multiplication, division & modulus.

 var num1, num2, dif;
 num1 = +prompt("Enter number 1:");
 num2 = +prompt("Enter number 2:");
 dif = num1-num2;
 document.write("Difference of " + num1 + " and " + num2 + " is " + dif);

 var num1, num2, mul;
 num1 = +prompt("Enter number 1:");
 num2 = +prompt("Enter number 2:");
 mul = num1*num2;
 document.write("Product of " + num1 + " and " + num2 + " is " + mul); 

 var num1, num2, div;
 num1 = +prompt("Enter number 1:");
 num2 = +prompt("Enter number 2:");
 div = num1 / num2;
 document.write("Division of " + num1 + " and " + num2 + " is " + div);

 var num1, num2, mod;
 num1 = +prompt("Enter number 1:");
 num2 = +prompt("Enter number 2:");
 mod = num1 % num2;
 document.write("Modulus of " + num1 + " and " + num2 + " is " + mod);
*/

// Task 3

/* 
 var num;
 document.write("Value after variable declation is: " + num + "<br>");
 num = 5;
 document.write("Initial value is: " + num + "<br>");
 num++;
 document.write("Value after increment is: " + num + "<br>");
 num += 7;
 document.write("Value after addition is: " + num + "<br>");
 num--;
 document.write("Value after decrement is: " + num + "<br>");
 num %= 3;
 document.write("The remainder is: " + num); 
 */

 // Task 4
 
 /* 
 var ticketCost = 600, quantity = 5;
 var totalCost = ticketCost * quantity;
 document.write("Total cost to buy " + quantity + " tickets to a movie is " + totalCost + "PKR");
 */

 // Task 5

/*  var num = +prompt("Enter number:");

 document.write("Table of " + num + "<br>");
 for (let index = 1; index <= 10; index++) {
     document.write(num + " x " + index + " = " + num*index + "<br>");
 } */

 // Task 6

/*  var celcius = 25;
 var fahrenheit = (celcius * 9 / 5) + 32;
 document.write(celcius + "&degC is " + fahrenheit + "&degF <br>");

 var fahrenheit = 70;
 var celcius = (fahrenheit - 32) * 5 / 9;
 document.write(fahrenheit + "&degF is " + celcius + "&degC"); */

 // Task 7

/*  document.write("<h1>Shopping Cart</h1>");
 var item_1st_price = 650;
 var quanitiy_1st_item = 3;
 var item_2nd_price = 100;
 var quanitiy_2nd_item = 7;
 var shippingCharges = 100;
 var totalCost = (item_1st_price * quanitiy_1st_item) + (item_2nd_price * quanitiy_2nd_item) + shippingCharges;
 document.write("Total cost of your order is " + totalCost); 
 */

 // Task 8

 /* var totalMarks = 1100, marksObtained = 870;
 var per = (marksObtained / totalMarks) * 100;
 document.write("<h1>Marks Sheet</h1>");
 document.write(totalMarks + "<br>");
 document.write(marksObtained + "<br>");
 document.write("Percentage " + per + "%");
  */

 // Task 9

 /* var dollars = 10, riyals = 25;
 var rupees = (dollars * 104.80) + (riyals * 28);
 document.write("<h1>Currency in PKR</h1>");
 document.write("Total Currency in PKR: " + rupees);
 */

 // Task 10

 /* var num = 5;
 num = ((num + 5) * 10) / 2;
 */
 
 // Task 11

 /* var currentYear = 2020, birthYear = 1999;
 var age = currentYear - birthYear;
 document.write("<h1>Age Calculator</h1>");
 document.write("Current Year " + currentYear + "<br>");
 document.write("Birth Year " + birthYear + "<br>");
 document.write("Your Age " + age);
 */

 // Task 12

/* 
 var radius = 20;
 var circumference = 2 * Math.PI * radius;
 var area = Math.PI * Math.pow(radius, 2);
 document.write("<h1>The Geametrizer</h1>");
 document.write("Radius of a circle: " + radius + "<br>");
 document.write("The circumference is: " + circumference + "<br>");
 document.write("The area is: " + area); 
 */

 // Task 13

 /* 
 var snack = "chocolate chip", curAge = 21, amount = 3, maxAge = 65;
 var total = (maxAge - curAge) * amount;
 document.write("<h1>The Life Time Supply Calculator</h1>");
 document.write("You will need " + total + " " + snack + " to last you until the ripe old age of " + maxAge); 
 */

 // Chapters 6-9

 // Task 1

 /*
 var a = 10;
 document.write("Result:<br>");
 document.write("The value of a is: " + a + "<br>");
 document.write("..................................<br>");
 document.write("<br>The value of ++a is: " + (++a) + "<br>");
 document.write("Now the value of a is: " + a + "<br><br>");
 document.write("<br>The value of a++ is: " + (a++) + "<br>");
 document.write("Now the value of a is: " + a + "<br><br>");
 document.write("<br>The value of --a is: " + (--a) + "<br>");
 document.write("Now the value of a is: " + a + "<br><br>");
 document.write("<br>The value of a-- is: " + (a--) + "<br>");
 document.write("Now the value of a is: " + a); 
 */

 // Task 2

 /* 
 var a = 2, b = 1;
 var result = --a - --b + ++b + b--;
 document.write("a is: " + a + "<br>" + "b is: " + b + "<br>" + "result is: " + result + "<br>");
 document.write(--a + "<br>");
 document.write(--a - --b + "<br>");
 document.write(--a - --b + ++b + "<br>");
 document.write(--a - --b + ++b + b--);
 */

 // Task 3

 /* 
 var name = prompt("Enter your name:");
 document.write("Hello, " + name + " Welcome to my website!");
 */

 // Task 4

 /* 
 var num = prompt("Enter number:");
 if (num === "" ) {
     num = "5";
 }
 num = parseInt(num);
 document.write("Table of " + num + "<br>");
 for (let index = 1; index <= 10; index++) {
     document.write(num + " x " + index + " = " + num * index + "<br>");
 }
 */

 // Task 5

 /* 
 var sub1, sub2, sub3;
 sub1 = prompt("Enter 1st subject name:");
 sub2 = prompt("Enter 2nd subject name:");
 sub3 = prompt("Enter 3rd subject name:");
 var sub1Total = 100, sub2Total = 100, sub3Total = 100;
 var obtSub1, obtSub2, obtSub3;
 obtSub1 = +prompt("Enter 1st subject obtained marks:");
 obtSub2 = +prompt("Enter 2nd subject obtained marks:");
 obtSub3 = +prompt("Enter 3rd subject obtained marks:");
 var totalMarks = sub1Total + sub2Total + sub3Total;
 var totalMarksObt = obtSub1 + obtSub2 + obtSub3;
 var per1 = (obtSub1 / sub1Total) * 100;
 var per2 = (obtSub2 / sub2Total) * 100;
 var per3 = (obtSub3 / sub3Total) * 100;
 var per = (totalMarksObt / totalMarks) * 100;
 document.write("<table cellspacing = '0'>");
 document.write("<tr>");
 document.write("<th>" + "Subject" + "</th>");
 document.write("<th>" + "Total Marks" + "</th>");
 document.write("<th>" + "Obtained Marks" + "</th>");
 document.write("<th>" + "Percentage" + "</th>");
 document.write("</tr>");
 document.write("<tr>");
 document.write("<td>" + sub1 + "</td>");
 document.write("<td>" + sub1Total + "</td>");
 document.write("<td>" + obtSub1 + "</td>");
 document.write("<td>" + per1 + "%" + "</td>");
 document.write("</tr>");
 document.write("<tr>");
 document.write("<td>" + sub2 + "</td>");
 document.write("<td>" + sub2Total + "</td>");
 document.write("<td>" + obtSub2 + "</td>");
 document.write("<td>" + per2 + "%" + "</td>");
 document.write("</tr>");
 document.write("<tr>");
 document.write("<td>" + sub3 + "</td>");
 document.write("<td>" + sub3Total + "</td>");
 document.write("<td>" + obtSub3 + "</td>");
 document.write("<td>" + per3 + "%" + "</td>");
 document.write("</tr>");
 document.write("<tr>");
 document.write("<td>" + "</td>");
 document.write("<th>" + totalMarks + "</th>");
 document.write("<th>" + totalMarksObt + "</th>");
 document.write("<th>" + per + "%" + "</th>");
 document.write("</tr>");
 document.write("</table>");
 */

 // Chapter 9-11

 // Task 1

 /* 
 var cityName = prompt("Enter your city name:");
 cityName = cityName.toLowerCase();
 if (cityName === "karachi") {
     document.write("Welcome to city of lights");
 } 
 */

 // Task 2

 /* 
 var gender = prompt("Enter your gender:");
 gender = gender.toLowerCase();
 if (gender === "male") {
     document.write("Good Morning Sir.");
 }else if (gender === "female") {
     document.write("Good Morning Ma'am.");
 }
 */

 // Task 3

/*  var color = prompt("Enter color of road traffic signal:");
 color = color.toLowerCase();
 if (color === "red") {
     document.write("Must Stop");
 } else if(color === "yellow") {
    document.write("Ready to move");
 } else if (color === "green"){
    document.write("Move now");
 }
 */
 // Task 4

 /* 
 var fuel = +prompt("Enter remaining fuel in car:");
 if (fuel < 0.25) {
     document.write("Please refill the fuel in your car");
 }
 */ 

 // Task 5

 /* 
 // a.
 var a = 4;
 if (++a === 5){
 alert("given condition for variable a is true");
 }

 // b. 
 var b = 82;
 if (b++ === 83){
 alert("given condition for variable b is true");
 }

 // c. 
 var c = 12;
 if (c++ === 13){
 alert("condition 1 is true");
 }
 if (c === 13){
 alert("condition 2 is true");
 }
 if (++c < 14){
 alert("condition 3 is true");
 }
 if(c === 14){
 alert("condition 4 is true");
 }

 // d. 
 var materialCost = 20000;
 var laborCost = 2000;
 var totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost){
 alert("The cost equals");
 }

 // e.
  if (true){
 alert("True");
 }
 if (false){
 alert("False");
 }
 
 // f.
 if("car" < "cat"){ 
 alert("car is smaller than cat");
 }
 */ 

 // Task 6

 /* 
 var sub1, sub2, sub3, remarks = "", grade = "";
 var sub1Total = 100, sub2Total = 100, sub3Total = 100;
 var obtSub1, obtSub2, obtSub3;
 obtSub1 = +prompt("Enter 1st subject obtained marks:");
 obtSub2 = +prompt("Enter 2nd subject obtained marks:");
 obtSub3 = +prompt("Enter 3rd subject obtained marks:");
 var totalMarks = sub1Total + sub2Total + sub3Total;
 var totalMarksObt = obtSub1 + obtSub2 + obtSub3;
 var per = (totalMarksObt / totalMarks) * 100;
 if (per >= 80){
     grade = "A-one";
     remarks = "Excellent";
 }else if(per < 80 && per >= 70){
    grade = "A";
    remarks = "Good";
 }else if(per < 70 && per >= 60){
    grade = "B";
    remarks = "You need improve";
 }else if(per < 60){
    grade = "Fail";
    remarks = "Sorry";
 }
 document.write("<h1>Marks Sheet</h1>");
 document.write("Total marks : " + totalMarks + "<br>");
 document.write("Marks obtained : " + totalMarksObt + "<br>");
 document.write("Percentage : " + per + "%" + "<br>");
 document.write("Grade : " + grade + "<br>");
 document.write("Remarks : " + remarks);
 */

 // Task 7

/* 
 var secretNum = 6;
 var num = +prompt("Please guess the secret number:");
 if (num === secretNum) {
     document.write("Bingo! Correct answer.")
 }else if((num + 1) === secretNum){
     document.write("Close enough to the correct answer.");
 } 
 */

 // Task 8

/* 
 var num = +prompt("Enter a number:");
 if (num % 3 == 0) {
     document.write(num + " is divisible by 3");
 }
 */

 // Task 9

 /* 
 var num = +prompt("Enter a number:");
 if (num % 2 == 0) {
     document.write(num + " is an even number");
 }else if(num % 2 != 0) {
    document.write(num + " is not an even number");
 }
 */

 // Task 10

 /* 
 var temp = +prompt("Enter temperature:");
 if (temp > 40) {
     document.write("It is too hot outside.");
 }else if (temp > 30) {
    document.write("The Weather today is Normal.");
 }else if (temp > 20) {
    document.write("Today’s Weather is cool.");
 }else if (temp > 10) {
    document.write("OMG! Today’s weather is so Cool.");
 }
 */ 

 // Task 11

 /* 
 var num1 = +prompt("Enter first number:");
 var oper = prompt("Enter operation:");
 var num2 = +prompt("Enter second number:");
 var result = num1 + num2;
 var flag = 0;
 if (oper === "+") {
     result = num1 + num2;
 } else if(oper === "-") {
    result = num1 - num2;
 } else if(oper === "*") {
    result = num1 * num2;
 } else if(oper === "/") {
    result = num1 / num2;
 } else if(oper === "%") {
    result = num1 % num2;
 }else{
     document.write("Please enter valid operation!");
     flag = 1;
 }
 if(flag == 0)
    document.write(num1 + " " + oper + " " + num2 + " = " + result);
 */

 // Chapter 12-13

 // Task 1

 /* 
 var char = prompt("Enter a single character:").charAt(0);
 if (char >= '0' && char <= '9') {
    document.write(char + ' is a number'); 
 }else if (char.charCodeAt() >= '65' && char.charCodeAt() <= '90') {
    document.write(char + ' is an uppercase character');
 }else if (char.charCodeAt() >= '97' && char.charCodeAt() <= '122'){
    document.write(char + ' is a lowercase character');
 }else{
     document.write("Invalid entry!");
 }
 */

 // Task 2

 /* 
 var num1 = +prompt("Enter 1st number: ");
 var num2 = +prompt("Enter 2nd number:");
 if (num1 > num2) {
     document.write(num1 + " is larger than " + num2);
 }else if(num1 == num2){
    document.write(num1 + " is equal to " + num2);
 }else if(num1 < num2){
    document.write(num2 + " is larger than " + num1);
 } 
 */

 // Task 3

 /* 
 var num = +prompt("Enter a number:");
 if (num === 0) {
     document.write(num + " is equal to " + num);
 }else if (num < 0) {
    document.write(num + " is negative");
 }else if (num > 0) {
    document.write(num + " is positive");
 } 
 */

 // Task 4

 /* 
 var char = prompt("Enter a single character:").charAt(0);
 if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
     document.write(char + " is a vowel");   
 }else if (char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
    document.write(char + " is a vowel");
 }else{
    document.write(char + " is not a vowel");
 } 
 */

 // Task 5

 /* 
 var corrpass = "abc12345";
 var password = prompt("Please enter your password:");
 if (password === corrpass) {
     document.write("Correct! The password you entered matches the original password");
 } else if(password === ""){
     document.write("Please enter your password");
 }else{
     document.write("Incorrect password!");
 }
 */ 

 // Task 6

 /* 
 var greeting;
 var hour = 13;
 if (hour < 18) {
    greeting = "Good day";
 }else{
    greeting = "Good evening";
 }

 */ 

 // Task 7

 /* 
 var time = +prompt("Enter time in 24 hours clock format like: 1900 = 7pm:");
 if(time >= 0000 && time < 1200){
     document.write("Good morning!");
 }else if(time >= 1200 && time < 1700){
    document.write("Dood afternoon!");
 }else if(time >= 1700 && time < 2100){
    document.write("Dood evening!");
 }else if(time >= 2100 && time < 2359){
    document.write("Dood night!");
 }else{
     document.write("Invalid entry!");
 }
 */

 // Chapter 14-16

 // Task 1

 // var studentNames = [];

 // Task 2

 // var studentNames = new Array();

 // Task 3

 // var str = ["HTML", "CSS", "Bootstrap"];
 
 // Task 4

 // var num = [1, 3, 4, 9, 10];

 // Task 5

 // var bool = [true, false];

 // Task 6

 // var mixArr = [1, "abc", true, 'd', 5.3];

 // Task 7

 /* 
 var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
 document.write("<h1>Qualifications:</h1>");
 for (let index = 0; index < qualification.length; index++) {
     document.write((index + 1) + ") " + qualification[index] + "<br>");
 }
 */

 // Task 8

 /* 
 var stdName = ["Hassan", "Hamza", "Anas"];
 var stdScore = [320, 230, 480];
 var total = 500;
 var per = [(stdScore[0] / total) * 100, (stdScore[1] / total) * 100, (stdScore[2] / total) * 100];
 for (let index = 0; index < 3; index++) {
    document.write("Score of " + stdName[index] + " is " + stdScore[index] + ". Percentage: " + per[index] + "% <br>");
 } 
 */

 // Task 9

 /* 
 var colorArray = ["pink ", "blue ", "black"];
 document.write(colorArray + "<br>");
 var addColorFirst = prompt("Enter color name to add in the beggining of the array:");
 colorArray.unshift(addColorFirst);
 document.write(colorArray + "<br>");
 var addColorLast = prompt("Enter color name to add in the last of the array:");
 colorArray.push(addColorLast);
 document.write(colorArray + "<br>");
 colorArray.unshift("purple", "brown");
 document.write(colorArray + "<br>");
 colorArray.shift();
 document.write(colorArray + "<br>");
 colorArray.pop();
 document.write(colorArray + "<br>");
 var colorIndex = +prompt("Enter index number at which you want add color name:");
 var colorName = prompt("Enter color name:");
 colorArray.splice(colorIndex, 0, colorName);
 document.write(colorArray + "<br>");
 var delIndex = +prompt("Enter index number at which you want remove color name:");
 var delCount = +prompt("How many element to delete:");
 colorArray.splice(delIndex, delCount);
 document.write(colorArray);
 */

 // Task 10

 /* 
 var stdScore = [320, 230, 480, 120];
 document.write("scores of Students: " + stdScore + "<br>");
 stdScore.sort();
 document.write("Ordered scores of Students: " + stdScore + "<br>");
 */

 // Taskt 11

 /* 
 var cityNames = ["Karachi", "Lahore", "Peshawar", "Islamabad", "Quetta"];
 document.write("Cities list: " + "<br>");
 document.write(cityNames + "<br>");
 var selectedCities = cityNames.slice(0, 3);
 document.write("<br>Selected cities list: <br>" + selectedCities);
 */

 // Task 12

 /* 
 var arr = ["This "," is ", " my ", " cat"];
 document.write("Array: <br>");
 document.write(arr + "<br>");
 document.write("String:<br>");
 var str = arr.join(" ");
 document.write(str);
 */

 // Task 13

 /* 
 var arr = ["keyboard ", "mouse ", "printer ", "monitor"];
 document.write("Devices: <br>");
 document.write(arr + "<br><br>");
 for (let index = 0; index < arr.length; index++) {
    document.write("Out: <br>");
    document.write(arr[index] + "<br>");
 }
 */

 // Task 14

 /* 
 var arr = ["keyboard ", "mouse ", "printer ", "monitor"];
 document.write("Devices: <br>");
 document.write(arr + "<br><br>");
 for (let index = arr.length - 1; index >=0; index--) {
    document.write("Out: <br>");
    document.write(arr[index] + "<br>");
 } 
 */

 // Task 15
 
 /* 
 var arr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
 document.write("<select>");
 document.write("<option>" + "Phone Manufactures" + "</option>");
 for (let index = 0; index < arr.length; index++) {
    document.write("<option>" + arr[index] + "</option>");
 }
 document.write("</select>");
 */

 // Chapter 17-20

 // Task 1

 // var arr = [[],[]];

 // Task 2

 /* 
 var arr = [
     [0, 1, 2, 3], 
     [1, 0, 1, 2], 
     [2, 1, 0, 1]
    ];
 for (let i = 0; i < arr.length; i++) {
     for (let j = 0; j < arr[i].length; j++) {
         document.write(arr[i][j] + " ");
     }   
     document.write("<br>");
 }
 */

 // Task 3

 /* 
 for (let index = 1; index <= 10; index++) {
     document.write(index + "<br>");
 }
 */

 // Task 4

 /* 
 var num = +prompt("Enter nummber:");
 var len = +prompt("Enter lenth:");
 document.write("Multiplicatoion table of: " + num +  "<br>");
 document.write("Length: " + len + "<br><br>");
 for (let index = 1; index <= len; index++) {
    document.write(num + " x " + index + " = " + num * index + "<br>");
 }
 */

 // Task 5

 /* 
 var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

 for (let index = 0; index < fruits.length; index++) {
     document.write("Elements at index " + index + " is " + fruits[index] + "<br>");
 }
 */

 // Task 6

 /*
 // a)
 document.write("Counting:<br><br>");
 for (let index = 1; index < 16; index++) {
     document.write(index + " ,");   
 }
 // b)
 document.write("<br><br>Reverse counting:<br><br>");
 for (let index = 10; index > 0; index--) {
     document.write(index + " ,");   
 }
 // c)
 document.write("<br><br>Even:<br><br>");
 for (let index = 0; index <= 20; index += 2) {
     document.write(index + " ,");   
 }
 // d)
 document.write("<br><br>Odd:<br><br>");
 for (let index = 1; index < 20; index += 2) {
     document.write(index + " ,");   
 }
 // e)
 document.write("<br><br>Series:<br><br>");
 for (let index = 2; index <= 20; index += 2) {
     document.write(index + "k ,");   
 }
 */

 // Task 7

 /* 
 var A = ["cake", "apple pie", "cookie", "chips", "patties"];
 var item = prompt("Welcome to abc bakery. What do you want to order ?");
 var flag = 0;
 for (let index = 0; index < A.length; index++) {
     if (item === A[index]) {
         document.write(A[index] + " is available at index " + index + " in our bakery");
         flag = 1;
         break;
     }
 }
 if (flag ===  0) {
     document.write("We are sorry. " + item + " is not available in our bakery");
 }
 */

 // Task 8 

 /* 
 var A = [24, 53, 78, 91, 12];
 var largest = A[0];
 document.write("Array items: " + A + "<br>");
 for (let index = 0; index < A.length; index++) {
     if (largest < A[index]) {
         largest = A[index];
     }
 }
 document.write("The largest number is " + largest);
 */

 // Task 9

 /* 
 var A = [24, 53, 78, 91, 12];
 var smallest = A[0];
 document.write("Array items: " + A + "<br>");
 for (let index = 0; index < A.length; index++) {
     if (smallest > A[index]) {
         smallest = A[index];
     }
 }
 document.write("The smallest number is " + smallest);
 */

 // Task 10

 /* 
 for (let index = 5; index <= 100; index += 5) {
     document.write(index + " ,");
 } 
 */
