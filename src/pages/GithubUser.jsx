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
                const response=await axios.get("https://api.github.com/users");
                console.log(response.data);
                setUsers(response.data);
                setIsLoading(false);
                
            } catch (error) {
                setIsError(true);
                setIsLoading(false); 
                



                
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
    
    <div>
        {users.map((item,index,self)=>{
            return (<div className='Api-Data' key={item.id}>
            <h4>Name:{item.login}</h4>
            <h5>Id:{item.id}</h5>
               
            </div>)

        })}
    </div>
  )
}

export default GithubUser