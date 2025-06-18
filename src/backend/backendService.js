// Setup for Backend


// setup for server
import express from 'express';
let app = express();


app.listen(3000,()=>{
    console.log("listening on port 3k")
})







// Function that handles the api call and returns result 
async function fetchAllBooks(usersBookRequestARG){

    let userBookRequest = usersBookRequestARG
    let url = `https://openlibrary.org/search.json?q=${usersBookRequestARG}&limit=1`

    let response = await fetch(url)
    let data =  await response.json()

    return(await data)
}

