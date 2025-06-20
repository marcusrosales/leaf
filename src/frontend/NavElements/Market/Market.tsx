import NavBar from "../NavBar";
import { useState } from "react";

// Define a type for the book data
type BookData = {
  title: string;
  author_name: string[];
  cover_i?: number;
};

function MrktBookCard({ bookData }: { bookData: BookData }) {
  if (!bookData) return null;

  const coverID = bookData.cover_i;
  const coverURL = coverID
    ? `https://covers.openlibrary.org/b/id/${coverID}-M.jpg`
    : "";

  return (
    <>
      <div className="flex gap-5 mt-15 m-5 border-5 p-5 w-136 rounded-4xl bg-lime-100">
        {coverURL && (
          <img
            src={coverURL}
            alt={bookData.title}
            className="border-2 rounded-lg size-95 w-55 h-90 shadow-2xl/100"
          />
        )}

        <div className="flex-col gap-5">
          <h1 className="text-5xl italic font-serif text-shadow-lg/100 text-shadow-green-900">
            {bookData.title}
          </h1>

          <h1 className="mt-5 text-3xl italic font-serif text-shadow-lg/100 text-shadow-green-900">
            {bookData.author_name.join(", ")}
          </h1>

          <button
            className="mt-5 border-3 rounded-xl text-white border-black font-bold italic h-12 w-50 bg-sky-400 shadow-lg/100 text-shadow-lg/100"
            onClick={() => {
              const savedBooks =
                JSON.parse(localStorage.getItem("bookData") || "[]") || [];

              savedBooks.push({
                coverURL: coverURL,
                title: bookData.title,
                author: bookData.author_name,
              });

              localStorage.setItem("bookData", JSON.stringify(savedBooks));

              console.log("Book added:", savedBooks);
            }}
          >
            Add To Shelf
          </button>
        </div>
      </div>
    </>
  );
}

function Market() {
  const [value, setValue] = useState<string>("");
  const [bookData, setBookData] = useState<BookData | null>(null);

  async function testFetchBook(usersBookRequestARG: string) {
    const url = `https://openlibrary.org/search.json?q=${usersBookRequestARG}&limit=1`;

    const response = await fetch(url);
    const data = await response.json();
    setBookData(data.docs[0]);
  }

  function clickFunc(value: string) {
    console.log("code ran");
    testFetchBook(value);
  }

  return (
    <>
      <NavBar />
      <div className="flex gap-50">
        <h1 className="text-9xl/normal italic font-serif font-extrabold text-shadow-lg/100 text-shadow-green-900 ml-5">
          my market
        </h1>

        <div className="flex mt-15 gap-3">
          <input
            placeholder="Enter Book Name"
            className="w-170 h-23 text-5xl/normal italic font-serif font-extralight border-4 rounded-3xl p-5"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="w-50 h-23 text-5xl/normal italic font-serif font-extralight border-4 rounded-3xl bg-green-300 text-shadow-lg/100 text-white border-black"
            onClick={() => clickFunc(value)}
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {bookData && <MrktBookCard bookData={bookData} />}
      </div>
    </>
  );
}

export default Market;
