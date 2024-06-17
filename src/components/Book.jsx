import React from 'react'

const Book = (props) => {
    console.log(props);
  return (
    <div style={{
        boxShadow:"box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"

    }}>
    <img src={props.img} alt={props.name}></img>
    <h3>{props.name}</h3>
    <h6>{props.author}</h6>
    
    </div>
  )
}

export default Book;