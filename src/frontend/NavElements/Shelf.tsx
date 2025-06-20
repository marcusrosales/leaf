import NavBar from "./NavBar";
import { useState, useEffect } from "react";

// Define the shape of a Book
type Book = {
  title: string;
  coverURL?: string;
  author?: string[]; // optional
};

// Props for InventoryBookCard
type InventoryBookCardProps = {
  book: Book;
  onRemove: () => void;
};

function InventoryBookCard({ book, onRemove }: InventoryBookCardProps) {
  return (
    <div className="flex flex-col justify-center items-center border-5 rounded-4xl w-60  m-5 ">
      <h1 className="mt-2 text-center text-3xl italic font-semibold text-shadow-lg/100 text-shadow-lime-800">
        {book.title}
      </h1>

      {book.coverURL && (
        <img
          src={book.coverURL}
          alt={book.title}
          className="w-40 h-60  border-2 rounded-lg shadow-lg/100 m-5"
        />
      )}

      <button
        className="mb-3 text-2xl text-shadow-lg/100 italic font-semibold bg-red-400 border-black rounded-4xl text-center border-3 w-30 text-white mt-3"
        onClick={onRemove}
      >
        Remove
      </button>
    </div>
  );
}

function Shelf() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const storage = localStorage.getItem("bookData");
    const storageData: Book[] = storage ? JSON.parse(storage) : [];
    setBooks(storageData);
  }, []);

  function removeBook(index: number) {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
    localStorage.setItem("bookData", JSON.stringify(updatedBooks));
  }

  return (
    <>
      <NavBar />
      <h1 className="text-9xl italic font-serif font-extrabold text-shadow-lg/100 text-shadow-green-900 ml-5">
        my shelf
      </h1>

      <div className="flex flex-wrap">
        {books.length === 0 && <p className="m-5 italic">Shelf is empty</p>}
        {books.map((book, idx) => (
          <InventoryBookCard key={idx} book={book} onRemove={() => removeBook(idx)} />
        ))}
      </div>
    </>
  );
}

export default Shelf;
