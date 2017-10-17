// Break and Continue continue
//
// 1./ Create a file named break_and_continue.js in the js directory.
// 2./ Prompt the user for an odd number between 1 and 50.
// Use a loop and a break statement to continue prompting the user if they enter invalid input.

function isEven(x) {
    return parseFloat(x) % 2 === 0;
}
var oddNumber = prompt("please type an odd number between 1 and 50");
for (i = 1; i <= 50; i +=1) {
    if (isEven(oddNumber) && oddNumber <= 50) {
        oddNumber = prompt("please type an odd number between 1 and 50");
    } else if (i === oddNumber) {
        console.log("Yikes!! Skipping number: " + x);
        break;
        console.log("sdfaldfasdfasdkfsffl;fadfl");
    }

}



// var numberToStopAt = 5;
//
// for (var i = 1; i < 100; i++) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (i === numberToStopAt) {
//         console.log('We have reached the stopping point: break!');
//         // use the break keyword to exit from the while loop
//         break;
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
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