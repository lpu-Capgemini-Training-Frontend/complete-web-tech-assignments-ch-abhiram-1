//logical operators
//logical operators are used to perform logical operations on values and return a boolean result. 
// In JavaScript, there are three logical operators: AND (&&), OR (||), and NOT (!).
let check = (isSirPresent , isStudentPresent) => {
    if(isSirPresent && isStudentPresent) {
        console.log("class")
    }
    else{
        console.log(" no class")
    }
}
check(true , true)
check(true , false)
check(false , true)
check(false , false)

//logical OR operator (||) returns true if at least one of the operands is true, and false if both operands are false.
let check2 = (isSirPresent , isStudentPresent) => {
    if(isSirPresent || isStudentPresent) {
        console.log("class")
    }
    else{
        console.log(" no class")
    }
}
check2(true , true)
check2(true , false)
check2(false , true)
check2(false , false)

//logical NOT operator (!) returns true if the operand is false, and false if the operand is true. It is used to negate a boolean value.
let isSirPresent = true
console.log(!isSirPresent)

