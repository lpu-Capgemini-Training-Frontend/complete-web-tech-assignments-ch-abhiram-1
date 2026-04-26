//asynchronous 
//setInterval() and setTimeout() are two commonly used functions in JavaScript for handling asynchronous operations.

//setInterval(task,time)
let count = 0
const intervalId = setInterval(() => {
    console.log("Hello, World!");
    count++
    if(count === 5) {
        clearInterval(intervalId) // clearInterval() is a function that takes the interval ID returned by setInterval() and stops the execution of the callback function at the specified intervals.
    }
}, 2000) // setInterval() is a function that takes two arguments: a callback function (task) and a time interval in milliseconds. 
// It executes the callback function repeatedly at the specified time interval until it is stopped using clearInterval().


console.log("This will be printed immediately") // this will be printed immediately, while the setInterval() will print "Hello, World!" every 2 seconds.

setTimeout(()=>{
    console.log("settimeout ")
},4000) // setTimeout() is a function that takes two arguments: a callback function (task) and a time interval in milliseconds.

// setTimeout(()=>{
//     console.log("settimeout ")
// },4000,2000) // the third argument is an optional parameter that can be passed to the callback function when it is executed. 
// In this case, the value 2000 will be passed as an argument to the callback function when it is executed after 4 seconds. 

//setTimeout --> Executes ONLY ONCE after a delay
//setInterval --> Executes REPEATEDLY at a fixed interval

function add(a,b){
    return new Promise((resolve,reject)=>{
        if(typeof a !== 'number' || typeof b !== 'number'){
            reject('not a number')
        }

        let c = a+b
        resolve('sum '+c)
    })
}

add(4,5).then(res=>console.log(res)).catch(err=>console.log(err))
add('qwe','wsf').then(res=>console.log(res)).catch(err=>console.log(err))

