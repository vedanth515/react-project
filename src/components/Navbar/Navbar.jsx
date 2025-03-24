import React from 'react'
import './Navbar.css'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    return (
        <div id='main-div'>
            <div id='left-div'>
                <h4>Outfittery</h4>
            </div>
            <div id='right-div'>
                <Button onClick={() => navigate("/signupPage")}>Signup</Button>
                <Button onClick={() => navigate("/loginPage")}>Login</Button>
            </div>  
        </div>
    )
}

export default Navbar
