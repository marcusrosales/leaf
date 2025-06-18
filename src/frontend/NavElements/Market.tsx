import NavBar from "./NavBar"

function Market() {
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
      ></input>


      <button className="w-50 h-23 text-5xl/normal italic font-serif font-extralight border-4 rounded-3xl bg-green-300
      text-shadow-lg/100 text-white border-black"
      >Search</button>

      </div>

      </div>

    </>)
}

export default Market