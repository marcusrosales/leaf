


// Setup for inital API calling
let url = 'https://openlibrary.org/search.json'


async function fetchAllBooks(){
    
    let response = await fetch(url)
    let data =  await response.json()

    console.log("function ran!")
    console.log(await data)
}


fetchAllBooks()


