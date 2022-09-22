/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumbers(a, b) {
    // Code block
    return a + b;
}
let sum = addTwoNumbers(3, 5)
console.log(sum);

// Arrow Function With Parameters

const addThreeNumbers = (a, b, c) => {
    return a + b + c;
}
let threeSum = addThreeNumbers(1, 2, 3)
console.log(threeSum)

// Single Line Arrow Function With Parameters
// for simple functions, you can put what you want to return after the 
// 'fat arrow' - =>
// if it has more complex logic, you'll need to open curly braces and return
// that way 
// sometimes the part after the => may be wrapped in parenthesis (a + b)

const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(1, 3)
console.log(sum2)

// Implicit Returns
// only one parameter - message -, so you don't need to wrap it in parentheses
const saySomething = message => console.log(message);
saySomething('Hello there!')

// if it doesn't take any parameters, you must use an empty set of parentheses
// to tell JavaScript you are declaring a function
const sayHello = () => console.log('Hello')
sayHello()

// Returning Multiple Lines
// if you want to return mutliple lines you must wrap everything after the
// return keyword (=>) in parentheses

const returnMultipleLines = () => (
    `<p>
        This is a multiline string!
    </p>`
)
// don't forget the second parentheses within the log!
// this is what contains the return 
console.log(returnMultipleLines())

