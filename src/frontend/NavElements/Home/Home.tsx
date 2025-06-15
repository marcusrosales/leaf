import NavBar from "../NavBar";

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
      ml-5 mt-5"
      >make the next</h2>

    <div className="flex">
      <h2 className="text-6xl/normal italic font-serif font-semibold
      text-shadow-lg/100 text-shadow-lime-900
      ml-9 -mt-4"
      >choice a <span className="text-8xl font-extrabold breeze">breeze</span></h2>
      
      <img src="src/frontend/assets/wind-svgrepo-com.svg" className="size-27 ml-5 -mt-2" ></img>
      </div>
 

    </div>

    </>
  )
};

export default Home;