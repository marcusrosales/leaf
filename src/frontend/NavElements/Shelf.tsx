import NavBar from "./NavBar";
import { useEffect } from "react";




function InventoryBookCard(){
  
  return(<>
  <h1>test</h1>  
  </>)
}



function Shelf(){

  useEffect(()=>{InventoryBookCard},[localStorage.length])

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