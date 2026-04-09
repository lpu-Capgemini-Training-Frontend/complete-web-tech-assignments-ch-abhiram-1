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

//function expression is a function that is assigned to a variable. It can be named or anonymous. It can be used as an argument to another function or returned as a value from another function.
let funexp = function hello(name) {
    console.log("Hello, " + name + "!");
}
funexp("Dingaa")

//ananymous function is a function that does not have a name and is usually assigned to a variable or passed as an argument to another function
let ananymousfun = function(name) {
    console.log("Hello, " + name + "!");
}
ananymousfun("Dingaa")

//Arrow function is a shorter syntax for writing functions in JavaScript. 
//minimalistic syntax and does not have its own this, arguments, super, or new.target. It is best suited for non-method functions and cannot be used as constructors.
//no function keyword, no curly braces, and no return statement for single expression functions. For multiple statements, curly braces and an explicit return statement are required.
let arrowfun = () => 24
console.log(arrowfun())

let arrowfun2 = (a,b) => a+b
let resultfromarrowfun2 = arrowfun2(5,10)
console.log(resultfromarrowfun2)

const arrowfun3 = () => 45 + + "45"
console.log(arrowfun3())

const arrowfun4 = () => "45" +  45 // concatenation of string and number results in a string
console.log(arrowfun4())

const arrowfun5 = value => value * 2 // if there is only one parameter we can omit the parentheses
console.log(arrowfun5(5))


const arrowfun6 = (a,b) => {
    console.log(a)
    console.log(b)
    return a+b
}
let res = arrowfun6(5,10)
console.log(res)


//high order function is a function that takes another function as an argument or returns a function as a result
function higherOrderFunction(val1, val2, callbackfun) {
    return callbackfun(val1, val2)
}

//calculator using higher order function
//addition, subtraction, multiplication, division, modulus, concatenation of strings using higher order function
let resultSum = higherOrderFunction(5, 70, (a,b) => a+b)
console.log(resultSum)

let resultSub = higherOrderFunction(70,10, (a,b) => a-b)
console.log(resultSub)

let resultMul = higherOrderFunction(5,10, (a,b) => a*b)
console.log(resultMul)

let resultDiv = higherOrderFunction(70,10, (a,b) => a/b)
console.log(resultDiv)

let resultMod = higherOrderFunction(70,10, (a,b) => a%b)
console.log(resultMod)

let resultConcat = higherOrderFunction("Dingaa ", "Tingaa", (a,b) => a.concat(b))
console.log(resultConcat)


//recursive function
//if a function calls itself then it is called a recursive function. 
function factorial(n) {
    if(n === 0) {
        return 1
    }
    return n * factorial(n-1)
}
console.log(factorial(5))

function sumOfaDigit(n){
    if(n < 0) {
        return 0
    }
    return n+sumOfaDigit(n-1)

}
console.log(sumOfaDigit(5))

