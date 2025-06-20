import NavBar from "../NavBar";

function Home() {
  return (
    <>
      <NavBar />

      <div className="ml-5 mt-5">
        <h1 className="text-9xl italic font-serif font-extrabold text-shadow-lg/100 text-shadow-green-900">
          leaf
        </h1>

        <h2 className="text-6xl italic font-serif font-semibold text-shadow-lg/100 text-shadow-lime-900 mt-5">
          make the next
        </h2>

        <div className="flex gap-3 mt-2">
          <h2 className="text-6xl italic font-serif font-semibold text-shadow-lg/100 text-shadow-lime-900">
            choice a{" "}
            <span className="text-8xl font-extrabold breeze">breeze</span>{" "}
            <span className="text-8xl -ml-4">🍃</span>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Home;
