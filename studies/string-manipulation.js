/**
* String Manipulation:
*
* 0. A string is a sequence of one or more characters that may consist of letters, numbers, or symbols. 
* Each character in a JavaScript string can be accessed by an index number (starting at 0, like arrays), 
* and all strings have methods and properties available to them.
* 
* 1. There are many methods to dealing with strings. Here I will touch on a few.
* 
*/

// 1. With operators
// strings can be 'added' or concatenated with the + operator
"H" + "i"; // Hi

// strings can also use the += operator
var string = "Hello";
string += "World"; // adds and assigns to variable string
console.log(string); // prints HelloWorld

// typeof
// determines the type of value
let string1 = "This is a string";
typeof string1; // returns string

// 2. With string methods
// string methods help you work with strings

// charAt()
// returns the character using index number as a parameter
"This is a string".charAt(3); // returns i

// indexOf()
// returns the index of the first instance of a character in a string. can be used to search for multiple characters
"This is a string".indexOf("s"); // returns 3
"This is a string".indexOf("is"); // returns 5
// even though s appears more than once, indexOf() will get the first instance

// lastIndexOf()
// returns the index of the last instance of a character in a string. can be used to search for multiple characters
"This is a string".lastIndexOf("s"); // returns 10

// slice()
// returns the characters between two index numbers. 
//The first parameter will be the starting index number, and the second parameter will be the index number where it should end.
"This is a string".slice(4, 7); // returns is. 
// If a second parameter is not included, slice() will return everything from the parameter to the end of the string.
"This is a string".slice(4); // returns is a string

// toUpperCase and toLowerCase
// converts all characters to uppercase and lowercase respectively. useful when needing to make textual comparisons
"This is a string".toUpperCase(); // THIS IS A STRING
"This is a string".toLowerCase(); // this is a string

// split()
// this method splits a string by character and creates a new array out of the sections.
let newString = "Hello!";
let splitString = newString.split("");
console.log(splitString); // logs ['H', 'e', 'l', 'l', 'o', '!']

// trim()
// removes white space from both ends of a string, but not anywhere between. "white space" can be tabs or spaces
let whiteSpace = "        Hello!       ";
let trim = whiteSpace.trim();
console.log(trim); // logs Hello!

// replace()
// searches for a string value and replaces it with a new value. 
// the first parameter will be the value to be found, and the second parameter will be the value to replace it with.
newString = "Good to see you.";
let replacedString = newString.replace("Good", "Nice");
console.log(replacedString); // returns "Nice to see you."

