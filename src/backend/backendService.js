// Setup for Backend


// setup for server
import express from 'express';
import cors from 'cors'
let app = express();

app.use(cors());
app.use(express.json());


app.post('/', async (req,res)=>{
    const data = await fetchAllBooks()
    console.log("test") 
    res.send('hello',string)

});


app.get(3000,(req,res)=>{
    
});

app.listen(3000,()=>{
    console.log("listening on port 3k")
    console.log('test')
});







// Function that handles the api call and returns result 
async function fetchAllBooks(usersBookRequestARG){

    let userBookRequest = usersBookRequestARG
    let url = `https://openlibrary.org/search.json?q=${usersBookRequestARG}&limit=1`

    let response = await fetch(url)
    let data =  await response.json()

    return(await data)
}

