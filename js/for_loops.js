"use strict";
(function() {



// 1./ Create a file named for_loops.js inside the js directory and link it to your loops.html file.

// 2./ Create a function named showMultiplicationTable that accepts a number and console.logs
// the multiplication table for that number (just multiply by the numbers 1 through 10)
//// (************************************function with while  ***************************
// function showMultiplicationTable(num) {
//     for (var i = 1; i <=10; i +=1) {}
//     var i = 1;
//     while (i <= 10) {
//         console.log(num + "x" + i + "=" + parseInt(num*i));
//         i += 1;
//     }
//     return "nothing to return";
//     }
//
// console.log(showMultiplicationTable(9));

// (************************************Same exercise but with for ***************************


// function showMultiplicationTable(num) {
//     for (var i = 1; i <=10; i +=1) {
//         console.log(num + "x" + i + "=" + parseInt(num*i));
//     }
//     return "nothing to return";
// }

// console.log(showMultiplicationTable(9));


// 3./ Use a for loop and the code from the previous lessons to generate 10
// random numbers between 20 and 200 and output to the console
// whether each number is odd or even. For example:


// function isEven(x) {
//     return parseFloat(x) % 2 === 0;
// }
//
// for (var i = 1; i <= 10; i +=1) {
//     var random = Math.floor((Math.random() * 180) + 20);
//     if (isEven(random)) {
//         console.log("your number " + random + " is EVEN");
//     } else {
//         console.log("your number " + random + " is ODD");
//     }
//
// }

// 4./ Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// 0000000000
//
// for (var i = 1; i < 10; i +=1) {
//     var output = "";
//     for (var j = 0; j < i; j +=1) {
//         // add i to my string
//         output = output + i;
//     }
//     console.log(output);
// }

//     for (var i = 1; i < 10; i++) {
//         console.log(i.toString().repeat(i));
//     }
//
// // ********************************Zach's bonus ************************************************
//     for (var i = 1; i <= 10; i++) {
//         if (i === 10) {
//             var d =  i;
//             d = d.toString();
//             console.log(d.substr(1,1).repeat(i));
//             break;
//         }
//         console.log(i.toString().repeat(i));
//     }




// 5 ./ Create a for loop that uses console.log to create the output shown below.

// for (x = 100; x >= 5; x -=5) {
//     console.log(x);
// }
//     var message = (condition) ? "operation if it is true" : "operation for the else";

    function diamond(x){
        var y, w, shape = "";

        for(y = 0; y < x * 2 - 1; y++) {
            w = y < x ? y : x * 2 - y - 2;
            shape += Array(x - w).join(' ') + Array(w + 1).join('* ') + '*\n';
        }
        document.write('<pre>' + shape + '</pre>');
    }

    diamond(5);
})();