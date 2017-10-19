(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    // var planetsArray = planetsString.split("|");
    // console.log(planetsArray);

// /**
    //  * TODO:
    //  * Create a string with <br> tags between each planet. console.log() your
    //  * results. Why might this be useful?


    // var stringWithBr = planetsArray.join("<br>");
    // console.log(stringWithBr);


     // *
     // * BONUS:
     // * Create another string that would display your planets in an undordered
     // * list. You will need an opening AND closing <ul> tags around the entire
     // * string, and <li> tags around each planet.
     // */
    var planetsArray = planetsString.split("|");
    console.log(planetsArray);
    var liArray = planetsArray.join("</li> <li>");
    console.log(liArray);
    var liArray2 = liArray.split(" ");
    console.log(liArray2);
    liArray2.unshift("<ul><li>");
    liArray2.push("</li><ul>");
    console.log(liArray2);
    var finalPlanetsString = liArray2.join("");
    console.log(finalPlanetsString);


    // "<ul><li>item1</li><li>item2</li><li>item2</li><li>item2</li></ul>"






})();
