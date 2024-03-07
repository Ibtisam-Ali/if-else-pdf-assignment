// ===================if-else statement-conditions=============


// Q/no=01 Write a program to check whether the given input number is divisible by 3 or else show a message “Number is not divisible
// by 3”

// Ans no# 01
// var number = +prompt("Enter your number")
// if (number % 3 === 0) {
//     console.log("number is divisible by 3");
    
// }else {
//     console.log("number is not divisible by 3");
// }


// Q/NO-02  Write a program that checks whether the given input is an even number or an odd number

// Ans no -02
// var evenOdd = +prompt("Enter number")
// if (evenOdd % 2 == 0) {
//     console.log("this is even number");
// }else{
//     console.log("this is odd number");
// }

// Q/NO-03
// Ans no -03
// var age = +prompt("Enter Your age")
// if (age > 18) {
//     console.log("old enough");
// }else{
//     console.log("Too young");
// }

// Q/NO-4
//  Write a program that prompts the user for their name, and then displays a special greeting to that person if their name is the same as yours. If the name entered by the user is anything other than your name, your code should not produce any output.

// Ans no -04
//  var userName = prompt('Please Enter your Name!')

//  if (userName == "Ibtisam"){
//      console.log("Hello, Ibtisam! It's great to see you again!")
//  }else {
//      console.log(" ")

//     }

// Q/no-05
// 5. Write a program to check whether the given input number is
// divisible by 3 or not by using Switch Case statements. Show a
// message “Number is not divisible by 3” or “Number is divisible
// by 3”.

// Ans no -05
// var number = +prompt("Enter your number")
// if (number % 3 === 0) {
//     console.log("this number is divisible by 3");
// }else{
//     console.log("this number is not divisible by 3");
// }



// Q/no-06
// 6. Write a program that takes a character(number or string) in a
// variable & checks whether the given input is a number,
// uppercase letter or lower case letter. (Hint: ASCII codes:-
// A=65, Z=90, a=97, z=122)

// var valueType = prompt('Please Enter your Name!')

// if (valueType = uppercase){
//     console.log("Upercase");
// }


// Q/no-10
// 10. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give
// message “ Please enter your password”
// ii. Check if both passwords are same. If they are same,
// show message “Correct! The password you entered
// matches the original password”. Show “Incorrect
// password” otherwise.

// Ans no-10
// var password = prompt('enter your password')

// if (password === 'ibtisam') {
//     console.log('correct! The password you entered matches the original password');
// }else{
//     console.log('password is not match');
// }


// Q/no-11
// 11. Write a program that adds an else statement to the following
// script to display “You are not Fahad”
// var firstName = "Ali";
// if (firstName === "Fahad") {
//  document.write("Hello Fahad!");
// }

// Ans no-11
// var firstName = prompt('enter your name')
// if(firstName === 'fahad'){
//     console.log('Hello Fahad');
// }else{
//     console.log('you are not fahad');
// }



// Q/no-12
// This if/else statement does not work. Try to fix it:
//  var greeting;
//  var hour = 13;
//  if (hour < 18) {
//  greeting = "Good day";
//  else
//  greeting = "Good evening";
//  } 

// Ans no-12
// var greeting = prompt('Enter time')
// if (greeting < 18) {
//     console.log('good morning');
// }else{
//     console.log('good eveining');
// }


// Q/no-13
// 13. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// Ans no-13
// var num1 = +prompt("Write First Number");
// var num2 = +prompt("Write Second Number");

// if (num1 > num2){
//     console.log("Num1 Is Large Number");
// }else if (num1 == num2 ){
//     console.log("both numbers are equal");
// }else {
//     console.log("Num2 is large number");
// }

// Q/no-14
// 14. Write a program that takes input a number from user & state whether the number is positive, negative or zero

// Ans No-14
// var num = prompt('enter number')
// if (num > 0) {
//     console.log('number is positve');
// }else if (num < 0){
//     console.log('number is negative');
// }else{
//     console.log('number is zero');
// }


// Q/no-15
// 15. Ask the user what the current hour is. If the hour is between 6 and 9 a.m., tell the user, "B is served." If the hour is between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If the hour is between 5 and 8 p.m., tell the user, "It's dinner time." For any other hours, tell the user, "Sorry, you'll have to wait, or go get a snack." (Hint: Store the hour in 24 hours clock format i.e. 14 for 2pm , 15 for 3pm)


// Ans no-15
// var time = prompt('enter time')
// if(time >= 6 && time <= 9){
//     console.log('breakfast is served');
// }else if(time >= 11 && time <= 1){
//     console.log('time for lunch');
// }else if(time >= 5 && time <= 8){
//     console.log('its dinner time');
// }else{
//     console.log("Sorry, you'll have to wait, or go get a snack.");
// }


// Q/no-16
// 16. Write a program that stores value in a variable & tell whether the type of that variable is a "number", "string", "boolean" or “undefined”


// var num1 = "Ibtisam";
// var num2 = 5;
// var num3 = true;
// var user =     

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(typeof(num3));
// console.log(user);


// Q/NO-17
// write a programme that takes a character(i.e string of lenght 1) and returns true if it is vowels,false otherwise

// Ans no-17
// var vowels = +prompt('Enter alphabet')
// if (vowels === a || e || i || o || u) {
//     console.log('true');

    
// }else{
//     console.log(false);
// }
