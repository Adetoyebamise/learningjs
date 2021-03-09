//Methods are functions that belongs to a particular object
var persons;
persons = ["Spanish", "Dutch", "African", "Asian", "European"];
console.log( "Before: ", persons);

//Reverse the array
persons.reverse();

//Remove the first value of the array
persons.shift();

//Add comma-seperated list to the front of the array
persons.unshift("Jews", "Gentiles");

//Remove the last value of the array
persons.pop();

//Add comma-seperated list to the end of the array
persons.push("perusian", "Hispanian");

//Find the specific position and remove and remove n mumber of value from the array : removing item at the middle of an array
persons.splice(
 pos, n); //start at the second item


//After applyiing different method 
console.log("After:", persons);

//Creating a copy of an array
var newPersons = persons.slice();
console.log("New persons: ", newPersons);

//Return the first element that matches...
var result = persons.indexOf(searc, index);
console.log("The index position is:", result);

//Return the items in an array as a comma seperated
var arrayString = persons.join(seperator);
console.log("string from array:", arrayString);



