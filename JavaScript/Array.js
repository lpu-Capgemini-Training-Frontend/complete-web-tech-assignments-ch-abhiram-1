let array = [true,"Dingaa",123,123456n,Symbol("Tingaa")]
// console.log(array[2])

array.push("Chengaa")
array.unshift("Vignan")
// console.log(array)

array.pop()
array.shift()
// console.log(array)


array.splice(0,0,"Vignan") // adding values 
// console.log(array)

array.splice(0,1)
// console.log(array)

let rcb1 = ["Phil Salt" , "Virat Kohli" , "Rajat Patidar","Jitesh Sharma" , "Kurnal Pandya" , "Hazelwood"]
let rcb2 = ["Chris Gayle" , "AB Devillers" , "KL Rahul" , "M Starc","Umesh Yadav" , "Bhuvaneshwar Kumar"]

let teamrcb = rcb1.concat(rcb2)
// console.log(teamrcb)

// console.log(teamrcb.length)


// let array1 = new array(1,2,3,4)
// let arra = new Array(1,2,3,4,5)
// let arr  = Array.of(1,2,3,4,5)

let marks = [12,30,45,78]

let dingamarks = {
    Maths : 12,
    English : 30,
    Science : 45,
    Social : 78
}

console.log(dingamarks)

let tingaamarks = Object({
    Maths : 12,
    English : 30,
    Science : 45,
    Social : 78
})

console.log(tingaamarks)

//delete value from an object
delete tingaamarks.Maths
console.log(tingaamarks)

//update any values from object
tingaamarks.Maths=60
console.log(tingaamarks)

// object methods
let listofkeys = Object.keys(tingaamarks)
console.log(listofkeys)

let listofvalues =Object.values(tingaamarks)
console.log(listofvalues)