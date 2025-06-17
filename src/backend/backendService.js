


// Setup for inital API calling
let url = 'https://openlibrary.org/search.json?q=harry+potter&limit=1'







// Function that handles the api call and returns result 
async function fetchAllBooks(){
    
    let response = await fetch(url)
    let data =  await response.json()

    console.log("function ran!")
    console.log(await data)
}

fetchAllBooks()