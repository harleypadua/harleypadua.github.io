// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

    // create for loop to log numbers 1-100
    for (var i = 1; i <= 100; i++) {
        // create if statement to check for multiples of both 3 and 5
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
            // create else if to check for multiples of 3
        } else if (i % 3 == 0) {
            console.log("Fizz");
            // create if statement to check for multiples of 5
        } else if (i % 5 == 0) {
            console.log("Buzz");
            // end with else statement that logs if above statements are false
        } else {
        console.log(i);
        }
    }
    


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}