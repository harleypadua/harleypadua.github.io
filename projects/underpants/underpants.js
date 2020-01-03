// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    // check if value is null
        if (value === null){
        return "null";
        // check for if value is array. can use function stated earlier
    } else if (Array.isArray(value)){
        return "array";
        // check for if date
    } else if (value instanceof Date){
        return "date";
        // check if object === object
    } else if (typeof value === 'object'){ 
       return "object";
       // account for any other value that may get passed through
   } else { return typeof value }
    
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number) {
    // check is array is not an array and return []
    if (!Array.isArray(array)) {
        return [];
    } 
    // check if negative number and return []
    if (number < 0) {
        return [];
    }
    // check is number is greater than array.length and return array
    if (number > array.length) {
    return array;
    }
    // check if number is gretaer than 0 return elements of array
    if (number > 0) {
       return array.splice(0, number);
    }
    // return first element of array if no numerical argument is given
    return array[0];
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number) {
    // check if array is not an array and return []
    if (!Array.isArray(array)) {
        return [];
    } 
    // check is number is negative and return []
    if (number < 0){
        return [];
    }
    // check if number is greater than the array
    if (number > array.length) {
        return array;
    }
    // if number is greater than 0 return last 2 elements of array
    if (number > 0) {
        return array.splice(array.length - number, number);
    }
    // return last element of array if no numerical argument is given
    return array[array.length -1];
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value) {
    // loop through array to find first occurance of value
    for (let i = 0; i < array.length; i++) {
        // if value is in array return index 
        if (array[i] === value) {
            return i;
        }
        
    }
    // if not found in array, return -1
    return -1;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {
    // indexOf will check if value is there and return value. if its not there it returns -1.
    // using the ternary operator, checks if array doesnt have value and returns false. if it does, returns true
    return _.indexOf(array, value) === -1 ? false : true;

};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, f) {
    // check if collection is an array
   if (Array.isArray(collection)) {
       // loop through collection
       for (let i = 0; i < collection.length; i++) {
           // call function (f) on each element of array with arguments of element, it's index, and collection
           f(collection[i], i, collection);
       }
           // if object
       } else {
           // loop through object
           for (let key in collection) {
               // call function (f) on each property of collection with the arguments of property's value, it's key, and collection
               f(collection[key], key, collection);
           }
       }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
    // create empty array to push elements with duplicates removed
    let newArray = [];
    // loop through array
    for (let i = 0; i < array.length; i++) {
        // use indexOf to check if newArray has elements of array. if not, push elements to newArray
        if (_.indexOf(newArray, array[i]) === -1){
             newArray.push(array[i]);
        }
    }
    // return newArray
    return newArray;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func){
    // create new array for elements of function that returned true
    let trueArr = [];
    // call each to loop through array with anonymous function acting on element, index and array
    _.each(array, function(element, index, array){
        // if calling func returns true, push to the new array (trueArr)
        if(func(element, index, array) === true){
            trueArr.push(element);
        }
    });
    // return new array
    return trueArr;
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func){
    // set a new variable called filterResult using filter on given array that uses an anonymous function on element, index and array
    var filterResult = array.filter(function(element, index, array){
        // if func returns false, returns a new array with elements
        if(func(element, index, array) === false){
            return element;
        }
    });
    // return new array
    return filterResult;
};


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func){
    // create 3 arrays. one for truthy values, one for falsy values, and one to push them both in.
    let truthy = [];
    let falsy = [];
    let arrays = [];
    // loop through array to find values when func is called on array is false
    for(let i = 0; i < array.length; i++){
        if(func(array[i], i, array) === false){
            // push results to array
            falsy.push(array[i]);
        }
        
    }
    // loop through array to find values when func is called on array is true
    for (let i = 0; i < array.length; i++){
        if(func(array[i], i, array) === true){
            // push results to array
            truthy.push(array[i]);
        }
    }
    // add truthy and falsy arrays to arrays
    arrays.push(truthy);
    arrays.push(falsy);
    // return arrays
    return arrays;
    
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func){
    let newArray = [];
    // check for if array
    if(Array.isArray(collection)){
        // if array, loop through array
        for(let i = 0; i < collection.length; i++){
            // push result of function call on element, index and array
           newArray.push(func(collection[i], i, collection));
        }
    } else {
        // if object loop through object
        for(var key in collection) {
            // push result of function call on value, key, and object
            newArray.push(func(collection[key], key, collection));
        }
    }
    // return new array
    return newArray;
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, property){
    // use map to loop through array, returning a new array of elements from array
    return array.map(function(element, index, array){
        // return property for each element in array in new array
        return element[property];
    });
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func) {
    // check if a function is provided
    if (!func) {
        // loop through collection to find falsy values
        for (let i = 0; i < collection.length; i++) {
            if (collection[i] === false) {
                return false;
            }
        } // return true if no falsy values are found
        return true;
    }
    // check for if collection is an array
    if (Array.isArray(collection)){
        // loop through array
    for (var i = 0; i < collection.length; i++) {
        //check if when function called on elements of array returns false
        if (func(collection[i], i, collection) === false) {
            return false;
            // return true if passes
        } 
    } 
    return true; 
    }
    // else if object, loop through object
    for (let key in collection) {
        // if the function called on the keys of the object retruns false, return false
        if (func(collection[key], key, collection) === false) {
            return false;
        } 
    }
    return true;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func) {
    if (!func) {
        // loop through collection to find truthy values
        for (let i = 0; i < collection.length; i++) {
            if (collection[i] === true) {
                return true;
            }
        } // return flase if no truthy values are found
        return false;
    }
    // check for if collection is an array
    if (Array.isArray(collection)){
        // loop through array
    for (var i = 0; i < collection.length; i++) {
        //check if when function called on elements of array returns true
        if (func(collection[i], i, collection) === true) {
            return true;
        } 
    }  // return false if it doesn't pass
    return false; 
    }
    // else if object, loop through object
    for (let key in collection) {
        // if the function called on the keys of the object retruns true, return true
        if (func(collection[key], key, collection) === true) {
            return true;
        } 
    }// else return false
    return false;
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed){
    //if seed is given and not falsy
    if (seed !== undefined) {
        // use seed as previous result and pass in that with element and index into func, assigning the result to seed
        for (let i = 0; i < array.length; i++) {
            seed = func(seed, array[i], i, array);
        }
    } else { // if no seed was given or if seed is falsy
    // assign seed to be the first element of the array
    seed = array[0];
    // loop through array starting at 1 (since seed is 0 and you don;t want to count it twice)
    for (let i = 1; i < array.length; i++) {
        // reassign seed to the result of function call
        seed = func(seed, array[i], i, array); 
    }
    } // return value of final function call
   return seed;
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(obj1, ...objArgs) {
   
//Object.assign() method copies all enumerable own properties from one or more source objects(...objArgs) to a target object(obj1) and returns target object
let updatedObj1 = Object.assign(obj1, ...objArgs);
  //return the updated object. 
   return updatedObj1;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
