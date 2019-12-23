/**
* Control Flow:
*
* 0. Control Flow allows you to dictate how your code runs under the pretence of whether the condition is true or false (Booleans).
* 
* 1. In order to do this, we use conditional statements. There are three conditional statements that can be chained together,
* which are if, else-if, and else statements. If-else-if-else statements check for the specific condition and run the code block
* if the condition is true.
* 
* 2. In some cases, it may be better to use switch statements. Switch statements can make for a cleaner coding process. 
* The switch expression is evaluated once and the value of the expression is compared with the values of each case.
* If there is a match, the associated block of code is executed.
*
*/

// If Statement
/* using the keyword if starts the chain. the condition being checked must be inside (). If the condition is true,
runs the code in the {}. */
if (true) {
    console.log ('this code ran!');
} // prints 'this code ran!' to the console.

// Else-If Statement
/* using the keyword else if to add another condition to the chain. you can add as many of these as you like to check
infinite conditions! */
if (false) {
    console.log('this code ran!');
} else if (true){
    console.log('this code is the one that ran!'); // prints 'this code is the one that ran!'
}

// Else Statement
/* using the keyword else ends the chain. It runs a code block if all the other conditions are false. 
you can consider the else statement to be the default. Since else statements are defaults, there is no condition to check for. */

if (false){
    console.log('this code ran!');
} else if (false) {
    console.log('this code ran!');
} else {
    console.log('other statements failed, so this code ran'); // prints other statements failed, so this code ran
}

// Switch Statements
/* using the keyword switch starts the chain. unlike if statements, you need a break statement to end a code block. To end the chain, 
use the keyword resault. 

the switch statement looks for a case clause that evaluates to true, similar to if-else-if statements.
this is what tells javascript to run the code block. if false, it moves on to the next case.

When using the break keyword, it breaks out of the switch block, meaning it stops the execution of inside the block.
You do not have to break the last case in a switch block. The block breaks there anyway.

The default keyword specifies the code to run if there is no case match, kind of like the "else" in if-if-else-else statements.
*/

var fruit = "Banana";
switch (fruit) {
  case "Apple":
    console.log('you are the apple of my eye!');
    break;
  case "Banana":
    console.log('i am bananas for you!');
    break;
  default:
   console.log('you are a fruitcake');
} 



