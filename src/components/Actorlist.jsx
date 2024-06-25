import React, { useState } from "react";

const Actorlist = () => {
  const [actorList, setactorList] = useState([
    {
      id: 1,
      name: "Rajesh Hamal",
    },
    {
      id: 2,
      name: "Pradip Khadka",
    },
    {
      id: 3,
      name: "Anmol KC",
    },
    {
      id: 4,
      name: "Daya Hyang Rai",
    },
  ]);
  const removeActor=(id)=>{
    const newactorList=actorList.filter((item)=>{
         return item.id!==id;
         
    })
    setactorList(newactorList);
  }
  const removeAll=()=>{
    setactorList([]);
  }


  return (
    <div>
      <h1>Actors Of Nepal</h1>
      {actorList.map((item) => {
        const { id, name } = item;
        return (
          <div
            key={id}
            style={{
              display: "flex",
              gap: "4rem",
            }}
          >
            <h3>{name}</h3>
            <button onClick={() => {
                removeActor(id);
                
            }}>Remove</button>
          </div>
        );
      })}
      <button onClick={removeAll}>Clear All</button>
    </div>
  );
};

export default Actorlist;
