//fetch(api) - The fetch() method is used to make network requests to retrieve resources from a server. 
// It returns a Promise that resolves to the Response object representing the response to the request. 
// The fetch() method can be used to make GET, POST, PUT, DELETE, and other types of HTTP requests.
let api = 'https://api.escuelajs.co/api/v1/products'

function fetchDataFromBackend(){
    let promise = fetch(api)
    console.log(promise) // when we log the promise object, it will be in pending state because the fetch() method is asynchronous and it takes some time to complete the network request.

    promise.then((response)=> response.json().then((data)=>{
        console.log(data) // when the promise is resolved, the then() method is called with the Response object as an argument. We can use the json() method of the Response object to parse the response body as JSON and get the data.
})).catch((error)=>{
    console.log(error) // when the promise is rejected, the catch() method is called with the reason for rejection as an argument.
})  
}

fetchDataFromBackend()

//async/await - for handling asynchronous operations (modern way)
async function getDataFromBackend(){
    try{
        let response = await fetch(api) // the await keyword is used to wait for the promise returned by the fetch() method to be resolved. It can only be used inside an async function.
    let data = await response.json() // the await keyword is used to wait for the promise returned by the json() method to be resolved.
    console.log(data) // when we log the data, it will be the parsed JSON data from the API response.
    }catch(error){
        console.log(error) // if there is an error in the fetch() method or the json() method, it will be caught in the catch block and logged to the console.
    }
}
getDataFromBackend()

//axios - for handling apis (morden way)

//combine both async/await and axios to handle APIs

//HTTPClient - for handling apis