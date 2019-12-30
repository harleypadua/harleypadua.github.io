// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  // use .reduce on array and then concat
  return array.reduce((flat, current) => flat.concat(current),
  //account for empty array being passed in
[]);
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, body) { // use a starting value, test function, update function, body function
// run test function on loop value (x) then call update function to create new value
for (let x = start; test(x); x = update(x)) {
  // body function will assign current value
  body(x);
}
}
/*
// declare a variable with a given value (starting point)
// check our stopping condition
// if the stopping condition is false, terminate the loop
// if true, run code block
// increment/decrement our value (update our value)
for (let i = val; test(i); i = update(i)) {
  body(i);
}
*/

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  // loop to check every element of array
for (let element of array) {
  // check if every value passes the test
  if (!test(element)) return false;
}
// if it passes, return true
return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  // use function called countBy to find all of the scripts
let counted = countBy(text, char => {
// count characters based on characterScript
    let script = characterScript(char.codePointAt(0));
// account for no script direction
    return script ? script.direction : "none";
// fliter out result referring to "script-less" characters
  }).filter(({name}) => name != "none");



  if (counted.length == 0) return "ltr";


// find direction with the highest character count with .reduce
  return counted.reduce((a, b) => a.count > b.count ? a : b).name;

}
/* use the count by function to find all of the scripts
let scriptsArr = countBy(string, finction(char) {
  // find the asscociative script for each char
  //charcetrScript function will look thorugh the ranges specified in the scripts.js file to find matching script object and will return the entire object
  let script = characterScript(char.codePointAt(0))
  //check if the script is an actual script and not not a symbol
  // the countBy function will return an array of objects w/ dominate direction and count
  if(script){
    return script.direction;
  }
  return null;
});
// using array sort methof, sort each object by its count property
scriptsArr.sort(function(a, b) {
  return b.count - a.count;
})
return scriptsArr[0].name;
}
*/
// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
