//==========================
// Objects in JavaScript
//==========================

//An object is a collection of key-value pairs.
//Keys are called properties and values can be any data type.

//--------------------------------
// Creating Objects
//--------------------------------

//Object literal (most common)

const user = {
  name: 'Disha',
  age: 22,
  isStudent: true
};

console.log(user);

//--------------------------------
// Accessing Properties
//--------------------------------

//1. Dot notation

console.log(user.name); //Disha

//2. Bracket notation

console.log(user['age']);//22

//Bracket notation is useful when:
//1. Property name has spaces
//2. Property name is stored in a variable

const key = 'name';
console.log(user[key]); 

//--------------------------------
// Adding Properties
//--------------------------------

user.city = 'Pune';
console.log(user); //add one more key value pair as city:'Pune'

//--------------------------------
// Updating Properties
//--------------------------------

user.age = 23;
console.log(user); //age:23

//--------------------------------
// Deleting Properties
//--------------------------------

delete user.city;
console.log(user); //city prop will be deleted from obj

//--------------------------------
// Nested Objects
//--------------------------------

const student = {
  name: 'Disha',
  address: {
    city: 'Pune',
    state: 'Maharashtra'
  }
};

console.log(student.address.city); //Pune

//--------------------------------
// Methods in Objects
//--------------------------------

//A function inside an object is called a method.

const person = {
  name: 'Disha',
  greet() {
    console.log('Hello ' + this.name);
  }
};

person.greet(); //Hello Disha

//"this" refers to the current object.

//--------------------------------
// Object.keys()
//--------------------------------

//Returns an array of keys.

console.log(Object.keys(user)); //will write all keys of the object

//--------------------------------
// Object.values()
//--------------------------------

//Returns an array of values.

console.log(Object.values(user)); //will writ all values of all keys inside object

//--------------------------------
// Object.entries()
//--------------------------------

//Returns an array of [key, value] pairs.

console.log(Object.entries(user)); //will return a;; key value pairs inside obj

//--------------------------------
// Looping Through Objects
//--------------------------------

for (let key in user) {
  console.log(key, user[key]);
}

//for...in is used for objects.

//--------------------------------
// Copying Objects
//--------------------------------

//Wrong way

const a = { x: 1 };
const b = a;

b.x = 100;

console.log(a.x); //100

//Both variables point to the same object.

//--------------------------------
// Shallow Copy with Spread
//--------------------------------
//This don't change the value of original obj 
const original = { name: 'Disha', age: 22 };

const copy = { ...original };

copy.age = 30;

console.log(original.age); //22
console.log(copy.age); //30

//--------------------------------
// Merging Objects
//--------------------------------

const obj1 = { a: 1 };
const obj2 = { b: 2 };

const merged = { ...obj1, ...obj2 };

console.log(merged);

//--------------------------------
// Property Override
//--------------------------------

const p1 = { name: 'Disha', age: 22 };
const p2 = { age: 25 };

const result = { ...p1, ...p2 };

console.log(result);

//age becomes 25 because later values overwrite earlier ones.

//--------------------------------
// Object Destructuring
//--------------------------------

const user2 = {
  name: 'Disha',
  age: 22
};

const { name, age } = user2;

console.log(name);
console.log(age);

//--------------------------------
// Renaming While Destructuring
//--------------------------------

const { name: userName } = user2;

console.log(userName);

//--------------------------------
// Default Values
//--------------------------------

const { city = 'Nashik' } = user2;

console.log(city); //Nashik

//--------------------------------
// Checking Property Existence
//--------------------------------

console.log('name' in user2);
console.log('salary' in user2);

//--------------------------------
// Optional Chaining
//--------------------------------

//Prevents errors when a property may not exist.

const employee = {
  company: {
    name: 'ABC'
  }
};

console.log(employee.company?.name);
console.log(employee.address?.city); //undefined

//--------------------------------
// Object.freeze()
//--------------------------------

//Prevents modification.

const config = { theme: 'dark' };

Object.freeze(config);

// config.theme = 'light'; //will not change

console.log(config.theme);

//--------------------------------
// Object.seal()
//--------------------------------

//Allows updating existing properties but not adding or deleting.

const settings = { volume: 50 };

Object.seal(settings);

settings.volume = 80; //allowed
// settings.mode = 'dark'; //not allowed
// delete settings.volume; //not allowed

console.log(settings);

//--------------------------------
// Arrays of Objects
//--------------------------------

const products = [
  { id: 1, name: 'Phone' },
  { id: 2, name: 'Laptop' }
];

console.log(products[0].name);

//Very common in React and APIs.

//--------------------------------
// Common Interview Confusion
//--------------------------------

//Objects are stored by reference.

const objA = { value: 1 };
const objB = objA;

objB.value = 10;

console.log(objA.value); //10

//Use spread operator to create a new object when needed.

//--------------------------------
// Quick Revision
//--------------------------------

//Create
// {}

//Access
// obj.key
// obj['key']

//Add
// obj.newKey = value

//Update
// obj.key = value

//Delete
// delete obj.key

//Copy
// { ...obj }

//Merge
// { ...a, ...b }

//Keys
// Object.keys(obj)

//Values
// Object.values(obj)

//Entries
// Object.entries(obj)

//Destructure
// const { name } = obj

//--------------------------------
// The One Sentence to Remember
//--------------------------------

//A JavaScript object is a collection of key-value pairs, and because objects are stored by reference, we often use the spread operator to create copies instead of modifying the original object.