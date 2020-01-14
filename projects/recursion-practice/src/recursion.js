// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  // if negative number return null
  if (n < 0) {
    return null;
    // factorial of 0 is 1
  } else if (n === 0) {
    return 1;
    // when n is 2, multiply by 1
  } else if (n === 2) {
    return n * 1;
  } else {
    // return n times the recursive call of the function with n - 1 as parameters to loop through all numbers
  return n * factorial(n - 1);
  }
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  // if array is empty or gets to 0 return 0
  if (array.length === 0){
    return 0;
    // if array has 1 element return that element
  } else if (array.length === 1){
    return array[0];
  }// return the first element of the array added by the call of the sum function starting at the index of one
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  // if negative number
  if (n < 0) {
    n = Math.abs(n);
    // if n is 1
  } else if (n === 1){
    return false;
    // if n is 0
  } else if (n === 0){
  return true;
  }// return the function call on n - 2
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // once n is 0, return 0
  if (n === 0) {
    return 0;
    // if n is 1, return the function called on 1 - 1 which is 0
  } else if (n === 1) {
    return sumBelow(n - 1);
    // is n is -1 return the function called on -1 + 1 which is 0
    } else if (n === -1){
      return sumBelow(n + 1);
      // if n is negative return the number plus 1 plus the fucniton call on the number plus 1
    } else if (n < 0) {
    return (n + 1) + sumBelow(n + 1);
  } // return n - 1 so that intitial value is not counted and add to the function call on n - 1
  return (n - 1) + sumBelow(n - 1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  // if no range between x and y return empty array
  if (x === y - 1 || x === y + 1){
    return [];
    // if x is equal to y return empty array
  } else if (x === y){
    return [];
    // if x is greater than y subtract 1 from x and join the function call on x-1 and y
  } else if (x > y){
    return [(x - 1)].concat(range((x - 1), y));
    // else return x incrimented by 1 joined by the function called on x + 1 and 7
  } else {
  return [(x + 1)].concat(range((x+1), y));
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //if exponent is 0, since x^0 equals 1 no matter what x is, use as base case
  if (exp === 0){
    return 1;
    // if exp is a negative number, incriment it by 1 so that the exponent becomes positive
  } else if (exp < 0) {
    return exponent(base, exp + 1) / base;
  } // else return the base multiplied by the function call on base and the exponent - 1 so that the exponent is either 0 or positive and even
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // if n computes to 1, return true
  if (n === 1) {
    return true;
    // if n computes to 2, return true
  } else if (n === 2) {
    return true;
    // if n is 0 or negative return false
  }else if (n < 1) {
    return false;
  }// else return the function called on n divided by 2 which will determine if a number is a power of 2
  return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  // if string has only 1 element inside it, return that element
  if (string.length === 1) {
    return string[0];
  } // else return the last element of the string, adding the recursive result of string - last letter
  return string[string.length - 1] + reverse(string.slice(0, string.length - 1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // convert string to lowercase letters for easy comparison, split at an spaces and join characters together
  string = string.toLowerCase().split(" ").join("");
  // if string gets to 1 or has nothing then it was a match, return true
  if (string.length === 1 || string.length === 0) {
  return true;
  // if the characters at the beginning and end match, slice the characters starting at the 1st index
  } else if (string.charAt(0) === string.charAt(string.length - 1)) {
    return palindrome(string.slice(1, string.length - 1));
  }// if all tests fail, return false
  return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if(x < y){
    return x;
  }
  return modulo((x - y), y);
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.

// once y reaches 1, stop iterating and return x
// if y is negative and x is positive switch their positions
// if y AND x is negative make them positive
// return x plus the recursice call on x and y - 1 which will iterate until y is 1
var multiply = function(x, y) {
  if (y === 1) {
    return x;
  } else if (y < 0 && x >= 0){
    return multiply(y, x);
  } else if (y < 0 && x < 0){
    return multiply(-y, -x);
  }
  return x + multiply(x, (y - 1));
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // if str1 & str2 get to 0 return true because they are a match
   if (str1.length === 0 && str2.length === 0) {
        if (str1[0] === str2[0]) {
            return true;
        }
    }// if the first letter in str1 & str2 are the same, return recursive call slicing to the next letter
    if (str1[0] === str2[0]) {
        return compareStr(str1.slice(1), str2.slice(1));
    } // if the first letter in str1 & str2 are not equal, return false
    if (str1[0] !== str2[0]) {
        return false;
    }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  // create empty array to push changes
   let strArray = [];
   // if the string length gets to 0 return the new array
  if (str.length === 0){
    return strArray;
  } // if the length of the string is greater than 0 push first letter
  if (str.length > 0) {
    strArray.push(str.slice(0, 1));
    // return the array concated with the recursive call slicing to the next character in the string
    return strArray.concat(createArray(str.slice(1)));
  }// return the array
  return strArray;
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  // create new array
  let reversed = [];
  // if arrays length is 0 return new array
  if (array.length === 0){
    return reversed;
  } // if arrays length is greater than 0 push first element to reversed, then return the recursive call slicing to the next element concated with reversed
  if (array.length > 0){
    reversed.push(array[0]);
    return reverseArr(array.slice(1)).concat(reversed);
  }//return new array
  return reversed;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  //create an array to push changes
  let list = [];
  // if the length is a value of 0, return the empty array
  if (length === 0){
    return list;
  }// if the length is a 1, push the value to the list array and return it
  if (length === 1){
    list.push(value);
    return list;
  }// if the length us a number greater than one, push the value to the list and combine that with the recursive call
  if (length > 1){
    list.push(value);
    return list.concat(buildList(value, (length - 1)));
  }
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  // if arrays length gets to 1 and is the value return 1
  if (array.length === 1 && array[0] === value){
    return 1;
    // if the arrays length gets to 1 and is not the value return 0
  } else if (array.length === 1 && array[0] !== value){
    return 0;
    // if the first element of array is the value return 1 and recursive call which takes away 1 index each time
  } else if (array[0] === value) {
    return 1 + countOccurrence(array.slice(1), value);
    // if the first index is not the value, return 0 and recursive call 
  } else {
    return 0 + countOccurrence(array.slice(1), value);
  }
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  // create new array to make change
  let mappedArray = [];
  // if the array length gets to 0, return the new array
  if (array.length === 0){
    return mappedArray;
  }// push the result of the callback function on the first element of the array to the new array
  mappedArray.push(callback(array[0]));
  // return the new array concated with the recursive call that slices to the next element in the array
  return mappedArray.concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  // if n is a negative number return null
  if (n < 0) {
    return null;
  }// if n is less than 2 return n
  if (n < 2){
    return n;
  }// return recursive call subtracting 1 from n and adding the recursive call subtracting 2 from n which add together to get to the index of n
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  // create new array for capitalized words
  let caps = [];
  // when input length gets to 0, return caps array
  if (input.length === 0){
    return caps;
  }// if inputs length is greater than 0, push the first element to the caps array converted to capital letters
  if (input.length > 0){
    caps.push(input[0].toUpperCase());
    // return caps concated with the recursive call slicing to the next element in the input
    return caps.concat(capitalizeWords(input.slice(1)));
  }
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  // create new array to push changes
  let capFirst = [];
  // if arrays length is 0 return the capFirst array
  if (array.length === 0){
    return capFirst;
  }// if arrays length is greater than 0, push the first letter capitalized to capFirst array
  if (array.length > 0){
    // assign first letter capitalized to a variable for easy understanding
    let first = array[0][0].toUpperCase();
    // assign the rest of the word to a variable for easy understanding
    let rest = array[0].slice(1);
    // concat the two variables
    capFirst.push(first + rest);
    // return capFirst array concated with recursive call slice to the next word in array
    return capFirst.concat(capitalizeFirst(array.slice(1)));
  }
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  // assign str.charAt(0) to current for easy understanding
  var current = str.charAt(0);
  // if strings length is 0 return the object
  if (str.length === 0) {
    return obj;
    // if the current letter exists, add 1 to its count
  } else if (obj[current]) {
    obj[current]++;
    // if the current letter doesn't exist add it and assign it to be 1
  } else {
    obj[current] = 1;
  }// return the recursive call of letterTally that uses slice to iterate through string, and the object
  return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  // create array to make changes
   let noDupes = [];
   // if the lists length is 0 return noDupes array
    if (list.length === 0) {
        return noDupes;
    } // if the lists length is 1 push that to the noDupes array and return it
    if (list.length === 1) {
        noDupes.push(list[0]);
        return noDupes;
    }// if the list has more than one element, and the first element is not the second, push it to the noDupes array
    if (list.length > 1 && list[0] !== list[1]) {
        noDupes.push(list[0]);
        // return noDupes concated with the recursive call that uses slice on the list
        return noDupes.concat(compress(list.slice(1,)));
    }// if the list has more than 1 element and the first element is equal to the second, splice it out
    if (list.length > 1 && list[0] === list[1]) {
        list.splice(0,1);
        // return the recursive call on list
        return compress(list);
    }// return list
    return list;
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  // create array to alter
  let zero = [];
  // if arrays length is 0, return zero array
  if (array.length === 0){
    return zero;
  }// if first element of array is not a 0, push to zero
  if (array[0] !== 0){
    zero.push(array[0]);
    // return zero concated with the recursive call of minimizeZeroes that uses slice on array
    return zero.concat(minimizeZeroes(array.slice(1)));
  }// is first element of the array is not the same as the second, push it to the zero array
  if (array[0] !== array[1]){
    zero.push(array[0]);
    // return zero concated with the recursive call of minimizeZeroes that uses slice on array
    return zero.concat(minimizeZeroes(array.slice(1)));
  }// return recursive call that uses slice on the array
  return minimizeZeroes(array.slice(1));
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  // if arrays length gets to 0, return array
  if (array.length === 0) {
    return array;
  }// if first element of the array is negative, convert to positive
  if (array[0] < 0){
    array[0] = -array[0];
  }// if second element in array is positive, convert to negative
  if (array[1] > 0) {
    array[1] = -array[1];
  }// return converted first 2 elements concated with recursive call on array slicing from index 2
  return [array[0], array[1]].concat(alternateSign(array.slice(2)));
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  // create an array of numbers as words to reference
   var numText = ['zero', 'one','two','three','four','five','six','seven','eight','nine'];
   // split string into array
    var strArr = str.split(' ');
    // if array only has one element, and if the number is a number use Number() which is used to convert data type to number, return recursive call on the first element of array
    // converted to a number. If it is not a number, return the first element of the array
    if (strArr.length === 1) return (!isNaN(Number(strArr[0]))) ? numText[Number(strArr[0])] : strArr[0];
    // create variable called string which is the array starting at index 1 joined back into a string at spaces
    var string = (strArr.slice(1).join(' '));
    // if element at 0 index in array is a number, return word from numText at first element in array converted to a number with a space and recursive call on string variable
    // if element at 0 index in array is not a number, return recursive call on string
    return (!isNaN(Number(strArr[0]))) ? (numText[Number(strArr[0])] + ' ' + numToText(string)) : (strArr[0] + ' ' + numToText(string));
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
