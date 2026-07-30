// A variable is a named storage location used to store data values.
//In js , to create variables we use let keyword
let message;
message = 'Hello'; //Store string Hello in message variable

console.log(message); //print the msg

//We can also directly write
let msg = "Hello World";
console.log(msg); //Hello World
//multiple variables in one line
let name ='Disha', age = 21, greet = 'Hey!';

//--------------------
//var
//--------------------
//In older scripts, you may also find another keyword: var instead of let
//The var keyword is almost the same as let. It also declares a variable but in a slightly different, “old-school” way.
// var is function-scoped and has different behavior from let and const. 
// In modern JavaScript, prefer let and const.

//we can also update the variable
let a = 20;
console.log(a); //20
a = 21;
console.log(a); //21

//We declare variables with same name like 
let message1 = 'Hello';
// let message1 = 'Hey'; //will give an error-message has already been declared

//-----Naming Rules------
// There are two limitations on variable names in JavaScript:
// 1.The name must contain only letters, digits, or the symbols $ and _.
// 2.The first character must not be a digit.
//Variables named apple and APPLE are two different variables.
// There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.

//-------------------
//constants
//-------------------
//To declare a constant (unchanging) variable, use const instead of let
const myBirthday = '18.04.1982';
//if try to update this 
// myBirthday='19.04.2000'  //Error-Assignment to constants

// ---------------------------------- 
// let vs const 
// ---------------------------------- 
// let -> value can be changed 
let count = 1; c
ount = 2; 
// const -> value cannot be reassigned 
const pi = 3.14; 
// pi = 4; //  Error


// ----------------------------------
// const with objects
// ----------------------------------

const user = {
    name: "Disha"
};

user.name = "Alex"; //  Allowed

console.log(user.name);

// Output:
// Alex
// const prevents reassignment of the variable,
// but it does not make the object immutable.


// ---------------------------------- 
// Interview Questions 
// ---------------------------------- 
// Q1. Difference between let and const? 
// let can be reassigned, const cannot. 
// Q2. Can a const object be modified? 
// Yes, the object contents can change, but the variable cannot be reassigned. 
// Q3. Is JavaScript case-sensitive?
// Yes. apple and APPLE are different variables.
