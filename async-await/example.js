//----------------------------------
//async - await
//----------------------------------
//---------------async------------------------------
//async before a function means a function always returns a promise ,other values are wrapped inside a promise
async function f(){
    return 1;
}
//Below function returns a resolve promise 
async function f() {
  return 1;
}

f().then(alert); // 1

//It is same as 
async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1

//-------------------------------await-----------------------------------
//Syntax
// works only inside async functions
let value = await promise;
//ex.
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();

//We can replace .then with await
// Execution of the current async function pauses until the promise settles. 
// The rest of the JavaScript program can continue running.

// ---------------------------------- 
// Error handling with try...catch
// ---------------------------------- 
// await throws the rejected promise as an exception, 
// so we use try...catch to handle errors.
async function loadData() { 
    try { 
        let result = await Promise.reject(new Error("Failed to load")); 
        console.log(result); 
    } 
    catch (err) { 
        console.log(err.message); 
    } } 
    
   loadData(); 

// Output: 
// Failed to load

// ---------------------------------- 
// Multiple await statements 
// ---------------------------------- 
async function run() { 
    let a = await Promise.resolve(1); 
    let b = await Promise.resolve(2); 
    console.log(a + b); 
} 

run(); 
    
// Output: 
// 3

// ----------------------------------
// Promise.all with async/await
// ----------------------------------

async function runParallel() {
    let [a, b] = await Promise.all([
        Promise.resolve(10),
        Promise.resolve(20)
    ]);

    console.log(a + b);
}

runParallel();

// Output:
// 30
// Both promises start together.
// This is faster than awaiting them one by one.

// ---------------------------------- 
// Real-world example 
// ---------------------------------- 
async function getUser() { 
    try { 
        let response = await Promise.resolve({ 
            id: 1, 
            name: "Disha" 
        }); 
    console.log(response.name); 

} catch (err) { 

    console.log(err); 
} } 
    getUser(); 
// Output: 
// Disha

// ---------------------------------- 
// Interview Questions 
// ---------------------------------- 
// Q1. What does async do? 
// Makes a function return a promise. 

// Q2. What does await do? 
// Pauses execution of the async function until the promise settles. 

// Q3. Can await be used outside async? 
// No (except top-level await in modules). 

// Q4. How do you handle errors with async/await? 
// Use try...catch. 

// Q5. Is async/await synchronous? 
// No. It is syntax for working with asynchronous promises.

// ---------------------------------- 
// Common Mistake 
// ---------------------------------- 
async function test() { 
    return 5; 
} 
console.log(test()); 
// Output: 
// Promise { 5 } 
// To get the value: test().then(console.log);