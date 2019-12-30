//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // Object.values will print the values of the keys in object in an array
return Object.values(object);
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    // create empty string
    var string = "";
    // loop through object
    for (var key in object) {
        // add key and space to string variable
        string += key + " ";
    } // trim whitspace
return string.trim();


}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // create empty string
    var string = "";
    // loop through object
    for (var key in object) {
        // use typeof to check if the key in object is a string
        if(typeof object[key] === "string")
        // add to string variable i made with a space
   string = string + object[key] + " ";
    } // trim extra spaces
return string.trim();

}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // check for if array using isArray()
      if (Array.isArray(collection)) {
        return "array";
        // test for null and return as null not object
    } else if (collection === null) {
        return;
        // check for date and return as date not object
    } else if (collection instanceof Date) {
        return;
    } 
    else {return typeof collection}
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // use replace() to replace string index 0 to a capital letter
  return string.replace(string[0], string[0].toUpperCase());
}


//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // assign splitString an array of string.split()
    var splitString = string.split(" ");
    // loop through created array
    for (var i = 0; i < splitString.length; i++) {
        // at split string index i, capitalize the first index (0) at given index in loop, and slice
       splitString[i] = splitString[i][0].toUpperCase() + splitString[i].slice(1);
    }// return splitString joined back together with space
    return splitString.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // make name equal to object.name and the character at the first index (0) uppercase and slice the rest
var name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
// return welcome and name with !
return "Welcome " + name + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    // make name equal to the object.name character at index 0 to be uppercasee with toUpperCase() and slice the rest back on
    // make species equal to the object.name character at index 0 to be uppercase with toUpperCase() and slice the rest back on
var name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
var species = object.species.charAt(0).toUpperCase() + object.species.slice(1);
// return name with string "is us" (i included spaces) and species
return name + " is a " + species;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // create variable for object.noises to make it easier on me
    var noises = object.noises;
    //check if noises is undefined or 0 and return no noises
    if(noises === undefined || noises.length === 0) {
    return "there are no noises";
} else { // if not return the noises joined together with a space
    return noises.join(" ");
}
}
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    // check if word is included in string
if (string.includes(word)) {
    return true;
} else { // if word is not in string, return false
    return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // push name to friends array in object
object.friends.push(name);
// return object
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // check for if friends is undefined or is 0
if (object.friends === undefined || object.friends === 0) {
    return false;
    // if name passed into function is included in friends array, return true
} else if (object.friends.includes(name)) {
    return true;
} else { // account for any other instance
    return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
// takes in a name and outputs a list of who they are not friends with
var friendsArray = [];
// loop through array
for (var i = 0; i < array.length; i++) {
    // i created this variable person to help me read it better
    let person = array[i];
    // check if the name passed into the function is not a name in the given friends array
    // and check to make sure the name passed in does not equal the name at the given index from the loop (jimmy !== jimmy)
    if (!person.friends.includes(name) && person.name !== name) {
        // then push to the array
        friendsArray.push(person.name);
    } 
}// return array
return friendsArray;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    // add value to key, if key is not there, adds new key with value
object[key] = value;
// return updated object
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // loop through array 
for (var i = 0; i < array.length; i++) {
    // use delete () to delete string of array at index i in the object
    delete (object[array[i]]);
}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    // use ...new Set to remove duplicate values in array
var unique = [...new Set(array)];
// return new array
return unique;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}