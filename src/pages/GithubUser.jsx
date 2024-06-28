import React, { useEffect, useState } from 'react'
import axios from "axios"

const GithubUser = () => {
    const[users,setUsers]=useState([]);
    const[isError,setIsError]=useState(false);
    const[isLoading,setIsLoading]=useState(false);
    
    useEffect(()=>{
        const getdata=async()=>{
            try {
                setIsLoading(true);
                const response=await axios.get("http://localhost:5500/get/todolist");
                console.log(response.data);
                
                setUsers(response.data);
                setIsLoading(false);
                
            } catch (error) {
                setIsError(true);
                setIsLoading(false); 
                console.log(error)
                



                
            }

        }
        getdata();
    },[])
    if(isLoading){
        return <h1>Data is being fetched ....</h1>
    }
    if(isError){
        return <h1>Error in fetching data </h1>
    }
  return (
    
    <div style={{
        display:'flex',
        flexDirection:'column',
        gap:"1rem"
    }}> 
        {users.map((item,index,self)=>{
            return (<div className='Api-Data' key={item._id}>
            <h2>Date:{item.date}</h2>
            <h3>Title:{item.title}</h3>
            <h5>Description:{item.description}</h5>
               
            </div>)

        })}
    </div>
  )
}

export default GithubUser