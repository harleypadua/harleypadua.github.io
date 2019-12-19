/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create function called search that takes in animals array and name of animal as parameters
function search(animals, name) {
    // loop through array to search each index
    for(var i = 0; i < animals.length; i++) {
        // check for if name is in array
     if (animals[i].name === name) {
         // return the object in animals of the name
         return animals[i];
     } 
    } // needs to return null if not found
         return null;
    
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create function called replace that takes 3 parameters: animals array, name of animal in array, and object to replace it with
function replace(animals, name, replacement){
    // loop through array to find name passed into function
    for (var i = 0; i < animals.length; i++) {
        // replace if the animal at the given index is the name passed into function
        if (animals[i].name === name) {
            // use .splice() to remove only the animal of the name passed into function and replace with the replacement animal
            animals.splice(i, 1, replacement);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create function called remove that takes two parameters: animals array and name of animal to be removed
function remove(animals, name) {
    // loop through array to find matching animal
    for (var i = 0; i < animals.length; i++) {
        // remove if the animal at the given index is the name passed into function
        if (animals[i].name === name) {
            // use .splice() to remove only the animal of the name passed into function
            animals.splice(i, 1);
        } 
    } 
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create function called add that takes in animals array and the name of the animal you want to add
function add(animals, animal) {
    // loop through animals array
    for (var i = 0; i < animals.length; i++) {
        // check for the naimal have a name and species
        if (animal.name.length > 0 && animal.species.length > 0) {
            // loop through again to find if the name of animal matches an animal in the array
        for (var i = 0; i < animals.length; i++) {
            // if it finds a clone, do not add
            if (animal.name === animals[i].name) {
                return;
                
            }
        }
        }
        // if all tests pass then add to the array
    } animals.push(animal);
     
    
    
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
