import React, { useEffect } from 'react'
import { useState } from 'react';

const Home = () => {
    const [value,setValue]=useState(0);
    const [isTen,setIsTen]=useState(false);
   
    useEffect(()=>{
        console.log("Rendering");
        if(value===10){
            console.log("The button is clicked 10 times");
            setIsTen(true);
        }
    },[value])
  return (
    <div>
        <h3>Count:{value}</h3>
        <button onClick={()=>{
            setValue(value+1);
        }}>Click Me!</button>
        {isTen&&<p>You have clicked Ten times</p>}

    </div>
  )
}

export default Home