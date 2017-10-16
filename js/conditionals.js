"use strict";
(function () {


    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is (I can use parseFloat(number) + 100 in the console.log instead of creating a new variable like plusOneHundred
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
    //  */
    // var wantAnumber = confirm("would you like to enter a number??");
    // if (wantAnumber) {
    //     var yourNumber = prompt("type your number here!!!!");
    //     if (isNaN(yourNumber)) {
    //         alert("this is not a number!!!!");
    //     } else {
    //         if (yourNumber%2 == 0) {
    //             alert("your number is even!!");
    //         } else {
    //             alert("your number is odd!!");
    //         }
    //         var plusOneHundred = yourNumber +++ 100;
    //         alert("your number plus 100 is: " + plusOneHundred);
    //         if (yourNumber < 0) {
    //             alert("your number is negative");
    //         } else if (yourNumber > 0) {
    //             alert("your number is positive");
    //         } else {
    //             alert("your number is cero!");
    //         }
    //     }
    // } else {
    //     alert("you clicked on cancel!!");
    // }
// ********************************************* pao's note:  please check this and refactor properly *********************'
//     if (wantAnumber) {
//         var yourNumber = prompt("type your number here!!!!");
//         if (isNaN(yourNumber)) {
//             alert("this is not a number!!!!");
//         } else {
//             if (yourNumber%2 == 0) {
//                 alert("your number is even!!");
//             } else {
//                 alert("your number is odd!!");
//             }
//             var plusOneHundred = yourNumber +++ 100;
//             alert("your number plus 100 is: " + plusOneHundred);
//             if (yourNumber < 0) {
//                 alert("your number is negative");
//             } else if (yourNumber > 0) {
//                 alert("your number is positive");
//             } else {
//                 alert("your number is cero!");
//             }
//         }
//         } else {
//             alert("you clicked on cancel!!");
//         }
//
//     function isNumeric(x) {
//         return !isNaN(x);
//     }
//
//     function isNegative(x) {
//         return x < 0;
//     }
//
//     function isPositive(x) {
//         return x > 0;
//     }
//
//     function isEven(x) {
//         return parseFloat(x) % 2 === 0;
//     }
//     function isOdd() {
//         return !isEven(x);
//     }


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


// function analyzeColor(strColorName) {
//     if (strColorName === "red") {
//         //console.log("Blood is red");
//         return "blood is red";
//     } else if (strColorName === "orange") {
//         // console.log("Mandarines are orange");
//         return "Mandarines are orange";
//     } else if (strColorName === "yellow") {
//         // console.log("Bananas are yellow");
//         return "Bananas are yellow";
//     } else if (strColorName === "green") {
//         // console.log("Broccoli is green");
//         return "Broccoli is green";
//     } else if (strColorName === "blue") {
//         // console.log("Sky is blue");
//         return "Sky is blue";
//     } else if (strColorName === "indigo") {
//         // console.log("I don't know what indigo color is!!");
//         return "I don't know what indigo color is!!";
//     } else {
//         // console.log("Barney is violet");
//         return "Barney is violet";
//     }
// }
// console.log(analyzeColor("orange"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */



// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// var strColorName = randomColor
// switch (randomColor) {
//     case "red":
//         console.log("Blood is red - switch");
//         break;
//     case "orange":
//         console.log("Mandarines are orange - switch");
//         break;
//     case "yellow":
//         console.log("Bananas are yellow - switch");
//         break;
//     case "green":
//         console.log("Broccoli is green - switch");
//         break;
//     case "blue":
//         console.log("Sky is blue - switch");
//         break;
//     case "indigo":
//         console.log("I don't know what indigo color is!! - switch");
//         break;
//     default:
//         console.log("Barney is violet - switch");
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var inputFromUser = prompt("pick a color in between red, orange, yellow, green, blue, indigo, violet");
// alert("the color you pick is: "+ analyzeColor(inputFromUser));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5.(done)
 * If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `caculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.

 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
//  */
// var random = Math.floor((Math.random() * 5) + 0);
// alert("your lucky number is: " + random);
// function calculateTotal(randomLuckyNumb, total) {
//     if (randomLuckyNumb === 0) {
//         return "no discount";
//     } else if (randomLuckyNumb === 1) {
//         var totalDisc = 0.10 * total;
//         return totalDisc;
//     } else if (randomLuckyNumb === 2) {
//         var totalDisc = 0.25 * total;
//         return totalDisc;
//     } else if (randomLuckyNumb === 3) {
//         var totalDisc = 0.35 * total;
//         return totalDisc;
//     } else if (randomLuckyNumb === 4) {
//         var totalDisc = 0.50 * total;
//         return totalDisc;
//     } else if (randomLuckyNumb === 5) {
//         return "your purchase is free!!!!";
//     }
//
// }
//
// console.log(calculateTotal(random, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = prompt('type your total bill is??');
var totalDisc = 0;
function calculateTotal(randomLuckyNumb, total) {
    var totalDisc;
    if (randomLuckyNumb === 0) {
        totalDisc = 0;
    } else if (randomLuckyNumb === 1) {
        totalDisc = 0.10 * total;
    } else if (randomLuckyNumb === 2) {
        totalDisc = 0.25 * total;
    } else if (randomLuckyNumb === 3) {
        totalDisc = 0.35 * total;
    } else if (randomLuckyNumb === 4) {
        totalDisc = 0.50 * total;
    } else if (randomLuckyNumb === 5) {
        totalDisc = total;
    }
    return totalDisc;
}
totalDisc = calculateTotal(luckyNumber, totalBill);
alert("your lucky number is:" + luckyNumber);
alert("your price before discount is: " + totalBill);
var finalTotal = totalBill - totalDisc;
alert("your price after discount is:" + finalTotal );



// ================================= 10/16/17 CONDITIONALS BONUSES =====================================================
//
//     Bonus 1
//
//     Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
//     - Catch any invalid inputs.
//     - Write the logic using if/else ifs and then refactor using a switch case
//
//         Bonus 2
//
//     Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
//     - use an if/else
//     - refactor to use a ternary operator
//
//     Bonus 3
//
//     Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
//     - account for any invalid user input
//     - case of input should not matter
//     // - accept both abbreviations and full names of the months
//
// ***********************************  10/16/17               GOLD STAR BONUS   ***************************************
//
//     Create a distance unit conversion application.
//         Prompt the user for a unit of measurement.
//         Prompt the user for a value.
//
//         Prompt the user for a second unit of measurement to convert to.
//
//         Define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
//     then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
//
//     Use these conversion functions to make the correct unit conversion
//
//     Potentially, you will need a large switch case to account for the possible unit conversion combinations,
//         i.e. what conversion functions will need to be called in and in what order.
//
//         DOUBLE GOLD STAR BONUS
//
//         Allow unit conversion to metric system units

}) ()