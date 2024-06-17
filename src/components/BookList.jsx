import React from "react";
import Book from "./Book";

const BookList = () => {
  const bookList = [
    {
      img: "https://m.media-amazon.com/images/I/51JemODRExL.jpg",
      author: "Alex Snodgrass",
      name: "The Psycology of Mind",
    },
    {
      img: "https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg",
      author: "James Clear",
      name: "Atomic Habits",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap:"wrap"
        
      }}
    >
      {/* <Book bookDetails={bookList[0]} />
      <Book bookDetails={bookList[1]} /> */}
      {bookList.map((item,index,self)=>{
        return <Book key={index} bookDetails={item}/>
      })}
    </div>
  );
};

export default BookList;
