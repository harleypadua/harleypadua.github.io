/**
* Loops:
*
* 0. Loops can execute the same block of code an infinite number of times, providing a different value each time. 
* 
* 1. To do this, you can us a for loop, for-in loop, or a while loop. To begin a loop, you must have a starting condition,
* stopping condition, and an increment.
* 
*/

// For Loop
/* good for looping through arrays. to build a for loop you need 3 key statements: a starting index, a stopping index, and how much
you want to increment the index. */
var array = ['apples', 'oranges', 'bananas'];
for (var i = 0; i <= array.length - 1; i++) {
    console.log(array[i]); // prints apples oranges bananas
  }
  // and can iterate over an array backwards
for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]); // prints bananas oranges apples 
  }
  // can count up
for (var i = 0; i < 5; i++) {
console.log(i); // prints 0 1 2 3 4 
}
//  or down
for ( var i = 5; i >= 1; i--) {
  console.log(i); // prints 5 4 3 2 1
}


// For-In Loop
/* good for looping through objects. they allow you to go through the keys to get the values. */
var object = {
  key1: 1, 
  key2: 2};

for ( var key in object ) {
console.log(object[key]); // prints 1 2
}

// or to print all keys in an object
for (var key in object) {
  console.log(key); // prints key1 key2
}

// While Loop
/* loops through a block of code as long as a specified condition is true. */

var count = 0;

while(count < 5) {
console.log(count); // prints 0 1 2 3 4
count++;
}

// it is really easy to accidentally break your code when using while loops. make sure to break out of your while loop.
var count = 0;

/* while(count < 5) {
console.log(count); 
count--;
}
in this example, count will never reach 5, therefore looping forever, breaking your code.
*/