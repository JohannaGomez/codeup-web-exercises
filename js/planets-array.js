(function(){
    "use strict";

    // var planets = [
    //     'Mercury',
    //     'Venus',
    //     'Earth',
    //     'Mars',
    //     'Jupiter',
    //     'Saturn',
    //     'Uranus',
    //     'Neptune'
    // ];
    //
    // /**
    //  * TODO:
    //  * Read each console log below, and write some javascript code to perform
    //  * the step that it describes
    //  */
    // console.log(planets);
    // console.log('Adding "The Sun" to the beginning of the planets array.');
    // planets.unshift("The Sun");
    // console.log(planets);
    //
    // console.log('Adding "Pluto" to the end of the planets array.');
    // planets.push("Pluto");
    // console.log(planets);
    // //
    // console.log('Removing "The Sun" from the beginning of the planets array.');
    // planets.shift();
    // console.log(planets);
    // //
    // console.log('Removing "Pluto" from the end of the planets array.');
    // planets.pop();
    // console.log(planets);
    // //
    // console.log('Finding and logging the index of "Earth" in the planets array.');
    // var index = planets.indexOf("Earth");
    // console.log("the index of 'Earth' is: " + index);
    // //
    // //
    // console.log("Reversing the order of the planets array.");
    // planets.reverse();
    // console.log(planets);
    // //
    // console.log("Sorting the planets array.");
    // planets.sort();
    // console.log(planets);


//     Arrays Review
//
//     Given the following code:
//
        var myArray = [1, 2, 3, 4, 5];
        console.log("this is the array :  " + myArray);
//
        console.log("What is the element at index 0?   " + myArray[0]);

//
        console.log("What is the index of the element 3?   " + myArray.indexOf(3));
//
        console.log("What is the length of the array i.e. how many elements are in the array?   " + myArray.length);


        console.log("What is the index of the last element in the array? How does this number relate to the length of the array?" + (myArray.length - 1));

//         Write a for loop that console logs each element in the array. Refactor your code to use a foreach loop. How are they different?
        console.log("using for loop:");
        for (var i = 0; i < myArray.length; i += 1) {
            console.log(myArray[i]);
        }

        console.log("using forEach: ");
        myArray.forEach(function (element, index, array) {
            console.log(element);
        })
//         Consider the following:
//
        var myArray = [2, 3, 4];
        myArray.pop();
        myArray.unshift(1);
        console.log(myArray);

        // What will the code output?  1 2 3
//
//         What is the length of myArray?
        console.log("the new length of myArray is:  " + myArray.length);
//
//         What will myArray.indexOf(2) return? -- 1 because the index of the element 2 is not 0, is 1.
        console.log("myArray index 2 will return: " + myArray.indexOf(2));
//         What will myArray.indexOf('2') return?  It will return -1 because the string "2" is not in the array.
        console.log("the index of the string '2', will return: " + myArray.indexOf("2") + " because there is no string '2' in he array");
//         Using split and join to complete the following:
//
        var myPhoneNumber = '210.867.5309';
        console.log(myPhoneNumber);
        var myPhoneNumberArray = myPhoneNumber.split(".");
        console.log(myPhoneNumberArray);
// // TODO: convert myPhoneNumber to an array that contains the area code, the
// // first three digits and the last four numbers in the phone number
//
// // TODO: convert the array back to a string the contains the phone number with
        var joinedMyPhoneNumber = myPhoneNumberArray.join("-");
        console.log(joinedMyPhoneNumber);
// // the groups of numbers separated by dashes
//
// // console log throughout to check your work
})();
