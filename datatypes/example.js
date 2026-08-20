// ==========================================
// JavaScript Data Types
// ==========================================

// JavaScript has 8 data types.

// Primitive Data Types:
// 1. Number
// 2. BigInt
// 3. String
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol

// Non-Primitive Data Type:
// 8. Object


// ==========================================
// 1. Number
// ==========================================

// Number is used to represent both integer and floating-point numbers.

let age = 21;
let price = 99.99;

console.log(age);       // 21
console.log(price);     // 99.99

// JavaScript does not have separate int and float types.
// Both are of type Number.

console.log(typeof age);   // number
console.log(typeof price); // number


// ------------------------------------------
// Special numeric values
// ------------------------------------------

// Infinity
console.log(1 / 0); // Infinity

// -Infinity
console.log(-1 / 0); // -Infinity

// NaN = Not a Number
console.log("hello" / 2); // NaN

// NaN is still of type Number.
console.log(typeof NaN); // number


// ==========================================
// 2. BigInt
// ==========================================

// BigInt is used to represent integers larger than
// the safe range of the Number type.

// Add n at the end of an integer to create a BigInt.

let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber); // bigint

// BigInt and Number cannot normally be mixed directly.

// let result = 10n + 5;
// Error

// We can convert between Number and BigInt when appropriate.

let a = 10n;
let b = 5n;

console.log(a + b); // 15n


// ==========================================
// 3. String
// ==========================================

// A string represents text.

// Strings can be written using:
// - Double quotes
// - Single quotes
// - Backticks

let firstName = "Disha";
let city = 'Pune';
let message = `Hello`;

console.log(firstName);
console.log(city);
console.log(message);

console.log(typeof firstName); // string


// ------------------------------------------
// String concatenation
// ------------------------------------------

let name = "Disha";
let greeting = "Hello " + name;

console.log(greeting); // Hello Disha


// ------------------------------------------
// Template literals
// ------------------------------------------

// Backticks allow us to insert variables and expressions
// using ${}.

let userName = "Disha";
let userAge = 21;

console.log(`My name is ${userName} and I am ${userAge} years old.`);


// ==========================================
// 4. Boolean
// ==========================================

// Boolean has only two values:
// true
// false

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn); // true
console.log(isAdmin);    // false

console.log(typeof isLoggedIn); // boolean


// Booleans are commonly used in conditions.

if (isLoggedIn) {
    console.log("Welcome back!");
}


// ==========================================
// 5. Undefined
// ==========================================

// A variable that has been declared but not assigned
// a value has the value undefined.

let user;

console.log(user);        // undefined
console.log(typeof user); // undefined


// A function that does not return anything
// also returns undefined.

function test() {
    console.log("Hello");
}

let result = test();

console.log(result); // undefined


// ==========================================
// 6. Null
// ==========================================

// null represents an intentional absence of a value.

let selectedUser = null;

console.log(selectedUser); // null

// IMPORTANT:
// typeof null returns "object".

console.log(typeof selectedUser); // object

// This is a historical JavaScript behavior/quirk.
// null is NOT actually an object.


/*
Difference between undefined and null:

undefined -> value has not been assigned.

null -> value is intentionally set to "nothing".

Example:

let user;
console.log(user); // undefined

let selectedUser = null;
console.log(selectedUser); // null
*/


// ==========================================
// 7. Symbol
// ==========================================

// Symbol is used to create unique identifiers.

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false

// Even though both symbols have the same description,
// they are different and unique values.

console.log(typeof id1); // symbol


// Symbols can be used as object keys.

let userObject = {
    name: "Disha",
    [id1]: 123
};

console.log(userObject[id1]); // 123


// ==========================================
// 8. Object
// ==========================================

// Objects are used to store collections of related data.

let person = {
    name: "Disha",
    age: 21,
    city: "Pune"
};

console.log(person);
console.log(typeof person); // object

// Accessing properties

console.log(person.name); // Disha
console.log(person["age"]); // 21


// ------------------------------------------
// Arrays
// ------------------------------------------

// Arrays are ordered collections of values.

let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits);
console.log(fruits[0]); // Apple

console.log(typeof fruits); // object

// Use Array.isArray() to check whether a value is an array.

console.log(Array.isArray(fruits)); // true


// ------------------------------------------
// Functions
// ------------------------------------------

// Functions are objects in JavaScript,
// although typeof a function returns "function".

function greet() {
    console.log("Hello");
}

console.log(typeof greet); // function


// ==========================================
// Primitive vs Non-Primitive Data Types
// ==========================================

// Primitive values are basic values.

// Primitive:
// Number
// BigInt
// String
// Boolean
// Undefined
// Null
// Symbol

// Objects are non-primitive/reference values.


// ==========================================
// Primitive Values are Immutable
// ==========================================

// Primitive values themselves cannot be changed.

// Example:

let text = "Hello";

text[0] = "Y";

console.log(text); // Hello

// Instead of changing the existing string,
// a new string is created when we assign a new value.

text = "Yellow";

console.log(text); // Yellow


// ==========================================
// Reference Behavior of Objects
// ==========================================

// Objects are reference values.

let person1 = {
    name: "Disha"
};

let person2 = person1;

person2.name = "Aditi";

console.log(person1.name); // Aditi
console.log(person2.name); // Aditi

// Both variables refer to the same object.


// ==========================================
// Copying Objects
// ==========================================

// Spread syntax can be used to create a shallow copy.

let original = {
    name: "Disha",
    age: 21
};

let copy = {
    ...original
};

copy.name = "Aditi";

console.log(original.name); // Disha
console.log(copy.name);     // Aditi


// ==========================================
// typeof Operator
// ==========================================

// typeof is used to determine the type of a value.

console.log(typeof 42);          // number
console.log(typeof 10n);         // bigint
console.log(typeof "Hello");     // string
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object
console.log(typeof Symbol());    // symbol
console.log(typeof {});          // object
console.log(typeof []);          // object
console.log(typeof function(){});// function


// ==========================================
// typeof null Quirk
// ==========================================

// typeof null gives "object".

console.log(typeof null); // object

// This is a historical bug/quirk in JavaScript.
// To check specifically for null:

let value = null;

console.log(value === null); // true


// ==========================================
// Checking Data Types
// ==========================================

let value1 = 100;

console.log(typeof value1); // number

let value2 = "100";

console.log(typeof value2); // string

// Two values can look similar but have different types.


// ==========================================
// Type Conversion
// ==========================================

// JavaScript allows us to convert values from one type
// to another.


/*
String conversion
*/

let number = 123;

let stringNumber = String(number);

console.log(stringNumber);        // "123"
console.log(typeof stringNumber); // string


/*
Number conversion
*/

let str = "456";

let convertedNumber = Number(str);

console.log(convertedNumber);        // 456
console.log(typeof convertedNumber); // number


/*
Boolean conversion
*/

console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean("Hello")); // true
console.log(Boolean(""));      // false


// ==========================================
// Truthy and Falsy Values
// ==========================================

// When JavaScript expects a Boolean,
// values can be converted to true or false.

// Falsy values include:

// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

// Almost everything else is truthy.

if ("Hello") {
    console.log("This runs because the string is truthy.");
}

if (0) {
    console.log("This will not run.");
}


// ==========================================
// Equality and Data Types
// ==========================================

// == performs loose equality.
// It can perform type conversion.

console.log(5 == "5"); // true


// === performs strict equality.
// It checks both value and type.

console.log(5 === "5"); // false

console.log(5 === 5); // true

// Prefer === in most cases because it avoids
// unexpected type conversion.


// ==========================================
// Primitive vs Reference Comparison
// ==========================================

// Primitive values are compared by their value.

console.log(10 === 10); // true
console.log("Hello" === "Hello"); // true


// Objects are compared by reference.

let obj1 = { name: "Disha" };
let obj2 = { name: "Disha" };

console.log(obj1 === obj2); // false

// They contain the same data but are two different objects.

let obj3 = obj1;

console.log(obj1 === obj3); // true

// Both variables refer to the same object.


// ==========================================
// Dynamic Typing
// ==========================================

// JavaScript is dynamically typed.

// A variable can hold different types of values
// at different times.

let data = 10;

console.log(typeof data); // number

data = "Hello";

console.log(typeof data); // string

data = true;

console.log(typeof data); // boolean

// The variable itself does not have a fixed type.
// The current value has a type.


// ==========================================
// Key Points to Remember
// ==========================================

// 1. JavaScript has 8 data types.
// 2. 7 are primitive types.
// 3. Object is the non-primitive/reference type.
// 4. typeof is used to check the type of a value.
// 5. typeof null returns "object" due to a historical quirk.
// 6. Arrays are objects.
// 7. Functions are objects but typeof function returns "function".
// 8. Primitive values are immutable.
// 9. Objects and arrays are reference values.
// 10. JavaScript is dynamically typed.
// 11. Use === for strict equality.
// 12. Use Array.isArray() to check for arrays.