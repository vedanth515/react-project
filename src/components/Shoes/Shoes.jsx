import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Shoes() {
  const navigate = useNavigate()
  const [data, SetData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/shoes").then(res => {
      console.log(res);
      SetData(res.data)
    }).catch(err => console.log(err))
  }, [])

  return(
    <div>
      <h1>Welcome to the Shoes Page!</h1>
      {data.map((k)=>{
            console.log(k);
            return (
              <div>
                <img src={k.image} width={300}/>
              </div>
            )   
      })}
      <button onClick={() => navigate("/Brand")}>Countinue</button>
    </div>
  )
}

export default Shoes
