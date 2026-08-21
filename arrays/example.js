// ==========================================
// JavaScript Arrays
// ==========================================

// An array is a special type of object used to store
// multiple values in a single variable.

// Arrays can contain values of different data types.

let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits);


// ==========================================
// Creating Arrays
// ==========================================

// Array literal - most common way

let numbers = [10, 20, 30, 40];


// Using new Array()

let names = new Array("Disha", "Aditi", "Riya");

console.log(names);


// Empty array

let empty = [];


// ==========================================
// Accessing Array Elements
// ==========================================

// Array indexes start from 0.

let fruits2 = ["Apple", "Mango", "Banana"];

console.log(fruits2[0]); // Apple
console.log(fruits2[1]); // Mango
console.log(fruits2[2]); // Banana

// Last element

console.log(fruits2[fruits2.length - 1]); // Banana


// ==========================================
// Changing Array Elements
// ==========================================

let colors = ["Red", "Blue", "Green"];

colors[1] = "Yellow";

console.log(colors);
// ["Red", "Yellow", "Green"]


// ==========================================
// Array Length
// ==========================================

let nums = [10, 20, 30, 40];

console.log(nums.length); // 4

// length gives the number of elements in an array.


// ==========================================
// Adding Elements
// ==========================================

// push()
// Adds elements to the end of the array.

let arr = [1, 2, 3];

arr.push(4);

console.log(arr); // [1, 2, 3, 4]

arr.push(5, 6);

console.log(arr); // [1, 2, 3, 4, 5, 6]


// unshift()
// Adds elements to the beginning.

arr.unshift(0);

console.log(arr); // [0, 1, 2, 3, 4, 5, 6]


// ==========================================
// Removing Elements
// ==========================================

// pop()
// Removes the last element.

let numbers2 = [1, 2, 3, 4];

let removed = numbers2.pop();

console.log(removed); // 4
console.log(numbers2); // [1, 2, 3]


// shift()
// Removes the first element.

let removedFirst = numbers2.shift();

console.log(removedFirst); // 1
console.log(numbers2); // [2, 3]


// ==========================================
// Array Methods: at()
// ==========================================

// at() returns an element at a given index.

let items = ["A", "B", "C", "D"];

console.log(items.at(1));  // B
console.log(items.at(-1)); // D


// ==========================================
// Finding Elements
// ==========================================

// indexOf()
// Returns the index of an element.
// Returns -1 if the element does not exist.

let languages = ["Java", "JavaScript", "Python"];

console.log(languages.indexOf("JavaScript")); // 1
console.log(languages.indexOf("C++")); // -1


// lastIndexOf()
// Returns the last occurrence of an element.

let values = [1, 2, 3, 2, 4, 2];

console.log(values.lastIndexOf(2)); // 5


// includes()
// Checks whether an element exists.

console.log(languages.includes("Java")); // true
console.log(languages.includes("C++")); // false


// ==========================================
// find()
// ==========================================

// find() returns the first element that satisfies
// the given condition.

let numbers3 = [5, 12, 8, 20];

let result = numbers3.find(num => num > 10);

console.log(result); // 12


// ==========================================
// findIndex()
// ==========================================

// Returns the index of the first element
// satisfying the condition.

let index = numbers3.findIndex(num => num > 10);

console.log(index); // 1


// ==========================================
// findLast()
// ==========================================

// Returns the last element satisfying the condition.

let last = numbers3.findLast(num => num > 10);

console.log(last); // 20


// ==========================================
// findLastIndex()
// ==========================================

let lastIndex = numbers3.findLastIndex(num => num > 10);

console.log(lastIndex); // 3


// ==========================================
// Looping Through Arrays
// ==========================================

// for loop

let nums2 = [10, 20, 30];

for (let i = 0; i < nums2.length; i++) {
    console.log(nums2[i]);
}


// for...of

for (let num of nums2) {
    console.log(num);
}


// forEach()

nums2.forEach(num => {
    console.log(num);
});


// ==========================================
// forEach()
// ==========================================

// forEach() executes a function for each element.

let numbers4 = [1, 2, 3];

numbers4.forEach((num, index) => {
    console.log(index, num);
});

// forEach() does not create a new array.
// It is mainly used when we want to perform an action
// for every element.


// ==========================================
// map()
// ==========================================

// map() creates a new array by transforming
// every element.

let numbers5 = [1, 2, 3, 4];

let doubled = numbers5.map(num => num * 2);

console.log(doubled);
// [2, 4, 6, 8]

// Original array remains unchanged.

console.log(numbers5);
// [1, 2, 3, 4]


// ==========================================
// filter()
// ==========================================

// filter() creates a new array containing
// elements that satisfy a condition.

let numbers6 = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers6.filter(num => num % 2 === 0);

console.log(evenNumbers);
// [2, 4, 6]


// ==========================================
// reduce()
// ==========================================

// reduce() reduces an array to a single value.

let numbers7 = [10, 20, 30, 40];

let sum = numbers7.reduce((total, num) => {
    return total + num;
}, 0);

console.log(sum); // 100


// Shorter version

let sum2 = numbers7.reduce((total, num) => total + num, 0);

console.log(sum2); // 100


// ==========================================
// some()
// ==========================================

// some() checks whether at least one element
// satisfies the condition.

let numbers8 = [1, 3, 5, 8];

console.log(numbers8.some(num => num % 2 === 0));
// true


// ==========================================
// every()
// ==========================================

// every() checks whether all elements
// satisfy the condition.

console.log(numbers8.every(num => num > 0));
// true

console.log(numbers8.every(num => num % 2 === 0));
// false


// ==========================================
// sort()
// ==========================================

// sort() sorts the array.

// For strings:

let names2 = ["Disha", "Aditi", "Riya"];

names2.sort();

console.log(names2);


// IMPORTANT:
// Default sort converts elements to strings.

let numbers9 = [10, 2, 30, 4];

numbers9.sort();

console.log(numbers9);
// [10, 2, 30, 4]
// Not numerical sorting.


// Numerical ascending order

numbers9.sort((a, b) => a - b);

console.log(numbers9);
// [2, 4, 10, 30]


// Numerical descending order

numbers9.sort((a, b) => b - a);

console.log(numbers9);
// [30, 10, 4, 2]


// ==========================================
// reverse()
// ==========================================

let letters = ["A", "B", "C"];

letters.reverse();

console.log(letters);
// ["C", "B", "A"]


// ==========================================
// slice()
// ==========================================

// slice() returns a portion of an array.
// It does NOT modify the original array.

let numbers10 = [0, 1, 2, 3, 4, 5];

let part = numbers10.slice(1, 4);

console.log(part);
// [1, 2, 3]

console.log(numbers10);
// [0, 1, 2, 3, 4, 5]


// slice(start, end)
// start is included.
// end is excluded.


// ==========================================
// splice()
// ==========================================

// splice() can add, remove, or replace elements.
// It MODIFIES the original array.

let numbers11 = [1, 2, 3, 4, 5];

numbers11.splice(1, 2);

console.log(numbers11);
// [1, 4, 5]

// First argument = starting index
// Second argument = number of elements to remove


// Adding elements

let numbers12 = [1, 4];

numbers12.splice(1, 0, 2, 3);

console.log(numbers12);
// [1, 2, 3, 4]


// Replacing elements

let numbers13 = [1, 2, 3];

numbers13.splice(1, 1, 20);

console.log(numbers13);
// [1, 20, 3]


// ==========================================
// concat()
// ==========================================

// concat() combines arrays.
// It returns a new array.

let a1 = [1, 2];
let a2 = [3, 4];

let combined = a1.concat(a2);

console.log(combined);
// [1, 2, 3, 4]


// ==========================================
// join()
// ==========================================

// join() converts array elements into a string.

let words = ["Hello", "Disha"];

console.log(words.join(" "));
// Hello Disha

console.log(words.join("-"));
// Hello-Disha


// ==========================================
// split()
// ==========================================

// split() is a String method that can be used
// to convert a string into an array.

let sentence = "JavaScript is easy";

let words2 = sentence.split(" ");

console.log(words2);
// ["JavaScript", "is", "easy"]


// ==========================================
// Array.from()
// ==========================================

// Array.from() creates an array from an iterable
// or array-like object.

let text = "Hello";

let chars = Array.from(text);

console.log(chars);
// ["H", "e", "l", "l", "o"]


// ==========================================
// Array.isArray()
// ==========================================

// Checks whether a value is an array.

console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("Hello"));   // false


// ==========================================
// Destructuring Arrays
// ==========================================

// Destructuring allows us to extract values
// from an array into variables.

let person = ["Disha", 21, "Pune"];

let [personName, personAge, personCity] = person;

console.log(personName); // Disha
console.log(personAge);  // 21
console.log(personCity); // Pune


// Skipping elements

let data = ["A", "B", "C"];

let [first, , third] = data;

console.log(first); // A
console.log(third); // C


// ==========================================
// Spread Operator with Arrays
// ==========================================

// Spread (...) expands array elements.

let firstArray = [1, 2, 3];

let secondArray = [...firstArray, 4, 5];

console.log(secondArray);
// [1, 2, 3, 4, 5]


// Copying an array

let originalArray = [1, 2, 3];

let copiedArray = [...originalArray];

copiedArray.push(4);

console.log(originalArray);
// [1, 2, 3]

console.log(copiedArray);
// [1, 2, 3, 4]


// ==========================================
// Rest Parameter with Arrays
// ==========================================

// Rest (...) collects remaining values into an array.

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));
// 10


// ==========================================
// Nested Arrays
// ==========================================

// Arrays can contain other arrays.

let matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];

console.log(matrix[0][1]); // 2
console.log(matrix[2][0]); // 5


// ==========================================
// Flat()
// ==========================================

// flat() creates a new array by flattening
// nested arrays.

let nested = [1, [2, 3], [4, 5]];

console.log(nested.flat());
// [1, 2, 3, 4, 5]


// ==========================================
// flatMap()
// ==========================================

// flatMap() performs map() and then flattens
// the result by one level.

let numbers14 = [1, 2, 3];

let result2 = numbers14.flatMap(num => [num, num * 2]);

console.log(result2);
// [1, 2, 2, 4, 3, 6]


// ==========================================
// Array-like Objects vs Arrays
// ==========================================

// An array-like object has indexes and a length,
// but it is not actually an array.

// Example:
// {
//     0: "A",
//     1: "B",
//     length: 2
// }

// Array.isArray() can be used to distinguish
// an actual array from other objects.


// ==========================================
// Mutating vs Non-Mutating Methods
// ==========================================

// Methods that MODIFY the original array:

// push()
// pop()
// shift()
// unshift()
// splice()
// sort()
// reverse()


// Methods that generally return a NEW array/value
// without changing the original:

// map()
// filter()
// slice()
// concat()
// flat()
// flatMap()


// ==========================================
// Important Array Methods Summary
// ==========================================

// push()       -> add to end
// pop()        -> remove from end
// unshift()    -> add to beginning
// shift()      -> remove from beginning
// at()         -> access element
// indexOf()    -> find index
// includes()   -> check existence
// find()       -> first matching element
// findIndex()  -> index of first match
// forEach()    -> execute for each element
// map()        -> transform elements
// filter()     -> select elements
// reduce()     -> reduce to one value
// some()       -> at least one matches
// every()      -> all match
// sort()       -> sort elements
// reverse()    -> reverse array
// slice()      -> copy a portion
// splice()     -> add/remove/replace
// concat()     -> combine arrays
// join()       -> array to string
// flat()       -> flatten array
// flatMap()    -> map + flatten
// Array.from() -> create array from iterable
// Array.isArray() -> check if value is an array


// ==========================================
// Interview Questions
// ==========================================

// Q1. What is an array?
// An array is a special object used to store
// an ordered collection of values.

// Q2. Are arrays zero-indexed?
// Yes. The first element is at index 0.

// Q3. Difference between map() and forEach()?
// map() returns a new array.
// forEach() does not return a new array.

// Q4. Difference between slice() and splice()?
// slice() does not modify the original array.
// splice() modifies the original array.

// Q5. Difference between find() and filter()?
// find() returns the first matching element.
// filter() returns all matching elements in a new array.

// Q6. Difference between some() and every()?
// some() checks whether at least one element matches.
// every() checks whether all elements match.

// Q7. Why does [10, 2, 30].sort() not sort numerically?
// By default, sort() compares elements as strings.
// Use (a, b) => a - b for numerical ascending order.

// Q8. How do you copy an array?
// Use the spread operator:
// const copy = [...array];

// Q9. How do you check if a value is an array?
// Use Array.isArray(value).

// Q10. What is the difference between an array
// and an object?
// Arrays are ordered collections accessed mainly
// using numeric indexes, while objects store
// key-value pairs.