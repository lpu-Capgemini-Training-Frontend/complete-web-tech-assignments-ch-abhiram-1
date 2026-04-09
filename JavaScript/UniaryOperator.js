//uniary operators
//uniary operators are operators that take only one operand and perform an operation on it.
//for example, the increment operator (++) and decrement operator (--) are uniary operators that increase or decrease the value of a variable by 1, respectively.

let x = 5
console.log(x++) // post-increment operator returns the value before incrementing
console.log(x) // now x is 6

let a = 20
console.log(++a) // pre-increment operator returns the value after incrementing, so it first increments a to 21 and then returns 21
console.log(a) // now a is 21


let y = 10
console.log(--y) // pre-decrement operator returns the value after decrementing, so it first decrements y to 9 and then returns 9
console.log(y) // now y is 9

let z = 15
console.log(z--) // post-decrement operator returns the value before decrementing, so it first returns 15 and then decrements z to 14
console.log(z) // now z is 14


//assignment operator is an operator that assigns a value to a variable. 
// The most common assignment operator is the equal sign (=), which assigns the value on the right to the variable on the left. 

// There are also compound assignment operators, such as +=, -=, *=, /=, and %=.
let num = 10
num += 5 
console.log(num)
num -= 3 
console.log(num) 
num *= 2 
console.log(num)
num /= 4 
console.log(num)
num %= 4
console.log(num)