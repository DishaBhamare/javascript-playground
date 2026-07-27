// ==========================================
// Variable Scope & Closures
// ==========================================

// ==========================================
// 1.Code Blocks
// ==========================================
// Variables declared with let and const are block-scoped.
// They can only be accessed inside the block where they are declared.
{
    let msg="Hello"; //it is visible inside block only 
    console.log(msg); //Hello
}
console.log(msg) //Error

// The same rule applies to if statements, for loops, while loops, etc.
//ex:
for(let i=0;i<2;i++){
    console.log(i); //0 1 
}
console.log(i);  //Error ,no such variable

// ==========================================
// 2. Nested Functions
// ==========================================
// A nested function is simply a function declared inside another function.
// The inner function can access variables declared in its outer function. 
//ex. lets create a counter function and return a new function inside it which will do count++ when called 
function makeCount(){
    let count=0;

    return function(){
        return count++; //it will access the count variable from its outer function
    };
}
let counter=makeCount();  //whenever counter() will be called it will make count+=1
console.log(counter());//0
console.log(counter());//1
console.log(counter());//2

// ==========================================
// 3. Lexical Environment
// ==========================================
// Every time JavaScript executes code, it creates a Lexical Environment.
// The global code has a Global Lexical Environment.
// Every function call creates its own Lexical Environment.
// If a variable isn't found in the current environment,
// JavaScript looks in the outer environment.

function makeCounter() {
  let count = 0;

  return function() {
    return count++;   //this function will take count variable from the its lexical enviornment which will have variable count so it will take that variable count from its outer lexical environment
  };
}

let counter2 = makeCounter();

// ==========================================
// Interview Question
// ==========================================

// Q. Why does the inner function remember the value of 'count'
// even after makeCount() has finished executing?

// Answer:
// Because the returned function forms a closure.
// It keeps a reference to the Lexical Environment
// where 'count' was created.
