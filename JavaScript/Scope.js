//Global scope - let , var , const
//Fuction scope - Applies ONLY to var (let ,const)
//Block scope - let , const

var msg = "Hello World" // global scope
function greet() {
    var msg = "Hello, Function Scope!" // function scope
    console.log(msg) // function scope  
}
greet()
console.log(msg) // global scope

if (true) {
    let blockMsg = "Hello, Block Scope!" // block scope
    var blockMsg2 = "Hello, Block Scope with var!"
    console.log(blockMsg) // block scope
}

console.log(blockMsg2) // function scope, var ignores block scope
//Special Case: var ignores block scope