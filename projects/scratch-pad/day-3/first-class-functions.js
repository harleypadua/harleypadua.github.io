// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //create function to return greater than instance
    return function greaterThan(value) {
        // check for if a value is greater than base
        if (value > base) {
            return true
            // check for value less than base
        } else if (value < base) {
            return false
    }
    
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // create function to return less than instance
     return function lessThan(value) {
         // check for if the value is less than base
        if (value < base) {
            return true
            // check for if the value is greater than base
        } else if (value > base) {
            return false
    }
    
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // create function that checks for first letter of string
    return function firstLetter(letter){
        // convert string letters so that they may be compared regardless of input
        startsWith = startsWith.toUpperCase()
        letter = letter.toUpperCase()
        // check for if letter is === to first letter of string
        if (letter[0] === startsWith[0]){
            return true
            // check for any other letter 
        } else { 
            return false
    }
}
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // create function to check last letter of string
     return function lastLetter(letter){
        // convert string letters so that they may be compared regardless of input
        endsWith = endsWith.toLowerCase()
        letter = letter.toLowerCase()
        // check for if letter is === to last letter of string
        if (letter[letter.length - 1] === endsWith[endsWith.length - 1]){
            return true
            // check for any other letter 
        } else { 
            return false
    }
}
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    // create array to store strings modified
    var anArray= []
    // loop through each string from beginging to end
   
    for (var i = 0; i < strings.length; i++) {
         // push strings into array while with function modify acting on strings
        anArray.push(modify(strings[i]))
        // return the result
    }
    return anArray;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    // create for loop that checks all strings
    for (var i = 0; i < strings.length; i++) { 
        // test for if the test called on string returns false
     if (test(strings[i]) === false){
         return false;
     } 
        
    // if not false return true
    }
    return true
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}