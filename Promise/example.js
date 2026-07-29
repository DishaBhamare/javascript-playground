// ========================================== 
// Promises in JavaScript 
// ========================================== 
// A Promise is an object that represents the eventual success or failure 
// of an asynchronous operation. 
// States of a Promise: 
// 1. Pending 
// 2. Fulfilled 
// 3. Rejected 
// ------------------------------------------ // Basic Syntax // ------------------------------------------ 
let promise = new Promise(function (resolve, reject) { 
    // either resolve or reject 
}); 
// resolve -> operation completed successfully 
// reject -> operation failed 

// ------------------------------------------ // Example: Fulfilled Promise // ------------------------------------------ 
let successPromise = new Promise(function (resolve, reject) { 
    setTimeout(() => resolve("Done"), 1000); 
}); 

// ------------------------------------------ // Example: Rejected Promise // ------------------------------------------ 
let failedPromise = new Promise(function (resolve, reject) { 
    setTimeout(() => reject(new Error("Whoops!")), 1000); 
}); 

// ------------------------------------------ 
// .then() 
// ------------------------------------------ 
// .then() is used to handle a fulfilled promise. 

Promise.resolve(5) .then(value => { 
    console.log(value); 
});

// Output:
// 5 
// Without .then(), we cannot directly access the resolved value. 
// A promise does not contain the final value immediately. 
// The value becomes available asynchronously, so we use .then() (or await) to access it when it is fulfilled.

// ------------------------------------------ 
// .catch() 
// ------------------------------------------ 
// .catch() is used to handle rejected promises.

new Promise((resolve, reject) => { 
    setTimeout(() => reject(new Error("Whoops!")), 1000); 
    }) 
    .catch(err => console.log(err.message)); 

// Output: 
// Whoops!
// ------------------------------------------ 
// .finally() 
// ------------------------------------------ 
// .finally() runs whether the promise is fulfilled or rejected. 
// It is commonly used for cleanup tasks. 

function setLoading(value) { 
    console.log("Loading:", value); 
} 
    setLoading(true); 
    Promise.resolve("Data loaded") 
    .then(data => console.log(data)) 
    .catch(err => console.log(err)) 
    .finally(() => setLoading(false)); 

// Output: 
// Loading: true 
// Data loaded 
// Loading: false 
// ------------------------------------------ 
// Why finally is useful 
// ------------------------------------------ 
// Without finally, we would repeat cleanup code.

setLoading(true); 
Promise.resolve("Data loaded") 
.then(data => { console.log(data); 
    setLoading(false); }) 
    .catch(err => { console.log(err); 
        setLoading(false); }); 

// finally avoids repeating the same code in both success and failure cases.
//Here setLoading(false) we have to use even it the function succeds or reject so we use finally

// ------------------------------------------
// Promise Chaining
// ------------------------------------------

// Each .then() returns a new promise.

Promise.resolve(2)
    .then(value => value * 2)
    .then(value => value + 1)
    .then(value => console.log(value));

// Output:
// 5

// Error propagation in chaining

// Errors automatically travel down the chain.

Promise.resolve(10)
    .then(value => {
        throw new Error("Something went wrong");
    })
    .catch(err => console.log(err.message));

// Output:
// Something went wrong

// ------------------------------------------
// Interview Questions
// ------------------------------------------

// Q1. What are the states of a Promise?
// Pending, Fulfilled, Rejected

// Q2. Difference between resolve and reject?
// resolve - success
// reject  - failure

// Q3. Why do we use .then()?
// To access the fulfilled value of a promise.

// Q4. Why do we use .catch()?
// To handle errors from rejected promises.

// Q5. Is .finally() mandatory?
// No. It is used for cleanup code that should run in both success and failure cases.