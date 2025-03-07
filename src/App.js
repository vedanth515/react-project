import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import LoginPage from './components/Login/Login'
import DashBoardPage from './components/DashBoard/DashBoard'
import SignUpPage from './components/SignUp/SignUp'
import { Routes, Route, Navigate } from 'react-router-dom'
import { author } from './components/firebaseCogFig'
import { onAuthStateChanged } from 'firebase/auth'

function App() {
  const [user, setUser] = useState(null)
  const [loading, Setloading] = useState(true)
  useEffect(() => {
   const userLoggnedIn= onAuthStateChanged(author, (CurrentUser) => {
      setUser(CurrentUser)
      Setloading(false)

      return()=>userLoggnedIn()

    })
  }, [])
  if (loading) {
    return <h2>loading pls wait a Movement</h2>
  }
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/signupPage' element={<SignUpPage />} />
        <Route path='/loginPage' element={<LoginPage />} />
        <Route path='/dashboardPage' element={user ? <DashBoardPage /> : <Navigate to="/loginPage" />} />
      </Routes>
    </div>
  )
}

export default App;
