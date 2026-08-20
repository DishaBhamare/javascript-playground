# JavaScript Data Types

## Overview

JavaScript has different data types used to represent numbers, text, logical values, objects, and other kinds of data.

## Concepts Covered

- Number
- BigInt
- String
- Boolean
- Undefined
- Null
- Symbol
- Object
- Arrays
- Functions
- Primitive vs Non-Primitive types
- Immutable primitive values
- Reference values
- `typeof`
- Type conversion
- Truthy and Falsy values
- `==` vs `===`
- Object and reference comparison
- Dynamic typing

## Primitive Data Types

- Number
- BigInt
- String
- Boolean
- Undefined
- Null
- Symbol

## Non-Primitive Data Type

- Object

Arrays and functions are also objects in JavaScript, although functions have a special `typeof` result of `"function"`.

## Key Takeaways

- JavaScript is dynamically typed.
- Primitive values are immutable.
- Objects and arrays are reference values.
- `typeof` can be used to check the type of a value.
- `typeof null` returns `"object"` because of a historical JavaScript quirk.
- Use `Array.isArray()` to check whether a value is an array.
- `===` checks both value and type and is generally preferred over `==`.
- Type conversion can be done using `String()`, `Number()`, and `Boolean()`.

## Folder Structure

```text
datatypes/
├── datatypes.js
└── README.md