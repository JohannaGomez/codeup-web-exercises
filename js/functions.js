(function () {


"use strict";
//
// /**
//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
//  *
//  * Example
//  *  > sayHello("codeup") // returns "Hello, codeup!"
//  */
//
// function sayHello(name) {
//     return "hello " + name + "!!";
// }
// console.log(sayHello("codeup"));
//
//
// /**
//  * TODO:
//  * Call the function 'sayHello' and pass your name as a string literal argument.
//  * Store the result of the function call in a variable named 'helloMessage'.
//  *
//  * console.log 'helloMessage' to check your work
//  */
//
// var helloMessage = sayHello("Pao");
// console.log(helloMessage);
//
//
//
//
// /**
//  * TODO:
//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.
//  */
// var myName = "Pao";
// // sayHello(myName);
// console.log(sayHello(myName));
//
//
//
//
//
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
// var random = Math.floor((Math.random() * 3) + 1);
// console.log("the random number is " + random);
//
// /**
//  * TODO:
//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.
//  *
//  * Example
//  *  > isTwo(1) // returns false
//  *  > isTwo(2) // returns true
//  *  > isTwo(3) // returns false
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.
//  *
//  * console.log *outside of the function* to check your work (you should see a
//  * different result everytime you refresh the page if you are using the random
//  * number)
//  */
//
// function isTwo(x) {
//     if (x == 2) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isTwo(random));
//



//
//
//
// /**
//  * TODO:
//  * Create a function named 'calculateTip' to calculate a tip on a bill at a
//  * restaurant. The function should accept a tip percentage and the total of the
//  * bill, and return the amount to tip
//  *
//  * Example:
//  * > calculateTip(0.20, 20) // returns 4
//  * step one: Identify how many variables I need.
//  * step two: create the variables with var, name of the variable and assign the value
//  * step 3: create the function with some parameters (no the variables I used before to avoid confussion)
//  * step 4:  Inside the function, declare the local variable for the total of the tip and return it (using the parameters in the line before)
//  * step 5:  Console.log the function with the variables I declared at the beginning.
//  */
// /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip
//  */
// var bill = prompt('type your total bill');
// var tipPercentage = prompt("type the percentage you would like to tip");
// function calculateTip(total, percentage) {
//         var tipTotal = total * percentage;
//         return tipTotal;
// }
// alert("your total tip is: " + calculateTip(bill, tipPercentage));
//
// // console.log(calculateTip(bill, tipPercentage));
//
//
//
//
//
//
//=============================JUSTIN EXTRA FUNCTION DRILL ========================
// // 1) Make a function called returnTwo() that returns the number 2 when called
// // ---Test this function with console.log(returnTwo())
// function returnTwo() {
//     return 2;
// }
// console.log(returnTwo());
//
// //     2) Make a function called returnName() that returns the string of your name
// // ---Test this function with console.log(returnName())
// function returnName() {
//     return "Pao";
// }
// console.log(returnName());
//
// //
// //     3) Make a function called addThree() which takes in a number input and returns the number plus 3. Remember to define a parameter.
// // ---Test this function with console.log(addThree(5))   ******* when passing in something to test is called ARGUMENT!!! *********
// function addThree(num) {
//     return num + 3;
// }
// console.log(addThree(5));
//
// //     4) Make a function called sayString() which returns the string input passed in.
// // ---Test this function with console.log(sayString())
// function sayString(inputString) {
//     return inputString;
// }
// console.log(sayString("pao"));
//
// //     5) Make a function called sayHowdy() which console.logs the string “Howdy!”
// //    ---Test this function by directly calling sayHowdy()
// // ---Remember this function does not need a defined return value
// function sayHowdy() {
//     console.log("howdy");
// }
// sayHowdy();


//
// =====================RYAN FUNCTION DRILL ========================
// // Write a function called `identity(input)` that takes in an argument called input and returns that input.
// function identity(input) {
//     return input;
// }
// console.log(identity("pao"));

//     Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that funciton call.
// function getRandomNumber(min, max) {
//     var random = Math.floor((Math.random()*max)+min);
//     return random;
// }
// console.log(getRandomNumber(10, 20));



//     Write a function called `first(input)` that returns the first character in the provided string.
// function first(input) {
//     return input.charAt(0);
// }
// console.log(first("freeze"));

//
//     Write a fuction called `last(input)` that returns the last character of a string

// function last(input) {
//     return input.charAt(input.length-1);
// }
// console.log(last("encebollado"));

// Write a function called `rest(input)` that returns everything but the first character of a string.
// function rest(input) {
//     return input.substring(1);
// }
// console.log(rest("Paola"));

//

//     Write a function called `reverse(input)` that takes a string and returns it reversed.
// function reverse(input) {
//     return input.split("").reverse().join("");
// }
// console.log(reverse("TitoValiente"));

//
//     Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.
// function isNumeric(input) {
//     if (isNaN(input) === false) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function isNumeric(input) {
//     return !isNaN(input);
// }
//
// console.log(isNumeric("hello"));
//
//
//     Write a function called `count(input)` that takes in a string and returns the number of characters.
// function count(input) {
//     return input.length;
// }
// console.log(count("encebollado"));

//
//     Write a function called `add(a, b)` that returns the sum of a and b

// function add(a, b) {
//     return a += b;
// }
// console.log(add(5, 5));

//
// Write a function called `subtract(a, b)` that return the difference between the two inputs.
// function subtract(a, b) {
//     return a -= b;
// }
// console.log(subtract(40, 55));

//
//     Write `multiply(a, b)` function that returns the product
// function multiply(a, b) {
//     return a *= b;
// }
// console.log(multiply(6, 5));

//
// Write a divide(numerator, denominator) function that returns a divided by b
// function divide(numerator, denominator) {
//     return numerator /= denominator;
// }
// console.log(divide(35, 5));
//
// Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`
// function remainder(number, divisor) {
//     return number % divisor;
// }
// console.log(remainder(45, 3));
//
// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.
// function square(a) {
//     return a *= a;
// }
// console.log(square(7));

// ############################################################# Super Duper Gold-Star Bonus
//
// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
    function add(a, b) {
        return a + b;
    }
    // console.log(add(5, 5));

    function square(a) {
        return a * a;
    }
// console.log(square(7));

    function sumOfSquares(a, b) {
        return add(square(a), square(b));
    }
    console.log(sumOfSquares(4, 5));
//
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on

})();


