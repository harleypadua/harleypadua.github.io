// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    // create if statement to account for true or false
    // check if value is an array by using .isArray()
   if (Array.isArray(value)) {
       return true
   } else {
       return false
   }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    // create if statement to check for null
    if (value === null){
        return false
        // check for if value is array. can use function stated earlier
    } else if (isArray(value)){
        return false
        // check for if date. date is not a data type, use instanceof
    } else if (value instanceof Date){
        return false
        // add final else if to check for object === object
    } else if (typeof value === 'object'){ 
       return true
       // account for any other value that may get passed through
   } else { return false }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    // check for null
     if (value === null){
        return false
        // check for date
    } else if (value instanceof Date){
        return false
        // check for if value is Array OR Object after first checks fail
    } else if (isArray(value) || typeof value === 'object'){
        return true
        // cheeck for any other value
    } else { return false; }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // test for array using isArray function
    if (isArray(value)) {
        return "array"
        // test for object using isObject function
    } else if (isObject(value)) {
        return "object"
        // test for null and return as null not object
    } else if (value === null) {
        return "null"
        // check for date and return as date not object
    } else if (value instanceof Date) {
        return "date"
    } 
    // else statement includes numbers, strings, functions, booleans, and undefined
    else {return typeof value}
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
