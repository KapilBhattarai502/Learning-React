import React, { useState } from 'react'


const IncrementDecrement = () => {
  const[count,setCount]=useState(10);
  return (
    <div>
    <h1>Increment and Decrement </h1>
    <h3>You have clicked {count} times</h3>
    
        <button style={{
           
            margin:"5px"
        }} onClick={()=>{
          setCount(count+1);
        }}>+</button>
        <button onClick={()=>{
          setCount(count-1);
        }}>-</button>
    </div>
  )
}

export default IncrementDecrement