# Variable Scope & Closures

## 📖 Overview

This topic explains how JavaScript manages the visibility and lifetime of variables. It also introduces closures, one of the most important concepts in JavaScript, where an inner function remembers variables from its outer function even after the outer function has finished executing.

---

## 📚 Concepts Covered

- Block Scope
- Function Scope
- Nested Functions
- Lexical Environment
- Closures

---

## 🧠 Key Takeaways

- `let` and `const` are block-scoped.
- Variables declared inside a block cannot be accessed outside that block.
- Nested functions can access variables from their outer functions.
- Every function execution creates its own Lexical Environment.
- A closure allows a function to remember variables from its outer scope even after the outer function has returned.

---

## 💡 Real-World Uses of Closures

- Counters
- Data hiding (private variables)
- Event handlers
- Callbacks
- Function factories

---

## 🎯 Interview Questions

1. What is block scope?
2. What is lexical scope?
3. What is a closure?
4. Why are closures useful?
5. What is the difference between lexical scope and closure?

---

## 📁 Files

- `examples.js` — Code examples for all the concepts covered in this topic.