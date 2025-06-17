import NavBar from "./NavBar"

function Market() {
    return(
    <>
    <NavBar />

      <div className="flex gap-100">
    
    <h1 className="text-9xl/normal italic font-serif font-extrabold
      text-shadow-lg/100  text-shadow-green-900
      ml-5"
    >my market</h1> 

      <div className="mt-10">


      <input className="w-100 h-25 text-5xl"
      ></input>


      <button
      >search!</button>

      </div>

      </div>

    </>)
}

export default Market