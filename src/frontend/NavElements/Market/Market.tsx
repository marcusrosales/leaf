import NavBar from "../NavBar"
import { useState } from "react"




function MrktBookCard({bookData}){
  if (!bookData) return null;

  let coverID = bookData.cover_i
  let coverURL = coverID ? `https://covers.openlibrary.org/b/id/${coverID}-M.jpg`: ''

  
  return(<>

  <div className="flex gap-5 mt-15 m-5 border-5 p-5 w-136 rounded-4xl bg-lime-100">
    
    {coverURL && <img src={coverURL} alt={bookData.title}
    className="border-2 rounded-lg size-95 w-55 h-90 shadow-2xl/100"/>}

    <div className="flex-col gap-5" >
      <h1 className="text-5xl italic font-serif 
      text-shadow-lg/100  text-shadow-green-900 ">{bookData.title}</h1>
      
      <h1 className="mt-5 text-3xl italic font-serif 
      text-shadow-lg/100  text-shadow-green-900">{bookData.author_name}</h1>

      <button className="mt-5  border-3 rounded-xl text-white border-black font-bold italic h-12 w-50 bg-sky-400
      shadow-lg/100 text-shadow-lg/100"
      onClick={()=> console.log('book added!')}
      >Add To Shelf</button>
    
    </div>
  </div>  </>)}

function Market() {

  let [value, setValue] = useState(null)
  let [bookData,setBookData] = useState(null)

  async function testFetchBook(usersBookRequestARG:string){
    let userBookRequest = usersBookRequestARG
    let url = `https://openlibrary.org/search.json?q=${usersBookRequestARG}&limit=1`

    let response = await fetch(url)
    let data = await response.json()
    setBookData(data.docs[0]);

  }

  async function clickFunc(value){
    console.log("code ran")
    testFetchBook(value)
  }



  return(
    <>

    <NavBar />
      <div className="flex gap-50">
    
      <h1 className="text-9xl/normal italic font-serif font-extrabold
      text-shadow-lg/100  text-shadow-green-900
      ml-5"
     >my market</h1> 

      <div className=" flex mt-15 gap-3 ">
      <input placeholder="Enter Book Name" className="w-170 h-23 text-5xl/normal italic font-serif font-extralight border-4 rounded-3xl
        p-5"
        onChange={(e)=>
          setValue(e.target.value)}>
          </input>
      <button className="w-50 h-23 text-5xl/normal italic font-serif font-extralight border-4 rounded-3xl bg-green-300
      text-shadow-lg/100 text-white border-black"

      onClick={()=>{clickFunc(value)}}

      >Search</button>
        </div>
      </div>

        <div className="flex flex-wrap justify-center">
        <MrktBookCard bookData={bookData} />
        </div>

    </>)
    }





export default Market