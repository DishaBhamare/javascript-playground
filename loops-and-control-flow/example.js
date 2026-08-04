//==========================
// Loops
//==========================
//---------------------
// For Loop
//---------------------
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//Output:
// 0
// 1
// 2
// 3
// 4
//here loop will start from zero and will run till 4 because we have given condition i<5
//And after every iteration i will be incremented by 1 because of i++
//The current value of i will be printed in each iteration.

//--------------------
// While Loop
//--------------------
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}
//Output:
//0
//1
//2
//In while loop, we have to initialized the variable before the loop 
//and we have to increment the variable inside the loop otherwise it will run infinitely
//Here we initialized i=0 and we have given condition i<3 so loop will run till 2 
//and after every iteration i will be incremented by 1 because of i++

//--------------------
// Do-While Loop
//--------------------
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 3);
//Output:
// 0 
// 1 
// 2
//In do-while loop, we have to initialize the variable before the loop
//and we have to increment the variable inside the loop
//and we have to give condition in while statement
//Here we initialized j=0 and we have given condition j<3 so loop will run till 2
//In do while loop the code block will be executed at least once 
//even if the condition is false because the condition is checked after the code block is executed

//-------------------
// For...in Loop
//-------------------
let user = {name: "Alice", age: 25, city: "New York"};
for (let key in user) {
    console.log(key + ": " + user[key]);
}
//for...in is mainly used for objects.
//In for...in loop, we can iterate over the properties of an object
//Here we have an object user with properties name, age and city
//In each iteration, key will be assigned the property name 
//and we can access the value of the property using user[key]

//---------------------
// For...of Loop
//---------------------
let numbers = [10, 20, 30];
for (let num of numbers) {
    console.log(num);
}
//For arrays, for...of is usually preferred.
//For...of loop is used to iterate over iterable objects like arrays, strings, maps, sets etc.
//Here we have an array numbers with values 10, 20 and 30
//In each iteration, num will be assigned the value of the current element in the array

//for...of gives values.
//for...in gives keys or indexes.
// Example:
//Array: [10,20,30]
//for...in  → 0,1,2
//for...of  → 10,20,30

//-------------------
// Nested Loops
//-------------------
// Nested loops are loops inside another loop
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
//Output:
// i: 0, j: 0
// i: 0, j: 1
// i: 1, j: 0
// i: 1, j: 1
// i: 2, j: 0
// i: 2, j: 1
//In nested loops, the inner loop will run completely for each iteration of the outer loop
//Here we have an outer loop with variable i and an inner loop with variable j
//so for i=0 the inner loop will run for j=0 and j=1 and same for i=1 and i=2

//-------------------
// Break and Continue
//-------------------
//break
for(let i=0; i<5; i++){
    if(i===3){
        break;
    }
    console.log(i);
}
//Output:
// 0
// 1
// 2
//In the above example, when i becomes 3, the break statement will be executed and the loop will terminate
//So the output will be 0, 1 and 2
//We use break statement to exit the loop when a certain condition is met

//continue
for(let i=0; i<5; i++){
    if(i===3){
        continue;
    }
    console.log(i);
}
//Output:
// 0
// 1
// 2
// 4
//In the above example, when i becomes 3, the continue statement will be executed and the current iteration will be skipped
//So the output will be 0, 1, 2 and 4
//We use continue statement to skip the current iteration of the loop when a certain condition is met
//and the loop will continue with the next iteration

//-------------------
// Infinite Loops
//-------------------
//An infinite loop is a loop that never ends
//It can be caused by a condition that is always true or by not incrementing the loop variable
//We should avoid infinite loops as they can cause the program to crash or hang
//Ex.
// while(true){
//     console.log("This is an infinite loop");
// }
//This loop will never stop because condition is always true

//-------------------
//Conditional Loops
//-------------------
//Conditional loops are loops that run based on a certain condition
//We can use if-else statements inside loops to create conditional loops
//Ex.
for(let i=0; i<5; i++){
    if(i%2===0){
        console.log(i + " is even");
    }else{
        console.log(i + " is odd");
    }
}
//Output:
// 0 is even
// 1 is odd
// 2 is even
// 3 is odd
// 4 is even
//In above example we will check if condition is true or false 
//and based on that we will print whether the number is even or odd

//-------------------
// Ternary Operator
//-------------------

//Ternary operator is a short form of if-else statement.
//Syntax:
// condition ? valueIfTrue : valueIfFalse

let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

//Output:
// Adult

//If the condition is true, the value before : will be returned.
//If the condition is false, the value after : will be returned.

//Example with even or odd
let num = 7;
let type = num % 2 === 0 ? "Even" : "Odd";
console.log(type);

//Output:
// Odd

//Ternary operator is useful for simple conditions.
//For complex logic, normal if-else is usually more readable.
