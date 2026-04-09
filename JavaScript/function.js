//it is designed to perform some operations
//function is a block of code that can be reused and executed when called
//below is the simple function that prints "Hello, World!" to the console when called
//simple function / named function
function greet() {
    console.log("Hello, World!");
}

//calling the function
greet()

//types of functions
//two types of functions in JavaScript--> parameterized function and non-parameterized function
//parameterized function is a function that takes parameters as input and performs some operations on them
function add(a,b) {
    return a+b
}
console.log(add(5,10))

//arguments function is a function that can take any number of arguments as input and performs some operations on them
function sum() {
    console.log(arguments) // arguments is an array-like object that contains all the arguments passed to the function
}
sum(1,2,3,4,5)