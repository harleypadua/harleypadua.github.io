// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-harleypadua");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // using filter function, find # of male customers, assign to a variable
   let arrayOfMales = _.filter(array, function(customerObject, i, a){
       // return the key of gender that is set to male
        return customerObject.gender === "male";
    });
    //return number of indexes in the array
return arrayOfMales.length;
};

var femaleCount = function(array) {
    // using reduce, find # of female customers and return the function call
    return _.reduce(array, function(seed, currentObj, i){
        // check if the key of gender is set to female
        if (currentObj.gender === "female"){
            // return seed incremented by 1
          return  seed = seed + 1;
        }
        // if no females during function call, still return seed so we don't get undefined
        return seed;
    }, 0); // 0 is the starting seed
};

var oldestCustomer = function(array){
    // create empty array
    var ageArr = [];
    // loop through array to access age property
    for (let i = 0; i < array.length; i++) {
        // add elements of name and age to new array
         ageArr.push([array[i].age, array[i].name]);
    } // sort array from oldest to youngest order
    ageArr.sort(function(a, b) {return b[0] - a[0]});
    // return the first element of array which should be oldest customer
    return (ageArr[0][1]);
};

var youngestCustomer = function(array){
    // create empty array
    var youngest = [];
    // loop through array
    for (let i = 0; i < array.length; i++) {
        // push elements of name and age into new array
        youngest.push([array[i].age, array[i].name]);
    } // sort elements from youngest to oldest
    youngest.sort(function(a, b) {return a[0] - b[0]});
    // return the first element of new array which should be youngest customer
    return (youngest[0][1]);
};

var averageBalance = function(array){
    // create empty array called balanceArr
   var balanceArr = [];
   // create variable called money to represent the value of balance
   var money;
   var toNum;
   // loop through given array using each
   _.each(array, function(element, index, array){
       // assign the balance at each iteration to money variable
       money = element.balance;
       // remove non numerical characters from the strings
       money = money.replace('$', '').replace(',', '');
       // change the string values of array to numerical values with parseFloat
       toNum = parseFloat(money);
       // push the result of using parseFloat on money variable to balanceArr
       balanceArr.push(toNum);
   }); // create average variable set to the first index of balanceArr
      var average = balanceArr[0];
      // loop through balanceArr starting at 1 so 0 isnt counted twice
for (var i = 1; i < balanceArr.length; i++) {
    // reassign average to average plus each element of balanceArr which will be total of all balances
    average = average + balanceArr[i];
}// return the average divided by the total number of balances to give the average of all balances
   return (average / balanceArr.length);
};

var firstLetterCount = function(array, letter) {
    // use filter on array to create new array called nameArr 
    let nameArr = _.filter(array, function(customerObject, i, a) {
        // return the result if the first letter of the name matches the given letter, using .toUpperCase for easy comparison
        return customerObject.name[0] === letter.toUpperCase();
    }); // return number of names that match the letter
    return nameArr.length;
};

var friendFirstLetterCount = function(array, customer, letter) {
    letter = letter.toUpperCase(); // (converted to uppercase for easy comparison)
    // create empty array
  let friendsArr = [];
  // use each to loop through array
  _.each(array, function(element, index, arr){
      // if given customer matches a customer name in the array, loop through the friends of that customer
      if(element.name === customer) {
          for (var i = 0; i < element.friends.length; i++) {
              // push the first letter of friends name to friendsArr
              friendsArr.push(element.friends[i].name[0]);
          }
      }
  });// create variable for number of friends
   let numOfFriends = 0;
   // if the friendsArr includes the given letter, use each to loop through friendsArr
   if (friendsArr.includes(letter)){
       _.each(friendsArr, function(element, index, arr){
           // if the element in friendsArr matches the letter, add 1 to numOfFriends
           if (element === letter) {
               numOfFriends++;
           }
       });
   }// return result
   return numOfFriends;
};

var friendsCount = function(array, name) {
    // create empty array
    let friends = [];
    // use each to loop through each customer
    _.each(array, function(element, index, arr) {
        // if customer is not the given customer
        if (element.name !== name) {
           // loop through the customers friends
           for (let i = 0; i < element.friends.length; i++){
               // if friends list includes given customers name
               if (name === element.friends[i].name){
                 // add customer to friendslist
                 friends.push(element.name);
               }
           }
        } 
    }); // return result
    return friends;
};

var topThreeTags;

var genderCount = function(array, object){
    //create variables for each gender count
    var maleCount = 0;
    var femaleCount = 0;
    var nbCount = 0;
    //create gender return object
    var genderReturn = {
        "male": 0,
        "female": 0,
        "non-binary": 0
    };
    //use reduce to retrieve each gender number of males
    _.reduce(array, function(seed, currentObject, idx){
        if(currentObject.gender === "male"){
            maleCount++;
        }
    });
    //females
     _.reduce(array, function(seed, currentObject, idx){
        if(currentObject.gender === "female"){
            femaleCount++;
        }
    }, 0);
    //non binarys
     _.reduce(array, function(seed, currentObject, idx){
        if(currentObject.gender === "non-binary"){
            nbCount++;
        }
    });
    //assign genderReturn keys to the gender counts
    genderReturn["male"] = maleCount;
    genderReturn["female"] = femaleCount;
    genderReturn["non-binary"] = nbCount;
    //return the result
    return genderReturn;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
