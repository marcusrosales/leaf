import NavBar from "./NavBar";

function Home() {

  return (  

    <>
      <NavBar />
      <div>
      <h1 className=" text-9xl/normal italic font-serif font-extrabold
      text-shadow-lg/100  text-shadow-green-900
      ml-5" >leaf</h1>


      <h2 className="text-6xl/normal italic font-serif font-semibold
      text-shadow-lg/100 text-shadow-lime-900
      ml-3 mt-5"
      >make the next</h2>

      <h2 className="text-6xl/normal italic font-serif font-semibold
      text-shadow-lg/100 text-shadow-lime-900
      ml-6 -mt-4"
      >decision a <span>breeze</span></h2>

    </div>

    </>
  )
};

export default Home;