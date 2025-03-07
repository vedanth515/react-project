// import './Login.css'
// import React, { useState } from 'react'
// import {Form,Button} from 'react-bootstrap'
// import {signInWithEmailAndPassword} from 'firebase/auth'
// import { author } from '../firebaseCogFig'
// import {useNavigate} from 'react-router-dom'


// function LoginPage() {
//   const navigate=useNavigate()
//   const [loginDetails,SetloginDetails]=useState({
//     email:"",
//     password:""
//   })
//   const handleloginDetails=(e)=>{
//     SetloginDetails({...loginDetails,[e.target.name]:e.target.value})

//   }
//   const handleloginSubmit=async(k)=>{
//     const {email,password}=loginDetails;
//     k.preventDefault()
//     try{
//            await signInWithEmailAndPassword(author,email,password)
//            alert("loggedin successfully !!")
//            navigate("/dashboardPage")
//     }
//     catch(err){ 
//            console.log(err);
           
//     }

//   }
//   return (
//     <div>
//        <Form onSubmit={handleloginSubmit}>
//         <Form.Group>
//             <Form.Label>Email</Form.Label>
//             <Form.Control type='email' name='email' onChange={handleloginDetails}/>
//         </Form.Group>
//         <Form.Group>
//             <Form.Label>Password</Form.Label>
//             <Form.Control type='password' name='password'onChange={handleloginDetails}/>
//         </Form.Group>
//         <Button type='submit'>Login</Button>
//        </Form>
//     </div>
//   )
// }

// export default LoginPage;



import './Login.css';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { author } from '../firebaseCogFig';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [loginDetails, SetloginDetails] = useState({
    email: '',
    password: '',
  });

  const handleloginDetails = (e) => {
    SetloginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleloginSubmit = async (k) => {
    const { email, password } = loginDetails;
    k.preventDefault();
    try {
      await signInWithEmailAndPassword(author, email, password);
      alert('Logged in successfully!!');
      navigate('/dashboardPage');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <Form className="login-form" onSubmit={handleloginSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={handleloginDetails}
              className="login-input"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={handleloginDetails}
              className="login-input"
              placeholder="Password"
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="login-button"
          >
            Login
          </Button>
        </Form>

        <p className="signup-redirect">
          Don't have an account?{' '}
          <span
            className="signup-link"
            onClick={() => navigate('/signupPage')}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
