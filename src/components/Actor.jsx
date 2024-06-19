import React from 'react'

const Actor = (props) => {
    const {img,name,about}=props.actorDetails;

  return (
    <div>
    <img src={img} alt='actorImage'/>
    <h3>{name}</h3>
    <p>{about}</p>
    
    </div>
  )
}

export default Actor