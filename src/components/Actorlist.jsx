import React from 'react'
import Actor from './Actor'

const Actorlist = () => {
    const actorLists=[
        {
            id:1,
            img:"https://imageio.forbes.com/specials-images/imageserve/6633cecacf0f8b7ca0657763/Lauren-Bacall/0x0.jpg?format=jpg&crop=2649,1767,x0,y150,safe&width=1440",
            name:"Katherine Hepburn",
            about:"One of the greatest actors of all time,Katherine Hepbum was born 1905"
        
        },
        {
        id:2,
        img:"https://imageio.forbes.com/specials-images/imageserve/6633cd5eec748a84a05db6c4/Michelle-Yeoh-accepts-the-2023-Oscar-for-Best-Actress-in-a-Leading-Role-/960x0.jpg?format=jpg&width=1440",
        name:"Michelle",
        about:"She is known for films like Crouching Tiger, Hidden Dragon, Memoirs of a Geisha and A Haunting in Venice, as well as TV shows like Star Trek: Discovery",
        
        },
        {
        id:3,
        img:"https://imageio.forbes.com/specials-images/imageserve/6633cd8a3e10d999b517f4ff/Meryl-Streep-And-Raul-Julia/960x0.jpg?format=jpg&width=1440",
        name:"Raul Julia",
        about:"Julia is notable for his commitment to roles. While his final film, 1994’s Street Fighter, was critically panned, his performance has been praised for his steadfast presence and control.",
        
        },{
        id:4,
        img:"https://imageio.forbes.com/specials-images/imageserve/6633ddebcf6f35cb7a555949/Leonardo-DiCaprio-arrives-for-the-92nd-Academy-Awards-/960x0.jpg?format=jpg&width=1440",
        name:"Leonardo DiCaprio",
        about:"Julia is notable for his commitment to roles. While his final film, 1994’s Street Fighter, was critically panned, his performance has been praised for his steadfast presence and control.",
        }
        

    ]
  return (
    <div style={{
      display:"flex",
      justifyContent:"flex-start",
      flexWrap:"wrap",
      gap:"1rem"
    }}>
    
    {actorLists.map((item,index,self)=>{
      return <Actor key={index} actorDetails={item}/>
    })}
    
      
    </div>
  )
}

export default Actorlist