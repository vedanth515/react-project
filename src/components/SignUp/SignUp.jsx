// import React, { useState } from 'react'
// import {Form,Button} from 'react-bootstrap'
// import {createUserWithEmailAndPassword} from 'firebase/auth'
// import { author,database } from '../firebaseCogFig';
// import {set,ref} from 'firebase/database'
// import {useNavigate} from 'react-router-dom'


// function SignUpPage() {
//   const navigate=useNavigate()
//     const [signUpDetails,SetsignUpDetails]=useState({
//         name:"",
//         email:"",
//         password:""
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
         
//           alert("signup done successfully!!")
//           navigate("/loginPage")
//         //   signUpDetails({name:"",email:"",password:""});
//           await set(ref(database,"users/"+name),{
//             name:name,
//             email:email,
//             id:signUpUsers.user.uid,
//           });
//         }
//         catch(err){
//             console.log(err);
            
//         }

//     }
//   return (
//     <div>
//        <Form onSubmit={handleOnSubmit}>
//         <Form.Group>
//             <Form.Label>Name</Form.Label>
//             <Form.Control type='name' name='name' onChange={handleDetails}/>
//         </Form.Group>
//         <Form.Group>
//             <Form.Label>Email</Form.Label>
//             <Form.Control type='email' name='email'onChange={handleDetails}/>
//         </Form.Group>
//         <Form.Group>
//             <Form.Label>Password</Form.Label>
//             <Form.Control type='password' name='password'onChange={handleDetails}/>
//         </Form.Group>
//         <Button type='submit'>SignUp</Button>
//        </Form>
//     </div>
//   )
// }

// export default SignUpPage;


import './SignUp.css'
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { author, database } from '../firebaseCogFig';
import { set, ref } from 'firebase/database'
import { useNavigate } from 'react-router-dom'

function SignUpPage() {
  const navigate = useNavigate()
  const [signUpDetails, SetsignUpDetails] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleDetails = (e) => {
    SetsignUpDetails({ ...signUpDetails, [e.target.name]: e.target.value })
  }

  const handleOnSubmit = async (v) => {
    const { name, email, password } = signUpDetails;
    v.preventDefault()
    try {
      const signUpUsers = await createUserWithEmailAndPassword(author, email, password)
      alert("Signup successful!!")
      navigate("/loginPage")
      await set(ref(database, "users/" + name), {
        name: name,
        email: email,
        id: signUpUsers.user.uid,
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>
        <Form className="signup-form" onSubmit={handleOnSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              onChange={handleDetails}
              className="signup-input"
              placeholder="Enter your full name"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={handleDetails}
              className="signup-input"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={handleDetails}
              className="signup-input"
              placeholder="Password"
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="signup-button"
          >
            Sign Up
          </Button>
        </Form>

        <p className="login-redirect">
          Already have an account?{' '}
          <span
            className="login-link"
            onClick={() => navigate('/loginPage')}
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  )
}

export default SignUpPage