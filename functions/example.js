//-----------------------------
//Functions
//-----------------------------
//function declarations
function Message() {
  console.log( 'Hello everyone!' );
}
//we can called a function by its name
Message() //Hello everyone!
//function with parameters
// function name(parameter1, parameter2, ... parameterN) {
//  // body
// }

//---------------------
//local variable
//---------------------
//The variable whose scope is only within the function it is declared is called as local variable
//ex.
function add(){
    let a=10;  //Here a and b are local variables
    let b=20;
    console.log(a) //10
    return a+b;
}
add() //30
// console.log(a); //Error:a is not defined
//If we try to print the local varible outside the function we will get error:a is not defined
//But when we print a inside function the output will be 10;

//--------------------------------
//Outer variables/Global variables
//---------------------------------
// Variables declared outside functions are global variables.
//function can use these global variables also 
// They can be accessed from anywhere in the program.
//ex.
let num=11;
function printnum(){
    console.log(num);
}
printnum(); //11

//We can use global variables inside and outside the functions
//But local variables only inside the function they are defined
//ex
let Name = 'Disha';

function showMessage() {
  Name = "Kranti"; // (1) changed the outer variable

  let message = 'Hello, ' + Name;
  console.log(message);
}

console.log( Name ); // Disha before the function call

showMessage();  //Hello Kranti

console.log( Name ); // Kranti, the value was modified by the function

//Parameters in functions
function sub(x,y){
    console.log(x-y);
}
sub(5,3)//2
//Here x and y are parameters of function 
//5,3 values are substituted to x and y and then the subtraction is performed

// -----------------------------
// Return values
// -----------------------------

function multiply(a, b) {
    return a * b;
}

let result = multiply(3, 4);
console.log(result); // 12

// return sends a value back to the place where the function was called.

// ----------------------------- 
// Default parameters 
// ----------------------------- 
function greet(name = "Guest") { 
    console.log("Hello " + name); 
}
 greet();  //Here we have not passed any argument so it took the default one
 // Hello Guest 
 greet("Disha");  //Here we passed the argument so the argument is used
 // // Hello Disha

// ----------------------------- 
// Function expressions 
// ----------------------------- 
const sayHi = function () { 
    console.log("Hi!"); 
}; 
sayHi(); // Hi!
//We store a function inside a variable 
//We can also name a function but while calling we have to call it by where it is store

// ----------------------------- 
// Arrow functions 
// ----------------------------- 
const square = (n) => n * n; 
console.log(square(5)); // 25
//This is the shorter and easier way of writting a function

// -----------------------------
// Function scope
// -----------------------------

let city = "Pune";

function demo() {
    let city = "Nashik";
    console.log(city); // Nashik
}

demo();
console.log(city); // Pune

// This shows local variable shadows the global variable.

// In React, event handlers are often written as arrow functions or function declarations.

// -----------------------------
// Interview Questions 
// ----------------------------- 
// Q1. Difference between parameters and arguments? 
// Parameters are variables in the function definition. 
// Arguments are the actual values passed to the function. 
// Q2. What is a local variable? 
// A variable declared inside a function. 
// Q3. What is a global variable? 
// A variable declared outside all functions. 
// Q4. What does return do? 
// It sends a value back to the caller and stops function execution. 
// Q5. Difference between function declaration and function expression? 
// Declarations are hoisted; expressions are not fully usable before assignment.