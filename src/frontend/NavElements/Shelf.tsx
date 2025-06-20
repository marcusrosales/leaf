import NavBar from "./NavBar";
import { useEffect } from "react";




function InventoryBookCard(){
  
  return(<>
  
  
  
  <div className="flex flex-col justify-center items-center border-5 rounded-4xl w-60 m-5 ">
  
  <h1 className=" text-center text-3xl italic font-semibold text-shadow-lg/100 text-shadow-lime-800"
  >Harry Potter</h1>  


  <button className="text-2xl italic font-semibold border-black rounded-3xl text-center border-3 w-25 h-10">Remove</button>

  </div>

  </>)
}



function Shelf(){

  let storageData = JSON.parse(localStorage.getItem('bookData'))  
  console.log(storageData)

  return(
    <>
    <NavBar />
    <h1 className="text-9xl/normal italic font-serif font-extrabold
      text-shadow-lg/100  text-shadow-green-900
      ml-5"
    >my shelf</h1>
    <div className="flex flex-wrap">
    
    <InventoryBookCard />
    
    </div>

    </>)   
}


export default Shelf;