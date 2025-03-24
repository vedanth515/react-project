import React from 'react'
import { author, database } from '../firebaseCogFig';
import { signOut } from 'firebase/auth'
import { useNavigate, useLocation } from 'react-router-dom'
// import LunchPage from '../LunchPage/LunchPage';


function DashBoardPage() {
  const location = useLocation()
  console.log("dfghjklgfds:", location.state);

  const { personData, role } = location.state || {};
  console.log(personData, role, "loggedIn user details");


  const navigate = useNavigate()
  const logout = async () => {
    await signOut(author)
    alert("loggedOut Successfully")
    navigate("/loginPage")
  }
  return (
    <div>
       Welcome To DashBoardPage ~ <br></br>
      <button onClick={logout}>LogOut</button>
      {/* <LunchPage/> */}
    </div>
  )
}

export default DashBoardPage;





