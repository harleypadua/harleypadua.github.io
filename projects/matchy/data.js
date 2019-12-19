/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create variable named animal that is an object
var animal = {};
// add key/value pairs for an animal 
animal.species = 'cat';
animal['name'] = "Fang";
animal['noises'] = [];
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// make an array named noises and assign it to a variable
var noises = [];
// add indexes to array using array methods
noises[0] = 'meow';
noises.push('purr');
noises.unshift('chatter');
noises[noises.length] = ('yowl');

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// assign the noises key in the animal object to the noises array i just made and push in another index
animal["noises"] = noises;
noises.push('trill');

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create animals array and push animal object into the array
var animals = [];
animals.push(animal);
// add more animals to the array
var duck = { 
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);

// thinking of animals that make noise is harder than it should have been
var dog = {
    species: 'dog',
    name: 'Biscuit',
    noises: ['bark', 'howl', 'growl']
};


var guineaPig = {
    species: 'guinea pig',
    name: 'Sugar',
    noises: ['squeal', 'snort' ]
};
animals.push(dog, guineaPig);
// i pushed the new animals into the animals array

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// since dealing with indexes, i am using an array for friends.
var friends = [];
// create a function that takes in animals from the array
function getRandom (animals) {
    // return a random index by using Math.random(). since this only gives a number between 0-1
    // i use Math.floor to round down from whatever decimal it gives me when i multiply by a random index of
    // the animals array 
   return Math.floor((Math.random() * animals.length));
}
// push the result of the function into the friends array
friends.push(animals[getRandom(animals)].name);
// then i added a key of friends to the dog object with a value of the friends array
dog["friends"] = friends;
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
