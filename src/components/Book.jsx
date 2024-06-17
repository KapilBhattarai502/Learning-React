import React from 'react'

const Book = (props) => {
    const {img,author,name} =props.bookDetails;
    console.log(props);
  return (
    <div style={{
        boxShadow:"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        color:"black",
        padding:"1rem",
        margin:"1rem",
        borderRadius:"10px",
       
        

    }}>
    <img style={{
        height:"40vmin"
    }} src={img} alt={name}></img>
    <h3>{name}</h3>
    <h6>{author}</h6>
    
    </div>
  )
}

export default Book;