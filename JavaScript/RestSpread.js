//Rest and Spread Operators
//Rest Operator
//The rest operator allows us to represent an indefinite number of arguments as an array. It is denoted by three dots (...).


function recieveValues(a,b,c, ...d){
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
}

recieveValues(10,20,30,10,30,40,50)


//Spread Operator
//The spread operator allows us to expand an iterable (like an array) into individual elements. It is also denoted by three dots (...).
//it is used to combine arrays or to pass elements of an array as individual arguments.
let arr1 = [10,20,30]
let combinedArr = [...arr1,40,50,60]
console.log(combinedArr)

//spread operator in an object
let obj1 = {name: "Abhiram", age: 25}
let obj2 = {...obj1, city: "Hyderabad"}
console.log(obj2)


//Destructuring in javascript - array and object destructuring
//destructuring is a convenient way of extracting multiple values from data stored in objects and arrays. 
// It allows us to unpack values from arrays or properties from objects into distinct variables.

let arr2 = ["abhi","ram","chandra"]
let info = {
    name: "Abhi",
    city: "Hyderabad",
    age: 25
}

let [firstName, middleName, lastName] = arr2 //firstName, middleName, lastName are let variables
console.log(firstName)
console.log(middleName)
console.log(lastName)

let [stu1, ...rest] = arr2 //stu1 is the first element of the array and rest is an array that contains the remaining elements
console.log(stu1)
console.log(rest)

let {name, city, age} = info //name, city, age are let variables
console.log(name)
console.log(city)
console.log(age)