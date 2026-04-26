let table = document.getElementById("table")
console.log(table)

let api = 'https://api.escuelajs.co/api/v1/products'
document.getElementById("searchInput").addEventListener("input", fetchData)

// async function fetchData() {
//     let response = await fetch(api);
//     let data = await response.json()
//     console.log(data)

    


//     for(let i=0; i<data.length; i++){
//         let tr1 = document.createElement("tr")
//         tr1.innerHTML = `
//         <td>${data[i].id}</td>
//         <td>${data[i].title}</td>
//         <td>${data[i].price}</td>
//         <td>${data[i].slug}</td>
//         <td>${data[i].description}</td>`
        
//         table.append(tr1)
//     }
// }
// fetchData()   


//search for some specific product and display it in the table

async function fetchData() {
    let search = document.getElementById("searchInput").value

    let response = await fetch(api);
    let data = await response.json()

    let filterData = data.filter((item) => 
        item.title.toLowerCase().includes(search.toLowerCase())
    )

    
    let rows = table.querySelectorAll("tr:not(:first-child)")
    rows.forEach(row => row.remove())

    
    for(let i=0; i<filterData.length; i++){
        let tr1 = document.createElement("tr")
        tr1.innerHTML = `
        <td>${filterData[i].id}</td>
        <td>${filterData[i].title}</td>
        <td>${filterData[i].price}</td>
        <td>${filterData[i].slug}</td>
        <td>${filterData[i].description}</td>`
        
        table.append(tr1)
    }
}


fetchData()