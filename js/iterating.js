(function(){
    "use strict";
// *******************************************Justin's class oct/19/17
//     var pies = [];
//     var pies = [
//         "apple",
//         "cherry",
//         "key lime",
//         "huckleberry"];
//     console.log(pies);
//  ------------ separate declaration and initializacion:
// var pies = [];
// pies[0] = "apples";
// pies[1] = "cherry";
// ----------declaring a hig index number
// pies[10] = "blueblerry";
// console.log(pies);  // ["apple", "cherry", empty 8  , "blueberry"];    ** but notice there are 11 elements but with indices 0 to 10
// ------------Counting arrays:
//     var pies = [];
//     var pies = [
//         "apple",
//         "cherry",
//         "key lime",
//         "huckleberry"];
//     console.log(pies.length);  // 4
//     console.log(pies[0]);     // apple
//     console.log(pies[2]);   // key lime
//     console.log(pies[100]);  // undefined
// ------------ for loops: when i need to iterate partially or backwards with the elements of the array
//     var pies = [
//         "apple",
//         "cherry",
//         "key lime",
//         "huckleberry"];
//     //  -- starting with the 1st one
//     for (var i = 0; i < pies.length; i +=1) {
//         console.log("I like " + pies[i]);
//     }
//     // ---- backwards, starting console.log with the last one
//     for (var i = pies.length - 1; i >= 0; i -=1) {
//         console.log("I like " + pies[i]);
//     }
// --------- for each loop: it's a method, that takes in as an argument, another function - element, index and array can be
// optional when calling the function inside the forEach and I can use other names instead of element, index and array,
// for example can be x, y, z but what matters is the order .. or I can just access to the array itself (instead of
// function(element, index, array) just function(element)
//    syntax : someArray.forEach(function(element, index, array)) {
//                  console.log(element);
//                  console.log(index);
//             }
//     var pies = ["apple", "cherry", "key lime", "huckleberry"];
//     pies.forEach(function(element, index, array){
//         console.log(element);    // or
//         console.log(index);      // or
//         console.log(array);      // it's not very common to use this one
//     })
//      **** this does the same work than the forEach above:
//      function logElements(element) {
//          console.log("element" + element);
//      }
//     pies.forEach(logElements):

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    console.log("Create an array of 4 people's names and store it in a variable called names");
    var names = ["Roy", "Pao", "Isabella", "Rj"];
    console.log(names);
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("Create a log statement that will log the number of elements in the names array");
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log("Create log statements that will print each of the names individually by accessing each element's index");
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    console.log("Write some code that uses a for loop to log every item in the names array");
    for (var i = 0; i < names.length; i +=1) {
        console.log("the name at index " + i + " is " + names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log("Refactor your above code to use a `forEach` loop")
    names.forEach(function(name) {
        console.log(name);
    })
    /// this next one works the same:
    // console.log("Refactor your above code to use a `forEach` loop")
    // names.forEach(function(element, index, array) {
    //     console.log(element);
    // })
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    console.log("create 3 functions that returns the 1, the second and the last item of the array");
    var numbers = [1, 2, 3, 4, 5];
    function first(numbers) {
        return console.log(numbers[0]);
    }
    first(numbers);

    // function first(arr) {
    //     return console.log(arr[0]);
    // }
    // first(arr[1, 2, 3, 4, 5]);

    function second(numbers) {
        return console.log(numbers[1]);
    }
    second(numbers);

    function last(numbers) {
        return console.log(numbers[numbers.length - 1]);
    }
    last(numbers);

    or


})();
