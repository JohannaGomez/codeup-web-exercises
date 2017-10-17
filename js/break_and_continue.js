// *****************************Break and Continue continue
//

// 2./ Prompt the user for an odd number between 1 and 50.
// Use a loop and a break statement to continue prompting the user if they enter invalid input.


function isEven(input) {
    return parseFloat(input) % 2 === 0;
}

function isOdd(input) {       // determine if a number is odd ...
    // I can't even...
    return !isEven(input);
}

function isNumeric(input) {      // determine if an input is a number
    return !isNaN(input);
}

function isNegative(input) {     // determine if a number is negative
    return input < 0;
}

function isPositive(input) {       // determine if a number is positive
    return input > 0;
}


for (var i = 1; i <= 50; i += 1) {
    var x = parseFloat(prompt("please type an odd number between 1 and 50"));
    if (isNumeric(x) && isOdd(x) && isPositive(x)) {
        console.log("Number to skip is: " + x);
        break;
    }
}



for (var i = 1; i < 50; i++) {
    if (i === x) {
        console.log("Yikes! Skipping number: " + x);
        continue;
    }
    console.log('Here is an odd number: ' + i);
}






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