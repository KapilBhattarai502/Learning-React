import React from 'react'
import "./App.css"
import Actorlist from './components/Actorlist'



const App = () => {
 function handleOnChange(event){
  console.log(event.target.value);

 }
 function handleOnSubmit(event){
  alert('submitted')
 }
  return (
    <div>
     <Actorlist/>
     <div className='input-field' >
     <form  onSubmit={handleOnSubmit}>
     <input style={{
    }} type='text' placeholder='Enter your name' onChange={handleOnChange} />
     
     <input className='input-address' type='text' onChange={handleOnChange} placeholder='Enter your Address'/>
     
    
     <button>Submit</button>
     </form>
     </div>
  
   
     </div>
  )
}

export default App