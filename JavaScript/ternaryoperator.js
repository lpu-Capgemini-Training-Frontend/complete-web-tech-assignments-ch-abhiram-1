//ternary operator is an operator that takes three operands and performs an operation on them. 
// It is also known as the conditional operator and is used to evaluate a condition and return a value based on the result of the condition. 
// The syntax for the ternary operator is: condition ? value_if_true : value_if_false
//alternative of decision statement
//control statement - Asynchronous Programming

//decision making statements are used to perform different actions based on different conditions. 
// They include if statement, if...else statement, if...else if...else statement, switch statement, and ternary operator.
//Nested if statement
let Class = true
let present = true
if (Class) {
    if (present) {
        function attendClass() {
            console.log("Attending class")
        }
        attendClass()
    }
    console.log("Class is going on")
}

//ternary operator is a shortest form of decision making.
let age = 18
let isAdult = age >= 18 ? "Yes" : "No"
console.log(isAdult)


//JavaScript engine
//it has Global Execution Context (GEC) , call stack.
//In GEC we have declaration phase and execution phase. 
//In declaration phase, the variables and functions are hoisted and memory is allocated for them. 
// In execution phase, the code is executed line by line and the values are assigned to the variables. 
// The call stack is a data structure that keeps track of the function calls in a program. 
// When a function is called, it is added to the call stack, and when it returns, it is removed from the call stack. If there are too many function calls and the call stack exceeds its limit, it results in a stack overflow error.
//Temporal Dead Zone (TDZ) is a behavior in JavaScript where variables declared with let and const are not accessible before they are declared.




//Nested Functions
//A nested function is a function that is defined inside another function. 
// The inner function has access to the variables and parameters of the outer function, and it can also access the global variables. 
// The inner function can be called from within the outer function, and it can also be returned as a value from the outer function.

function parentFunction(a,b) {
    return function childFunction(c,d) {
        return (c+d)+(a+b)
    }
}
//closure is a feature in JavaScript where an inner function has access to the variables and parameters of its outer function, even after the outer function has returned. 
// In the above example, the childFunction is a closure that has access to the variables a and b of the parentFunction, even after the parentFunction has returned.
let child = parentFunction(10,20)(20,10) //function curying
console.log(child)