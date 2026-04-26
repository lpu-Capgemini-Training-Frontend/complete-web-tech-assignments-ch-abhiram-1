//enum
//PascalCase where the first letter is Uppercase and the first letter of each subsequent word is also uppercase
enum Size {Small, Medium, Large}

let mySize: Size = Size.Medium;

type Employee = {
    readonly id : number,
    name : string,
    age : number,
    department : string 
}

let employee1: Employee = {
    id : 1,
    name : "John Doe",
    age : 30,
    department : "Engineering"
}

//literl types
let age: 2 | 4 = 2; //age can only be 2 or 4

type quantity = 50 | 100;

let quantity1: quantity = 50; //quantity can only be 50 or 100

//union types
let score: number | string = 100; //score can be a number or a string
