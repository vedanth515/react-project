// import React, { useState } from 'react'
// import {Form,Button} from 'react-bootstrap'
// import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
// import { author,database } from '../firebaseCogFig';
// import {set,ref} from 'firebase/database'
// import {useNavigate} from 'react-router-dom'
// import './SignUp.css'
// import Swal from 'sweetalert2';
// import 'animate.css';

// function SignUpPage() {
//   const navigate=useNavigate()
//     const [signUpDetails,SetsignUpDetails]=useState({
//         name:"",
//         email:"",
//         password:"",
//     });
//     const handleDetails=(e)=>{
//         SetsignUpDetails({...signUpDetails,[e.target.name]:e.target.value })
//     }
//     const handleOnSubmit=async(v)=>{
//         const {name,email,password}=signUpDetails;
//         v.preventDefault()
//         try{
//          const signUpUsers= await createUserWithEmailAndPassword(author,email,password)
//          console.log(signUpUsers);
//          const signUpUsercred=signUpUsers.user
         
//           // alert("signup done successfully!!")
//           Swal.fire({
//             title: "Signup Successfully Done!",
//             showClass: {
//               popup: `
//                 animate__animated
//                 animate__fadeInUp
//                 animate__faster
//               `
//             },
//             hideClass: {
//               popup: `
//                 animate__animated
//                 animate__fadeOutDown
//                 animate__faster
//               `
//             }
//           });
//           navigate("/loginPage")
//           await set(ref(database,`${name}`),{
//             name:name,
//             email:email,
//             id:signUpUsers.user.uid,
//           });
//         }
//         catch(err){
//             console.log(err);
            
//         }

//     }
//     return (
//       <div className="signup-container">
//         <div className="signup-form">
//           <h2 className="text-center mb-4">Sign up</h2>
//           <Form onSubmit={handleOnSubmit}>
//             <Form.Group className="mb-3" controlId="formBasicName">
//               <Form.Label>Full Name</Form.Label>
//               <Form.Control 
//                 type="text" 
//                 name="name" 
//                 placeholder="Enter your full name"
//                 onChange={handleDetails}
//                 className="form-control-lg"
//               />
//             </Form.Group>
  
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control 
//                 type="email" 
//                 name="email" 
//                 placeholder="Enter email"
//                 onChange={handleDetails}
//                 className="form-control-lg"
//               />
//             </Form.Group>
  
//             <Form.Group className="mb-4" controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control 
//                 type="password" 
//                 name="password" 
//                 placeholder="Password"
//                 onChange={handleDetails}
//                 className="form-control-lg"
//               />
//             </Form.Group>
  
//             <Button 
//               variant="primary" 
//               type="submit" 
//               className="w-100 btn-lg signup-button"
//             >
//               Sign Up
//             </Button>
            
//             <p className="text-center mt-3">
//               Already have an account?{' '}
//               <a href="/loginPage" className="login-link">
//                 Log in
//               </a>
//             </p>
//           </Form>
//         </div>
//       </div>
//     )
// }

// export default SignUpPage;





import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { author, database } from '../firebaseCogFig';
import { set, ref } from 'firebase/database'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import 'animate.css';
import './SignUp.css'

function SignUpPage() {
  const navigate = useNavigate()
  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: ""
  });

  const validateForm = () => {
    let newErrors = { name: "", email: "", password: "" };
    let isValid = true;

    // Name validation
    if (!signUpDetails.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!signUpDetails.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(signUpDetails.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    if (!signUpDetails.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (signUpDetails.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    } else if (!passwordRegex.test(signUpDetails.password)) {
      newErrors.password = "Must contain at least 1 uppercase and 1 special character";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleDetails = (e) => {
    setSignUpDetails({ ...signUpDetails, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    setErrors({ ...errors, [e.target.name]: "" });
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const { name, email, password } = signUpDetails;
    try {
      const signUpUsers = await createUserWithEmailAndPassword(author, email, password);
      await set(ref(database, `${name}`), {
        name: name,
        email: email,
        id: signUpUsers.user.uid,
      });

      Swal.fire({
        title: "Signup Successful!",
        text: "Your account has been created",
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
      }).then(() => {
        navigate("/loginPage");
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Error!",
        text: err.message,
        icon: "error",
      });
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2 className="text-center mb-3">Create Account</h2>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-2" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your full name"
              onChange={handleDetails}
              className="form-control-sm"
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleDetails}
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
              onChange={handleDetails}
              className="form-control-sm"
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
              At least 6 characters with 1 uppercase and 1 special character
            </Form.Text>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100 btn-sm signup-button"
          >
            Sign Up
          </Button>

          <p className="text-center mt-2 mb-0">
            Already have an account?{' '}
            <a href="/loginPage" className="login-link">
              Log in
            </a>
          </p>
        </Form>
      </div>
    </div>
  )
}

export default SignUpPage;



