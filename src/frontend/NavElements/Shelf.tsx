import NavBar from "./NavBar";
import { useEffect } from "react";




function InventoryBookCard(){
  
  return(<>
  {
    <div className="flex flex-col justify-center items-center border-5 rounded-4xl w-60 m-5 ">

    <h1 className=" text-center text-3xl italic font-semibold text-shadow-lg/100 text-shadow-lime-800"
    >Harry Potter</h1>  

    <img src= "" className="" />

    <button className="text-2xl/relaxed italic font-semibold bg-red-400 border-black rounded-4xl text-center border-3 w-30 text-white text-shadow-lg/100"
    >Remove</button>

    </div>
  }

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