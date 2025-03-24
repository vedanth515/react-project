import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Brand() {
  const [data, SetData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/Brand").then(res => {
      console.log(res);
      SetData(res.data)
    }).catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h1>Welcome to the Brand Page!</h1>
      {data.map((d) => {
        console.log(d);
        return (
          <div>
             <img src={d.image} width={300}/>
          </div>
        )
      })}
    </div>
  )
}

export default Brand
