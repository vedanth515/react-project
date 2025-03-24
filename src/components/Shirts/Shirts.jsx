import React, { use, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Shirts() {
    const navigate = useNavigate()
    const [data, SetData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/Shirts").then(res => {
            console.log(res.data)
            SetData(res.data)
        }).catch(err => console.log(err));
    }, [])

    return (

        <div>
            <h1>Welcome to the Shirts Page!</h1>
            {data.map((x) => {
                console.log(x, "shirts data");

                return (
                    <div>
                        <img src={x.image} width={300} />
                    </div>
                )
            })}
            <button onClick={() => navigate("/Pants")}>Continue</button>
        </div>
    )
}

export default Shirts;
