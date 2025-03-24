import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Pants() {
    const navigate=useNavigate()
    const [data,SetData]=useState([])
    useEffect(()=>{
         axios.get("http://localhost:3000/Pants").then(res=>{
          console.log(res,"shoes");
          SetData(res.data)          
         }).catch(err=>console.log(err));
    },[])

  return(
    <div>
      <h1>Welcome to the Pants Page!</h1>
      {data.map((v)=>{
             console.log(v);
            
             return (
              <div>
              <img src={v.image} width={300}/>
              </div>
            )
      })}
      <button onClick={()=>navigate("/Shoes")}>countinue</button>
    </div>
  )
}

export default Pants;
