import React from "react";
import Book from "./Book";

const BookList = () => {
  const book1 = {
    img: "https://m.media-amazon.com/images/I/51JemODRExL.jpg",
    author: "Alex Snodgrass",
    name: "The Psycology of Mind",
  };
  const book2 = {
    img: "https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg",
    author:"James Clear",
    name:"Atomic Habits"
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Book bookDetails={book1} />
      <Book bookDetails={book2} />
    </div>
  );
};

export default BookList;
