
"use strict";
    // var cars = [
    //     {
    //         make: "Toyota",
    //         model: "Camry",
    //         features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
    //         owner: {
    //             name: "Jane Doe",
    //             age: 30
    //         }
    //     },
    //     {
    //         make: "Honda",
    //         model: "Accord",
    //         features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
    //         owner: {
    //             name: "John Doe",
    //             age: 31
    //         }
    //     }
    // ];

    // console.log("The first car is a " + cars[0].make + "model " + cars[0].model + ".");
    // console.log("The owner of the second car is " + cars[1].owner.name + " and his age is: " + cars[1].owner.age);

    // cars.forEach(function (element, index, array) {
    //     console.log("make: " + element.make + " model: " + element.model);
    //     console.log("owner :" + element.owner.name);
    //     element.features.forEach(function (feature) {
    //         console.log("- " + feature);
    //     });
    //     console.log("-----------------------");
    // });

    //
    // cars.forEach(function(car) {
    //     car.features.forEach(function(feature) {
    //         console.log(feature);
    //     });
    // });

    // var car = {
    //     make: "honda",
    //     model: "civic",
    //     honk: function (honkRealLoudLike) {
    //         if (honkRealLoudLike) {
    //             alert("honk, honk!");
    //         } else {
    //             alert("beep, beep!!");
    //         }
    //     },
    //     getInfo: function () {
    //         return "make: " + car.make + " model: " + car.model;  // or **  actually I didnt get the same result//
    //         // return "make: " + this.make + " | model: " + this.model;
    //         // *** this is a reserved word which is going to refer to whateever object is inside  ***** ///
    //     }
    // };


    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.firstName) // "Sanchez"
     */
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    //
    // var person = {
    //     firstName: "Pao",
    //     lastName: "Gomez",
    //     sayHello: function (string) {
    //         return "Hello from " + this.firstName +" " + this.lastName
    //     }
    // };
    // console.log(person.firstName);
    // console.log(person.lastName);
    // console.log(person.sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    //
    // shoppers.forEach(function (element, index, array) {
    //     if (element.amount > 200) {
    //         var discount = element.amount * 0.12;
    //         var totalAfterDiscount = element.amount - discount
    //     } else {
    //         var discount = 0;
    //     }
    //     return console.log("buyer: " + element.name + " | total purchase: " + element.amount + " | discount: " + discount + "  | total after discount: " + totalAfterDiscount);
    // });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
            {
                book: 1,
                bookStore: "Book store ABC",
                author: {
                    firstName: "John",
                    lastName: "Paul II"
                },
                title: "the title of book 1",
            },
            {
                book: 2,
                bookStore: "Book store DEF",
                author: {
                    firstName: "Johanna",
                    lastName: "Gomez"
                },
                title: "the title of book 2",
            },
            {
                book: 3,
                bookStore: "Book store GHF",
                author: {
                    firstName: "Roy",
                    lastName: "Lopez"
                },
                title: "How to be a good soldier"
            },
            {
                book: 4,
                bookStore: "Book store QUB",
                author: {
                    firstName: "Rj",
                    lastName: "Lopez"
                },
                title: "My terrible twos",
            },
            {
                book: 5,
                bookStore: "Book store XYZ",
                author: {
                    firstName: "Alex",
                    lastName: "Acebo"
                },
                title: "Tinkle Tinkle little star",
            }

        ];
// console.log(books[2]);
// console.log(books[0].title);
// console.log(books[0].author.firstName);
// console.log(books[0].author.lastName);
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach(function (element, index, array) {
        console.log("Book #" + (index += 1));
        console.log("Title: " + element.title);
        console.log("Author: " + element.author.firstName + element.author.lastName);
    console.log("-----------------------");
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    "use strict";


    function createBook(strTitle, strFirstName, strLastName) {
            return {
                    title: strTitle,
                    author: {
                        firstName: strFirstName,
                        lastName: strLastName
                    }
                };

    };
    console.log(createBook("this is a new title", "Johanna", "Gomez"));
