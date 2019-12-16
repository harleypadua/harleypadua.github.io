/**
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// The difference between var, let, and const //

// 1. var
/* var is a variabe that can be declared in any scope. However, if declared in a function, 
it is locked to that scope */
function getAge(){
    var num = 24;
}
// console.log(num) <-- num is not defined because it is locked to the function scope

// 2. let
/* let is a block scope local variable, meaning that it cannot be accessed outside
of the code block it is declared in*/
if (true) {
    let age = 27;
}
// console.log(age); <-- reference error, age is not defined since it is locked in the code block scope!
// let can be reassigned...
let age = 24;
age = 25;
// but, unlike var, CANNOT be redeclared
// var age = 27 <-- prints refernce error

// 3. const
/* const are block scoped, and cannot be redeclared or reassigned */
if (true){
    const cat = 'Maine Coon';
}
//console.log(cat) <-- prints reference error
//const cat = 'Sphinx' <-- prints refernce error

// Hoisting //
/* no matter where functions and variables are declared, 
they are moved to the top of their scope regardless of whether their scope is global or local.
this is called hoisting! */
console.log(dog); // prints undefined
// here, the variable is declared after the variable is logged to the console, but no error!
var dog = 'German Shepard';
/* However, even though let and const are 'hoisted', they cannot be accesed
before the line they are declared */

// console.log(animal); <-- throws refernce error because animal has not been defined until line 74
const animal = 'bird';
