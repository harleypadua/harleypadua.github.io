/**
* Functions:
*
* 0. A function is a type of data holding a code block designed to perform a particular task. 
* You can use the same code many times with different arguments, to produce different results. 
* However, Functions return a single output. 
* 
* 1. They are defined with the function keyword, followed by a name, followed by parentheses (). 
* Inside the parentheses, you can include parameters, or what arguments and how many may be passed into the function. 
* The code to be executed by the function is placed inside curly brackets {}.
* 
* 2. There are two parts to using functions: declaration and invocation.
* 
* 3. Functions, like variables, are hoisted to the top of their scope. 
* Scope is very important when pertaining to functions. Functions can modify variables in the global scope (global variables),
* but you CANNOT access variables defined in a function in the global scope. This is because those variables become LOCAL to the function.
* Make sure that if you want to use a variable later in your code that you are not declaring them inside a function.
* 
* 4. Whether or not you want a function to take inputs or give outputs is optional. Functions, by default, return undefined.
* 
*/

// Decleration
/* using the keyword function, building a function looks like this: */

function exampleFunction(par1, par2) {
    // code block here
}
/* in this example, the function can take in 2 parameters, seperated by commas. 
name these something easy to understand so its clear what needs to go within them. */

// Invocation
/* to use the function you create, you must invoke or call it. to do so, use the name followed by parenthesis with the parameters
you would like to pass into the function */

function subtract(num1, num2) {
    return num1 - num2; // important to note that when a function reaches a return statement, it will stop executing.
}

subtract(27, 3); // prints 24
/* The above example is a named function and is hoisted to the top of its scope, meaning that it can be used in the program
before it was defined. So instead of calling the function after i defined it, i could have called it before and 24 would still print. */

// Assigning functions to a variable? You can do that! 
let sum = multiply(17, 6); 
// here, the output of the function multiply with these arguments is assigned to a variable called sum
console.log(sum); // prints 102 since functions are hoisted to the top of the global scope

function multiply(num1, num2) { 
    // and here is an example of a function being defined AFTER it is called!
    return num1 * num2;
}

// functions stored in variables do not need names, however. This is what is called a function expression.
var x = function (a, b) {
    return a * b;
    
};
// this allows us to create functions on the fly. to invoke a function expression, since it has no name, simply use the variable.

// Closures
/* A closure is an inner function that has access to the outer variables, depending on scope.
It has access to its own scope (variables defined between its curly brackets), 
it has access to the outer function’s variables, and it has access to the global variables.

You create a closure by adding a function inside another function.
*/
function yourName (firstName, lastName) {
var nameIntro = "Your name is ";
    // this inner function has access to the outer function's variables, including the parameter
function makeFullNameIntro () {   // i dont need inputs here. inner function has access to outer function variables  
return nameIntro + firstName + " " + lastName;
}

return makeFullNameIntro();
}

yourName ("Bernie", "Sanders"); // Your name is Bernie Sanders