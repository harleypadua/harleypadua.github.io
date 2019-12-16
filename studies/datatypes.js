/**
* Data Types:
*
* 0. Variables in JavaScript contain data types. There are both primitive data types and complex data types. 
* 
* 1. Primitive data types are immutable, meaning that they do not hold any other values, only themselves. When operated on
* they return new values and do not change their original value. They are Copy by Value, 
* which means their values are copied from one variable to the next when assigning or passing.
* Primitive data types include Numbers, Strings, and Booleans. They also include null, NaN,
* undefined, and Infinity.
* 
* 2. Complex data types are mutable, meaning they CAN hold other values. They are Copy by Reference, which means 
* that when assigning or passing complex data types, their values are referenced, so anything changed in the first 
* will change in the next since they both refer to the same thing.
* Complex data types include Arrays, Objects, and Functions.
*
* 
*/
// - Primitive Data Types - //
// Numbers //
/* numbers are any numeric value that are positive, negative
or with decimal points. Numbers can be added, subtracted, divided, or multipled
to create new values in JavaScript.
*/
var num = 10; // positve number
num = 24.6; // decimal number
num = 3000 - 2019; // mathematical expression

// Stirngs //
/* strings are a collection of characters or symbols surrounded by quotes.
 */
var string = "hello!";
// like arrays, they also have a length property.
console.log(string.length);
// we can use bracket notation to access individual characters in strings, such as the beginning letter.
console.log(string[0]);
// they can be combined or concatenated by using the + operator.
function concat(str1, str2) {
    console.log(str1 + str2);
}
concat ("h", "i"); // logs hi to the console

// Booleans //
// true or false values, typically used in conditional statements
if (true) {
    // *run this code*
} // --> code will run
else if (false) {
    // *run this code*
} // --> code will not run

// undefined // 
/* A variable that has not been assigned a value is undefined. 
A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. 
JavaScript will initialize it behind the scenes, with the value undefined.
A function returns undefined if a value was not returned. */
var year;
console.log(year); // prints undefined

// Infinity and -Infinity //
/* Infinity and -Infinity represents a number too big for JavaScript to handle. 
Any mathematical expression with Infinity as one of the operands will give you Infinity
*/
console.log(3/0); // prints Infinity

// NaN //
// NaN means Not a Number. It is the returned value when Math functions fail.
console.log(0 / 0); // prints NaN 
console.log(Infinity - Infinity); // prints NaN

// null //
/* null means no value. The differene between undefined and null is that if a variable has a value null, 
it is still defined, it only happens that its value is nothing.
*/
var valueOfNothing = null;



// -Complex Data Types- //
// Arrays //
// Arrays are used to store references to multiple data types such as strings, numbers, booleans, other arrays, and objects, and even functions.
var anArray = ["This", "is", "a", "list", 4];
// the [] are what allows JavaScript to recognize it as an array

/* Every value in the list has an index, or number position of the value in the list.
Arrays are what is called 0 indexed, meaning that the first value in the list has an index of 0, 
the second has an index of 1 and so on. To access these indexes, we use bracket notation.
*/
console.log(anArray[0]) // prints "This" to the console since it starts at the 0 index.

// Objects //
/* Objects also store references to data such as strings, numbers, booleans, other arrays, and even functions, 
usually relating to a single object stored in {}
*/
var anObject = {
    key1: 'a',
    key2: 'b'
}
// the {} are what allows JavaScript to recognize it as an object

// Unlike arrays, values are stored at keys in objects. We can access these properties by using bracket notation OR dot notation
anObject['key1']; // <-- bracket notation returns 'a'
anObject.key2; // <-- dot notation returns 'b'

// Functions //
/* functions are blocks of code that accept arguments, or parameters, process those arguments, and returns a new data value.
Building a functions looks like this: the keyword function, the name of the function, 
how many parameters it takes in () and the body in {} */
function aFunction(par1, par2) {
    
}

// calling a function
/* calling a function runs the code in the function body
to call a function, use its name followed by Parenthesis()
*/
aFunction()
