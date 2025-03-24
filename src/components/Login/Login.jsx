import './Login.css'
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { author, database } from '../firebaseCogFig'
import { useNavigate } from 'react-router-dom'
import { get, ref } from 'firebase/database'


function LoginPage() {
  const navigate = useNavigate()
  const [loginDetails, SetloginDetails] = useState({
    email: "",
    password: ""
  })
  const handleloginDetails = (e) => {
    SetloginDetails({ ...loginDetails, [e.target.name]: e.target.value })

  }
  const handleloginSubmit = async (k) => {
    const { email, password } = loginDetails;
    k.preventDefault()
    try {
      const userCred = await signInWithEmailAndPassword(author, email, password)
      console.log(userCred);

      alert("loggedin successfully !!")
      navigate("/dashboardPage") 
    }
    catch (err) {
      console.log(err);

    }

  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="text-center mb-4">Login</h2>
        <Form onSubmit={handleloginSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              name="email" 
              placeholder="Enter email"
              onChange={handleloginDetails}
              className="form-control-lg"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              name="password" 
              placeholder="Password"
              onChange={handleloginDetails}
              className="form-control-lg"
            />
          </Form.Group>

          <Button 
            variant="primary" 
            type="submit" 
            className="w-100 btn-lg login-button"
          >
            Login
          </Button>
          
          <p className="text-center mt-3">
            Don't have an account?{' '}
            <a href="/signupPage" className="signup-link">
              Sign up
            </a>
          </p>
        </Form>
      </div>
    </div>
  )
  
}

export default LoginPage;


// return (
//   <div>
//     <Form onSubmit={handleloginSubmit}>
//       <Form.Group>
//         <Form.Label>Email</Form.Label>
//         <Form.Control type='email' name='email' onChange={handleloginDetails} />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label>Password</Form.Label>
//         <Form.Control type='password' name='password' onChange={handleloginDetails} />
//       </Form.Group>
//       <Button type='submit'>Login</Button>
//     </Form>
//   </div>
// )