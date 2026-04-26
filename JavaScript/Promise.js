//A Promise is an object that represents the result of an asynchronous operation — which may complete now, later, or never.

let promise = new Promise((resolve, reject)=>{

    //resolve("Promise resolved successfully") // resolve is a function that is used to resolve a promise. 
    // It takes a value as an argument and returns a promise that is resolved with that value.

    reject("it is rejected")// reject is a function that is used to reject a promise. 
    // It takes a reason as an argument and returns a promise that is rejected with that reason.
})

console.log(promise) // when we log the promise object, it will be in pending state because the promise is neither resolved nor rejected.

promise.then((data)=>{
    console.log(data) // when the promise is resolved, the then() method is called with the resolved value as an argument.
}).catch((error)=>{
    console.log(error) // when the promise is rejected, the catch() method is called with the reason for rejection as an argument.
}).finally((defaultValue)=>{
    console.log("This will be executed regardless of the promise being resolved or rejected") 
    // the finally() method is called after the promise is settled (either resolved or rejected) and it takes a callback function that will be executed regardless of the outcome of the promise.
})