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
//     Create a while loop that uses console.log() to create the output shown below.
// var x = 2;
// var y = 1;
// while (y <=16) {
//     console.log(x);
//     x *= 2;
//     y += 1;
//
// }
// **********************************3rd Exercise loops ****************************
//     An ice cream seller can't go home until she sells all of her cones.
// Write a JS program that generates a random number between 50 and 100
// representing the amount of cones to sell. Your code should generate numbers between 1 and 5,
// simulating the amount of cones being bought by her clients. Use a do-while loop
// to log to the console the amount of cones sold to each person.
// This is how you get the random numbers.
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
console.log("This is the number of cones you have to sell: " + allCones);
do {
    var conesBought = Math.floor(Math.random() * 5) + 1;
    if (conesBought > allCones) {
        console.log("sorry, I don't have enough cones");
        continue;
    }
    allCones = allCones - conesBought;
    console.log("this client bought " + conesBought + ".  You have " + allCones + " left to sell");
} while (allCones > 0);
console.log("yay!! you sold all the cones");


    // 5 cones sold...  // if there are enough cones
    //     Cannot sell you 6 cones I only have 3...  // If there are not enough cones
    //     Yay! I sold them all! // If there are no more cones

})();
