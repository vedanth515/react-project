import React from 'react'
import './Footer.css'
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { IoMdCamera } from "react-icons/io";

function Footer() {
    return (
        <div id='footer-main-Div'>
            <div id='footer-left-Div'>
            <div>
                <img src='https://static.production.outfittery.io/frontpage-static-cache/website/footer/logo_desktop.svg' />
            </div>
            <div id='left-Div2'>
                <h5>Follow Us</h5>
                <div id='icons-Div'>
                <CiFacebook style={{fontSize:32}} />
                <CiTwitter style={{fontSize:32}}/>
                <IoMdCamera style={{fontSize:32}}/>
                </div>
            </div>
            </div>
            <div id='footer-right-Div'>
                <div>
                    <h6>The service</h6>
                    <p>How It Works</p>
                    <p>Prices</p>
                    <p>Outfits</p>
                </div>
                <div>
                    <h6>The company</h6>
                    <p>About Us</p>
                    <p>Jobs</p>
                    <p>Imprint</p>
                </div>
                <div>
                    <h6>Have a question?</h6>
                    <p>FAQ</p>
                    <p>Contact</p>
                    <p>Report advice</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
