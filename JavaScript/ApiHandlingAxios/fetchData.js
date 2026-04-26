let api = "https://api.github.com/users"
async function fetchData(){
    let data = await axios.get(api) // the axios.get() method is used to make a GET request to the specified API endpoint. It returns a promise that resolves to the response data from the API. 
    // The await keyword is used to wait for the promise to resolve before proceeding with the next line of code.
    console.log(data)
}
fetchData()