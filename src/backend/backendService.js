// Setup for Backend






import express from 'express';
let app = express();




// Function that handles the api call and returns result 
export async function fetchAllBooks(usersBookRequestARG){
    
    let userBookRequest = usersBookRequestARG
    let url = `https://openlibrary.org/search.json?q=${usersBookRequestARG}&limit=1`


    let response = await fetch(url)
    let data =  await response.json()

    return(await data)
}

