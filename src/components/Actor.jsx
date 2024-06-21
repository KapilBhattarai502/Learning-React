import React from 'react'

const Actor = (props) => {
    const {img,name,about}=props.actorDetails;

  return (
    <div style={{
      width:"40vmin",
      boxShadow:"1px 1px 3px black",
      padding:"25px",
      borderRadius:"10px",
      backgroundColor:"#545252"

    }}>
    <img style={{
      objectFit:"contain",
      height:"60%",
      width:"100%"
    }} src={img} alt='actorImage'/>
    <h3 style={{
      fontSize:"2vmin"
    }}>{name}</h3>
    <p style={{
      textAlign:"left",
      fontSize:"1.5vmin"
    }}>{about}</p>
    
    </div>
  )
}

export default Actor