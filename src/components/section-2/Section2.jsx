import React from 'react'
import './Section2.css'
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { RiWomenLine } from "react-icons/ri";
import { TfiCheckBox } from "react-icons/tfi";
import { useNavigate } from 'react-router-dom';

function Section2() {
    const navigate=useNavigate()
    return (
        <div id='main-Div'>
            <div id='sub-Div1'>
            <center><h1 style={{width:500}}>We accompany you on your personal style journey.</h1></center>
            </div>
            <div id='sub-Div2'>
                <div id='first-Div'>
                    <HiOutlineComputerDesktop style={{fontSize:70}}/>
                    <h3>Tell us, which styles you like and which items you need.</h3>
                    <p>Your box is tailored to fit your taste, size and budget.</p>
                </div>
                <div id='second-Div'>
                    <RiWomenLine  style={{fontSize:60}}/>
                    <h3>Your stylist will send you your  selected clothes.</h3>
                    <p>Your stylist handpicks items so that you look and feel at your best.</p>
                </div>
                <div id='third-Div'>
                    <TfiCheckBox  style={{fontSize:55}}/>
                    <h3>Only pay for the items you keep.</h3>
                    <p>You only pay what you keep. Shipping and returns are on us.</p>
                </div>
            </div>
            <div id='btn'>
                <button onClick={() => navigate('/shirts')}>TRY IT NOW</button>
            </div>
        </div>
    )
}

export default Section2
