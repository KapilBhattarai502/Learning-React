import React, { useState } from 'react'

const Person = () => {
    const[students,setStudents]=useState({
        name:"Kapil Bhattarai",
        age:23,
        hobby:"Guitar"

    })
    const newStudent=()=>{
        setStudents({
            name:"Manish Budhathoki",
            age:24,
            hobby:"Playing with Girls"
        })}
        const newName=()=>{
            setStudents({...students,name:"Adwait Upadhaya"})
        }
    
  return (
    <div>
    <h4>Name:{students.name}</h4>
    <h4>Age:{students.age}</h4>
    <h4>Hobby:{students.hobby}</h4>
    <button onClick={()=>newStudent()}>Click To Change</button>
    <button onClick={()=>newName()}>Change Name</button>

    </div>
  )
}

export default Person