import React from 'react'
import "./App.css"

const App = () => {
  return (
    <div>
      <Booklist/>
    </div>
  )
}

const Booklist =()=>{
  return (
    <>
  <Book 
  bookName="The pshycology of Money"
  authorName="Robert T. Kiyosaki"
  bookImage="https://m.media-amazon.com/images/I/51JemODRExL.jpg"
   />
  <Book
    bookName="The Housemaid"
  authorName="FREIDA McFADDEN"
  bookImage="https://m.media-amazon.com/images/I/81AHTyq2wVL._SY342_.jpg"
  />
 
  </>)

}

const Book=(props)=>{
  console.log(props);
  
  return(
    <>
    
    <img style={{objectFit:"contain"}}
    width={400}
    height={400}
    
    src={props.bookImage} alt={props.bookImage}></img>
    <h4 style={{color:'green'}}>{props.bookName}</h4>
    <h6>{props.authorName}</h6>
    </>
  )
}

export default App
