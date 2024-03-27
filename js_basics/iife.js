//Immediately Invoked Function Expressions
// An IIFE (Immediately Invoked Function Expression) in JavaScript 
// is a way to create a function expression and immediately execute it.
//  It's often used to create a separate scope for variables and functions to
//   avoid polluting the global scope. 
(function chai(){
    console.log("Hello krish");
})(); 
// where to stop context use ; otherwise anoth iife don't work
(() => {
    console.log("Hello krish two");
})();

((name) => {
    console.log(`Hello ${name}`);
})('Abhi')