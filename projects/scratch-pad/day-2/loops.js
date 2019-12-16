// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  // make for loop where i = index 0 and stops at the last index of array
  for (var i = 0; i <= array.length - 1; i++) {
    console.log(array[i])
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
   
    // make a loop to print aray from last index and stop when i = first index

    for (var i = array.length - 1; i >= 0; i--) {
      console.log(array[i])
    }
    
    
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // create an array to push object keys
 let array = []
  // create for in loop to access keys in object
for (var key in object) {
        //push object keys into array
        array.push(key)
    }
 // return object keys pushed into array
    return array;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // make a for in loop to console log the keys in object
  for (var key in object) {
    console.log(key);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
   // create an array to push object values
 let valueArray = []
  // create for in loop to access values in object
for (var key in object) {
        //push object keys into array
        valueArray.push(object[key])
    }
 // return object keys pushed into array
    return valueArray;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  // create for in loop to console log the values of the keys in object
  for (var key in object) {
    console.log(object[key]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  //create variable for keys
  var key1 = 0
  // create for in loop that counts each key starting at the variable (0)
  for (var key in object) {
    key1++
  }
  // return the variable key1
  return key1
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  // create an array for pushing in key values in order to get index or order
  let objectArray = []
  // make for in loop that pushes each value from keys in the object into array
  for (var key in object) {
    objectArray.push(object[key])
    
  }
  // make for loop that counts backwards in array
  for (var i = objectArray.length - 1; i >= 0; i--) {
    //console log what is in array
   console.log(objectArray[i])
  }
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
