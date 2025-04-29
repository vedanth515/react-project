// import './Login.css'
// import React, { useState } from 'react'
// import { Form, Button } from 'react-bootstrap'
// import { signInWithEmailAndPassword } from 'firebase/auth'
// import { author, database } from '../firebaseCogFig'
// import { useNavigate } from 'react-router-dom'
// import { get, ref } from 'firebase/database'
// import Swal from 'sweetalert2'
// import 'animate.css';


// function LoginPage() {
//   const navigate = useNavigate()
//   const [loginDetails, SetloginDetails] = useState({
//     email: "",
//     password: ""
//   })
//   const handleloginDetails = (e) => {
//     SetloginDetails({ ...loginDetails, [e.target.name]: e.target.value })

//   }
//   const handleloginSubmit = async (k) => {
//     const { email, password } = loginDetails;
//     k.preventDefault()
//     try {
//       const userCred = await signInWithEmailAndPassword(author, email, password)
//       console.log(userCred);

//       // alert("loggedin successfully!!")
//        Swal.fire({
//                   title: "loggedin successfully!!",
//                   showClass: {
//                     popup: `
//                       animate__animated
//                       animate__fadeInUp
//                       animate__faster
//                     `
//                   },
//                   hideClass: {
//                     popup: `
//                       animate__animated
//                       animate__fadeOutDown
//                       animate__faster
//                     `
//                   }
//                 });
//       navigate("/dashboardPage") 
//     }
//     catch (err) {
//       console.log(err);

//     }

//   }

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h2 className="text-center mb-4">Login</h2>
//         <Form onSubmit={handleloginSubmit}>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control 
//               type="email" 
//               name="email" 
//               placeholder="Enter email"
//               onChange={handleloginDetails}
//               className="form-control-lg"
//             />
//           </Form.Group>

//           <Form.Group className="mb-4" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control 
//               type="password" 
//               name="password" 
//               placeholder="Password"
//               onChange={handleloginDetails}
//               className="form-control-lg"
//             />
//           </Form.Group>

//           <Button 
//             variant="primary" 
//             type="submit" 
//             className="w-100 btn-lg login-button"
//           >
//             Login
//           </Button>
          
//           <p className="text-center mt-3">
//             Don't have an account?{' '}
//             <a href="/signupPage" className="signup-link">
//               Sign up
//             </a>
//           </p>
//         </Form>
//       </div>
//     </div>
//   )
  
// }

// export default LoginPage;




import './Login.css'
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { author } from '../firebaseCogFig'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import 'animate.css'

function LoginPage() {
  const navigate = useNavigate()
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  })
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  })

  const validateForm = () => {
    let isValid = true
    const newErrors = { email: "", password: "" }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!loginDetails.email) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!emailRegex.test(loginDetails.email)) {
      newErrors.email = "Invalid email format"
      isValid = false
    }

    if (!loginDetails.password) {
      newErrors.password = "Password is required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleloginDetails = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  const handleloginSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    try {
      await signInWithEmailAndPassword(author, loginDetails.email, loginDetails.password)
      
      Swal.fire({
        title: "Login Successful!",
        icon: "success",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      })
      navigate("/dashboardPage")
    } catch (err) {
      console.error(err)
      Swal.fire({
        title: "Login Failed",
        text: err.message.includes('user-not-found') ? 'User not found' : 
              err.message.includes('wrong-password') ? 'Invalid password' : 
              'Login failed. Please try again.',
        icon: "error",
      })
    }
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="text-center mb-3">Welcome Back</h2>
        <Form onSubmit={handleloginSubmit}>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleloginDetails}
              className="form-control-sm"
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleloginDetails}
              className="form-control-sm"
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100 btn-sm login-button"
          >
            Login
          </Button>

          <p className="text-center mt-2 mb-0">
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

export default LoginPage