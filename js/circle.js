(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            return; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();

var books = [
    {
        book: 1,
        bookStore: "Book store ABC",
        author: {
            firstName: "John",
            lastName: "Paul II"
        }
        title: "the title of book 1"
    },
    {
        book: 2,
        bookStore: "Book store DEF",
        author: {
            firstName: "Johanna",
            lastName: "Gomez"
        }
        title: "the title of book 2"
    },
    {
        book: 3,
        bookStore: "Book store GHF",
        author: {
            firstName: "Roy",
            lastName: "Lopez"
        }
        title: "How to be a good soldier"
    },
    {
        book: 4,
        bookStore: "Book store QUB",
        author: {
            firstName: "Rj",
            lastName: "Lopez"
        }
        title: "My terrible twos"
    },
    {
        book: 5,
        bookStore: "Book store XYZ",
        author: {
            firstName: "Alex",
            lastName: "Acebo"
        }
        title: "Tinkle Tinkle little star"
    }

]
console.log(books[2]);