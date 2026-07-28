// ========================================== 
// Error Handling in JavaScript 
// try • catch • finally • throw 
// ==========================================

//---------try-catch Block-------------
// try...catch is used to handle runtime errors so the program can continue executing gracefully.
//the code inside try is executed ,if no error occurs the try block keeps executing and the catch block is ignored
//If error occurs then the code inside catch block is executed to catch the error.
//ex:
try{
    //code 
    console.log("Start of try block");
    console.log("End of try block run")
}catch(err){
    //error handling
    console.log("Catch block is ignored as no error occured")
}
//ex.2
try{
    console.log("Hello"); //exectues
    hello;  // ReferenceError occurs, so execution jumps to the catch block
    console.log("GoodBye");
}catch(err){
    console.log("Error has occured") //executes
}
//try{...}catch works only for runtime errors

//-----------(err) inside catch------------
//// err is an Error object that contains useful information such as the error name and message.
//ex:
try{
    console.log("Hello")
    undefinedFunc();
} catch(err){
    console.log(err.name); //ReferenceError
    console.log(err.message);//undefinedFunc is not defined 
}

//--------------Throw---------------
//throw is used to create and raise a custom error intentionally.
//This immediately stops the normal flow and sends the error to catch.
function divide(a, b) { 
    try { 
        if (b === 0) {
             throw new Error("Cannot divide by zero"); 
            } 
        return a / b; 
    
    } catch (err) { 
        return err.message; 
    } 
}

console.log(divide(10, 0)); //Cannot divide by zero 
//In above code the normal execution will stop when b is zero and we will throw an error 

//--------------------try…catch…finally----------------------
//We use finally when we want to execute some code even if error exists or not 
//ex 1.
try{
    console.log("Try"); //Executes 
}catch(err){
    console.log("Catch");
}finally{
    console.log("Finally"); //executes
}
//Output: Try Finally
//ex. 2
try{
    console.log("Try"); //Executes 
    helloo;    //error occured
}catch(err){
    console.log("Catch");//executes 
}finally{
    console.log("Finally"); //executes
}
//output : Try Catch Finally 
//Here in ex 2 even if error occured still finally executed 


//------------- Real-world finally example------------
function readData() { 
    console.log("Opening file"); 
    try { 
        throw new Error("Read failed"); 
    } catch (err) { 
        console.log(err.message); 
    } finally { 
        console.log("Closing file"); 
    } 
}
 readData(); //Opening file   Read failed   Closing file

// -------- Interview Question -------- 
// What is the output? 
try { 
    console.log("A");
    throw new Error("Oops"); 
    console.log("B"); 
} catch (err) { 
    console.log("C"); 
} finally { 
    console.log("D"); 
} 
console.log("E"); 
// Output:
 // A 
 // C 
 // D 
 // E 
 // B never executes because throw immediately transfers control to catch. 
 // "Oops" is not printed because err.message is not logged.




