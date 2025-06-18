import NavBar from "./NavBar"

import { useState } from "react"





function Market() {
  let [value, setValue] = useState('')
  
  async function testFetchBook(usersBookRequestARG:string){
    let userBookRequest = usersBookRequestARG
    let url = `https://openlibrary.org/search.json?q=${usersBookRequestARG}&limit=1`

    let response = await fetch(url)
    let data = await response.json()
    console.log(data.docs[0])
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
          setValue(e.target.value)
        }></input>




      <button className="w-50 h-23 text-5xl/normal italic font-serif font-extralight border-4 rounded-3xl bg-green-300
      text-shadow-lg/100 text-white border-black"

      onClick={()=>{clickFunc(value)}}
      >Search</button>

        </div>
      </div>

    </>)
    }

export default Market