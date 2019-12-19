
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// add paramter to take any number
function triangles(num) {
  // create for loop that counts up to num given, adding and assigning '#' as i go
  for (var triangle = "#"; triangle.length <= num; triangle += "#") {
    // print the result of the loop
  console.log(triangle);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(num1, num2) {
    for (var i = num1; i <= num2; i++) {
        // create if statement to check for multiples of both 3 and 5 FIRST
        // since the two chains below would both be "true", it would never run this 
        // condition if i put it after
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzbuzz");
            // create else if statement to check for multiples of 3 ONLY 
        } else if (i % 3 == 0) {
            console.log("fizz");
            // create else if statement to check for multiples of 5 ONLY
        } else if (i % 5 == 0) {
            console.log("buzz");
            // end with else statement that if above statements are false, logs regular numbers
        } else {
        console.log(i);
        }
    }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {

var chessBoard = ""; // empty string to push values
// for loop to loop through each number passed into function
    for (var i = 1; i <= num; i++) { 
      // if even number
        if (i % 2 === 0) {
          // loop for even number case
        for (var x = 1; x <= num; x++) {
          // if even print space, odd print #
            var evenOdd = (x % 2 === 0);
            switch (evenOdd) {
                case true:
                    (chessBoard += " ");
                    break;
                case false:
                    (chessBoard += "#");
                    break;
                }
            }   
            // if odd number
        } else {
          // loop for odd number case
        for (var y = 1; y <= num; y++) {
          // if odd print #, even print space
            var evenOdd = (y % 2 === 0);
            switch (evenOdd) {
                case true:
                    (chessBoard += "#");
                    break;
                case false:
                    (chessBoard += " ");
                    break;
            }
            }                       
        }   
        // add new line break in loop after else if statements
    chessBoard += "\n";
    }
    // then log the result from loops after loops but still in function
    console.log(chessBoard);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
