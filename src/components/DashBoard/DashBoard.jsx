import React from 'react'
import { author } from '../firebaseCogFig';
import {signOut} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

function DashBoardPage() {
  const navigate=useNavigate()
  const logout=async()=>{
         await signOut(author)
         alert("loggedOut Successfully")
         navigate("/loginPage")
  }
  return (
    <div>
     Welcome To DashBoardPage ~ <br></br>

     <button onClick={logout}>LogOut</button>
    </div>
  )
}

export default DashBoardPage;
