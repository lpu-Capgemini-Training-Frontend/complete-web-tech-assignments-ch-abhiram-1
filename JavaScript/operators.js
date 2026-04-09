//operators
//operators are used to perform operations on variables and values. In JavaScript, there are several types of operators, including:
//uniary operator , binary operator , ternary operator , assignment operator , arithmetic operator , comparison operator , logical operator , bitwise operator , and more.

//01-uniary operator is an operator that takes only one operand and performs an operation on it. For example, the increment operator (++) and decrement operator (--) are uniary operators that increase or decrease the value of a variable by 1, respectively.
let x = 5
console.log(x++) // post-increment operator returns the value before incrementing
console.log(x) // now x is 6

//02-binary operator is an operator that takes two operands and performs an operation on them. For example, the addition operator (+) and multiplication operator (*) are binary operators that add or multiply two values, respectively.
let a = 10
let b = 20

//arthemetic operators are used to perform arithmetic operations on numbers. They include addition (+), subtraction (-), multiplication (*), division (/), modulus (%), exponentiation (**), and increment/decrement (++, --).
console.log(a + b) // addition operator for strings results in concatenation
console.log(a * b) // multiplication operator
console.log(a - b) // subtraction operator
console.log(a / b) // division operator
console.log(a % b) // modulus operator
console.log(a ** 2) // exponentiation operator

let result = "hi" - "hello" // subtraction operator for strings results in NaN (Not a Number) same for multiplication and division operators when applied to strings that cannot be converted to numbers. However, the addition operator can concatenate strings, so "hi" + "hello" would result in "hihello".
console.log(result)

let result2 = false + false // addition operator for boolean values results in 0, true + true results in 2, and true + false results in 1
console.log(result2)

let result3 = 234n + 234n // addition operator for BigInt values results in a BigInt value
console.log(result3)

let marksinfo = {
    math : 50,
    science : 63,
    english : 70
}
let additionofmarks = (marksinfo.math + marksinfo.science + marksinfo.english)/100 // addition operator can also be used to add values from an object
console.log(Math.round(additionofmarks)) // round method is used to round the result to the nearest integer > 0.5 rounds up and < 0.5 rounds down
console.log(Math.ceil(additionofmarks)) // ceil method is used to round the result up to the nearest integer
console.log(Math.floor(additionofmarks)) // floor method is used to round the result down to the nearest integer




//03-ternary operator is an operator that takes three operands and performs an operation on them. It is also known as the conditional operator and is used to evaluate a condition and return a value based on the result of the condition. The syntax for the ternary operator is: condition ? value_if_true : value_if_false
//alternative of decision statement
let age = 18
let isAdult = age >= 18 ? "Yes" : "No"
console.log(isAdult) // output: Yes