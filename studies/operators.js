/**
* Operators:
*
* 0. JavaScript operators are used to assign values, compare values, perform arithmetic operations, and more.
*
*
*/

// 1. Assignment operators
// = operator assigns value to whatever is on the left based on what is on the right.
let x = 1; 
// x is on the left and is assigned what is on the right, which is 1.

// addition assignment 
// += operator adds the value of whats on the right to whats on the left and assigns the result to the variable
var add = 5
add += 15 // add is now 20

// subtraction assignment
// -= operator subtracts the value of whats on the right to whats on the left and assigns the result to the variable
var subtract = 30;
subtract -= 20; // subtract is now 10

// multiplication assignment
// *= operator multiplies a variable by the value on the right and assigns the result to the variable
var multiply = 11;
multiply *= 3; // mutiply is now 33

// division assignment
// /= operator divides a variable by the value of whats on the right ans assigns the result to the variable
var divide = 100;
divide /= 25 // divide is now 4

// remainder assignment
// %= operator divides a variable by the value on the right and assigns the remainder to the variable
var remainder = 13;
remainder %= 5; // remainder is now 3

// 2. Arithmetic operators
/* Take numerical values and return a single numerical value. 
Arithmetic operators include addition (+), subtraction (-), multiplication (*), and division (/).
*/
// addition
1 + 1; // 2
// strings can also be 'added'
'Y' + 'o'; // Yo

// subtraction
10 - 5; // 5

// division
8/2; // 4

// multiplication
2*2; // 4

// remainder
// (%) operator returns the remainder left over when something is diveded by a second thing. Takes the sign of the dividend.
12 % 5; // since 5 goes into 12 2 times, 2 left over.

// exponentiation 
// (**) operator returns the result of raising the first variable to the power of the second.
5 ** 2 // 10;

// incriment
// (++) adds one to the variable and returns a value.
var a = 5;
a++; // a = 6

// decrement
// (--) operator subtracts one from a variable and returns a value
var b = 25;
b--; // b = 24

// 3. Comparison operators
/* return boolean values (true or false)
*/
// equality operators
// == compares two values that are loosely equal
1 == '1'; // true. while 1 is a number and '1' is a string, they are loosely equal.

// === compares two values that are strictly equal
1 === '1'; // false. unlike before, since 1 is a number and '1' is a string, they are not strictly equal.

// inequality
// != operator returns true if the values are not equal
1 != 21; // true
1 != '1'; // false
1 != 1; // false

// !== returns true if the values are not equal and are not the same type
1 !== '1'; // true
5 !== 55; // true

// greater than
// > operator returns true if the value on the left is greater than what is on the right
200 > 199; // true

// >= returns true if value on left is greater than OR equal to the value on the left
5 >= 5; // true
5 >= 4; // true

// less than
// < operator returns true is the value on the left is less than the right
4 < 5; // true

// <= operator returns true if value on left is less than or equal to right
22 <= 22; // true
22 <= 32; // true

// 4. Logical operators
/* logical operators are used for boolean logic where a boolean value may be returned 
depending on the outcome of an expression.
*/

// Logical not or bang operator
// ! operator displays opposite
var z = 9;
var y = 2;
!(z == y); // true. because z == y is false, the ! operator prints the opposite, so it prints true.

// double ambersan operator
// && operator returns true only if both sides be equal to true
(z < 10 && y > 1); // true. given the variables stated above, z is < 10 and y > 1.

// Logical OR or double pipes operator
// || operator returns true as long as one side is true. it will pick the true side and run code
(z == 5 || y == 5); // false. given the variables stated above, neither z nor y == 5.


// 5. Unary operators
/*A unary operator works on one variable. The unary operators in JavaScript are
Unary plus, Unary minus, prefix / postfix increments, and prefix / postfix decrements.
*/
// Unary plus (+)
// converts an operand into a number
let number = '60';
number = +number; // turns string '60' into number 60

//Unary minus (-)
// converts an operand into a number and negates the value after that.
number = -number; // turns positve 60 from above to -60

//prefix / postfix increments (++)
//adds one to the operand
++number; // like the arithmic operator ++, adds one to the variable. is now 61

//prefix / postfix decrements (–)
// subtracts one from the operand.
--number; // like arithmic operator --, subtracts one from variable. is now 60

// 6. Ternary operator
/* The only JavaScript operator that takes three operands.
Has a similar function as an if, else if, else statement:
a condition followed by a question mark (?), 
then an expression to execute if the condition is true followed by a colon (:), 
and then an expression to execute if the condition is false. 
*/
function ternaryEx(value) {
    var condition = value ? value.condition : "No";
    return "Does this pass?" + " " + condition;
}

console.log(ternaryEx({condition: "Yes"})); // "Does this pass? Yes"
// code checked for true statement and returned true condition
console.log(ternaryEx(null)); // "Does this pass? No"
// code checked for false statement and returned false condition

