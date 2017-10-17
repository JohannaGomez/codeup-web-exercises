"use strict";
(function() {


// *****************************Break and Continue continue
//

// 2./ Prompt the user for an odd number between 1 and 50.
// Use a loop and a break statement to continue prompting the user if they enter invalid input.


// function isEven(input) {
//     return parseFloat(input) % 2 === 0;
// }
//
// function isOdd(input) {       // determine if a number is odd ...
//     // I can't even...
//     return !isEven(input);
// }
//
// function isNumeric(input) {      // determine if an input is a number
//     return !isNaN(input);
// }
//
// function isNegative(input) {     // determine if a number is negative
//     return input < 0;
// }
//
// function isPositive(input) {       // determine if a number is positive
//     return input > 0;
// }
//
//
// for (var i = 1; i <= 50; i += 1) {
//     var x = parseFloat(prompt("please type an odd number between 1 and 50"));
//     if (isNumeric(x) && isOdd(x) && isPositive(x)) {
//         console.log("Number to skip is: " + x);
//         break;
//     }
// }
//
//
//
// for (var i = 1; i < 50; i++) {
//     if (i === x) {
//         console.log("Yikes! Skipping number: " + x);
//         continue;
//     }
//     console.log('Here is an odd number: ' + i);
// }

//     Use a loop and the statement to output all the odd numbers between 1 and 50, except for the number the user entered.
// Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49
//
//
//********************************************** # Technical Interview Problem "FizzBuzz"
//
//     Output numbers from 1 to 100
//     If the number is divisible by 3, then output the string "Fizz" instead of that number.
//         If the number is divisible by 5, then output the string "Buzz" instead of that number.
//         If the number is divisible by both 3 and 5, then output the string "FizzBuzz"
//     Otherwise, output the number.
//
//         Output:
//     1
//     2
//     "Fizz"
//     4
//     "Buzz"
//     "Fizz"
//     7
//     8
//     "Fizz"
//     "Buzz"
//     11
//     "Fizz"
//     13
//     14
//     "FizzBuzz"
//     16
//     17....
//
// # Problem solving tips for thinking about process!
//         If you need to represent ANY number or a string or ANY value, you're gonna have a variable
//
//     If yo have to do something over and over again... -> chances are good you're gonna loop
//
//     If every time through a loop, we have to do some other thing over and over, maybe there's an inner loop
//
//     If you see the world "if" in the instructions, you're gonna have a conditional
//
//     If you have a line of code that does something (generates a random number between 1 and 5),
// you're gonna need a variable to hang on to that number
//
//     If your code needs to make a decision, you're gonna need a conditional or a function that has a conditional inside of it

    // for (var x = 1; x <=16; x += 1) {
    //     if(x % 3 === 0) {
    //         console.log("fizz");
    //     } else if (x % 5 === 0) {
    //         console.log("buzz");
    //     } else if ((x % 3 === 0)  &&  (x % 5 === 0)) {
    //         console.log("fizzBuzz");
    //     }
    //     console.log(x);
    // }

    for (var x = 1; x <=100; x += 1) {
        if ((x % 3 === 0)  &&  (x % 5 === 0)) {
            console.log("fizzBuzz");
            continue;
        }
        if(x % 3 === 0) {
            console.log("fizz");
            continue;
        }
        if (x % 5 === 0) {
            console.log("buzz");
            continue;
        }
        console.log(x);
    }


})();