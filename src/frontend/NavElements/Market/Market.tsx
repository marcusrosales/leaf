import NavBar from "../NavBar"
import { useState } from "react"

// This component shows details for one book in the Market,
// with a button to add that book to your localStorage shelf.
function MrktBookCard({ bookData }) {
  if (!bookData) return null; // If no book data, render nothing

  // Build the cover image URL if coverID exists
  let coverID = bookData.cover_i
  let coverURL = coverID ? `https://covers.openlibrary.org/b/id/${coverID}-M.jpg` : ''

  return (
    <>
      <div className="flex gap-5 mt-15 m-5 border-5 p-5 w-136 rounded-4xl bg-lime-100">

        {/* Show book cover image if available */}
        {coverURL && <img src={coverURL} alt={bookData.title}
          className="border-2 rounded-lg size-95 w-55 h-90 shadow-2xl/100" />}

        <div className="flex-col gap-5" >
          {/* Book title */}
          <h1 className="text-5xl italic font-serif text-shadow-lg/100 text-shadow-green-900">{bookData.title}</h1>

          {/* Book author(s) */}
          <h1 className="mt-5 text-3xl italic font-serif text-shadow-lg/100 text-shadow-green-900">{bookData.author_name}</h1>

          {/* Button to add this book to localStorage shelf */}
          <button
            className="mt-5 border-3 rounded-xl text-white border-black font-bold italic h-12 w-50 bg-sky-400 shadow-lg/100 text-shadow-lg/100"
            onClick={() => {
              // Read existing saved books from localStorage, or empty array if none
              const savedBooks = JSON.parse(localStorage.getItem('bookData')) || [];

              // Add current book's data to savedBooks array
              savedBooks.push({
                coverURL: coverURL,
                title: bookData.title,
                author: bookData.author_name
              });

              // Save updated array back to localStorage as JSON string
              localStorage.setItem('bookData', JSON.stringify(savedBooks));

              console.log('Book added:', savedBooks);
            }}
          >
            Add To Shelf
          </button>

        </div>
      </div>
    </>
  )
}


function Market() {
  // 'value' stores user input for book search
  let [value, setValue] = useState(null)

  // 'bookData' stores the fetched book info from API
  let [bookData, setBookData] = useState(null)

  // Function to fetch book data from OpenLibrary API using search query
  async function testFetchBook(usersBookRequestARG) {
    let url = `https://openlibrary.org/search.json?q=${usersBookRequestARG}&limit=1`

    let response = await fetch(url)
    let data = await response.json()

    // Set the first search result book data
    setBookData(data.docs[0])
  }

  // Called when Search button clicked, triggers the fetch
  async function clickFunc(value) {
    console.log("code ran")
    testFetchBook(value)
  }

  return (
    <>
      <NavBar />
      <div className="flex gap-50">

        <h1 className="text-9xl/normal italic font-serif font-extrabold text-shadow-lg/100 text-shadow-green-900 ml-5">
          my market
        </h1>

        {/* Search input and button */}
        <div className="flex mt-15 gap-3">
          <input
            placeholder="Enter Book Name"
            className="w-170 h-23 text-5xl/normal italic font-serif font-extralight border-4 rounded-3xl p-5"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="w-50 h-23 text-5xl/normal italic font-serif font-extralight border-4 rounded-3xl bg-green-300 text-shadow-lg/100 text-white border-black"
            onClick={() => { clickFunc(value) }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Show the book card for fetched book data */}
      <div className="flex flex-wrap justify-center">
        <MrktBookCard bookData={bookData} />
      </div>
    </>
  )
}

export default Market
