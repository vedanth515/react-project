// import React from 'react'
// import './Navbar.css'
// import { Button } from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom'

// function Navbar() {
//     const navigate = useNavigate()
//     return (
//         <div id='main-div'>
//             <div id='left-div'>
//                 <h4>Outfittery</h4>
//             </div>
//             <div id='right-div'>
//                 <Button onClick={() => navigate("/signupPage")}>Signup</Button>
//                 <Button onClick={() => navigate("/loginPage")}>Login</Button>
//             </div>  
//         </div>
//     )
// }

// export default Navbar


import React, { useState } from 'react'
import './Navbar.css'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div id='main-div'>
      <div id='left-div'>
        <button id='logobtn'><h4 onClick={()=>navigate("/")}>Outfittery</h4></button>
      </div>

      <div id='hamburger-icon' onClick={toggleMenu}>
        <RxHamburgerMenu size={28} />
      </div>

      <div id='right-div' className={showMenu ? 'show' : ''}>
        <Button onClick={() => navigate("/signupPage")}>Signup</Button>
        <Button onClick={() => navigate("/loginPage")}>Login</Button>
      </div>
    </div>
  )
}

export default Navbar;
