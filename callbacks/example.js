// ==========================================
// Callbacks in JavaScript
// ==========================================
// A callback is a function passed as an argument to another function.
// The receiving function can execute the callback later, usually after some task is completed.
function greet(name,callback){
   console.log(`Hello ${name}`);
    callback();
}

function done(){
    console.log("Done");
}
greet("Disha",done);
//Output:  
//Hello Disha   
// Done

//greet("Disha", done);
// Passes the function itself
// greet can call it later.

// greet("Disha", done());
// Executes done() immediately.
// Passes its return value (usually undefined) to greet.

//ex:
function process(callback) { 
    callback(10);
 } 
 process(function(x) { console.log(x * 2); }); //20

// setTimeout places the callback in the task queue.
// JavaScript first finishes the current synchronous code.
// After the call stack becomes empty, the event loop executes the callback.
setTimeout(() => { 
    console.log("A"); 
}, 0); 
console.log("B");   //B  A

//Nested callbacks - calbacks inside callbacks 
//When so many callbacks are inside callbacks it creates callback hell 
//A callback lets us run code after the server response is received, without blocking the rest of the application.
// Callback Hell Example

setTimeout(() => {
    console.log("Step 1");

    setTimeout(() => {
        console.log("Step 2");

        setTimeout(() => {
            console.log("Step 3");
        }, 1000);

    }, 1000);

}, 1000);
// Deep nesting makes code harder to read, debug, and maintain.
// Promises and async/await are used to avoid callback hell.

// -------- Interview Questions --------

// Q1. What is a callback?
// A function passed to another function to be executed later.

// Q2. Difference between callback and calling a function immediately?
// callback -> done
// immediate call -> done()

// Q3. Why are callbacks used?
// To handle asynchronous operations such as timers, API calls, and file reading.

// Q4. What is callback hell?
// Deeply nested callbacks that reduce readability and maintainability.