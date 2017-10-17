"use strict";
(function() {

// function isNumeric(number) {
//     return !isNaN(number);
// }
// console.log("start!")
// var usersNumber = prompt("enter a number");
// while (!isNumeric(usersNumber) || usersNumber === "") {
//     alert("hey, that's not a number");
//     usersNumber = prompt("enter a number: ");
// }
// console.log(parseInt(usersNumber) + 10);
// console.log("done!!");

// ****************************  example for a Do While Loop


// function isNumeric(number) {
//     return !isNaN(number);
// }
//
// console.log("start!")
// var usersNumber;
// do {
//     usersNumber = prompt("enter a number");
// }  while (!isNumeric(usersNumber) || usersNumber === "")
//
// console.log(parseInt(usersNumber) + 10);
// console.log("done!!");

// ****************************  example FOR LOOP (is same as while loop)
//     var i = 0;
//     console.log("this is a while loop");
//     while (i < 5) {
//         console.log(i);
//         i += 1;
//     }
//
//
//     console.log("this is a for loop which works the same than while loop");
//     for (var i = 0; i < 5; i += 1) {
//     console.log(i);
// }


// var n = 10;
// while (n >= 1) {
//     console.log(n);
//     n -= 1;  // n-- or --n
// }
// console.log("Blastoff!!!");

// for (var n = 10; n >=1; n -= 1) {
//     console.log(n);
// }
// console.log("Blastoff!!!");

// for (var i = 0; i < 100; i +=1) {
//     console.log(i);
//     if (i ===10) {
//         break;
//     }
// }

// for (var i = 0; i < 100; i +=1) {
//     if (i > 10 && i <90) {
//         continue;
//     }
//     console.log(i);
// }

// for (var i = 0; i < 100; i +=1) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }
// **********************************2nd Exercise loops ****************************
// var x = 2;
// var y = 1;
// while (y <=16) {
//     console.log(x);
//     x *= 2;
//     y += 1;
//
// }
// **********************************3rd Exercise loops ****************************
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;

do {

    console.log("you still have " + allCones + "to sell!!!");
} while (allCones <=100);
// function isNumeric(number) {
//     return !isNaN(number);
// }
//
// console.log("start!")
// var usersNumber;
// do {
//     usersNumber = prompt("enter a number");
// }  while (!isNumeric(usersNumber) || usersNumber === "")
//
// console.log(parseInt(usersNumber) + 10);
// console.log("done!!");

})();
