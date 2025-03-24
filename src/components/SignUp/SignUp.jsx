import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { author,database } from '../firebaseCogFig';
import {set,ref} from 'firebase/database'
import {useNavigate} from 'react-router-dom'
import './SignUp.css'


function SignUpPage() {
  const navigate=useNavigate()
    const [signUpDetails,SetsignUpDetails]=useState({
        name:"",
        email:"",
        password:"",
    });
    const handleDetails=(e)=>{
        SetsignUpDetails({...signUpDetails,[e.target.name]:e.target.value })
    }
    const handleOnSubmit=async(v)=>{
        const {name,email,password}=signUpDetails;
        v.preventDefault()
        try{
         const signUpUsers= await createUserWithEmailAndPassword(author,email,password)
         console.log(signUpUsers);
         const signUpUsercred=signUpUsers.user
         
          alert("signup done successfully!!")
          navigate("/loginPage")
        //   signUpDetails({name:"",email:"",password:""});
          await set(ref(database,`${name}`),{
            name:name,
            email:email,
            id:signUpUsers.user.uid,
          });
        }
        catch(err){
            console.log(err);
            
        }

    }
    return (
      <div className="signup-container">
        <div className="signup-form">
          <h2 className="text-center mb-4">Sign up</h2>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                placeholder="Enter your full name"
                onChange={handleDetails}
                className="form-control-lg"
              />
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                placeholder="Enter email"
                onChange={handleDetails}
                className="form-control-lg"
              />
            </Form.Group>
  
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                name="password" 
                placeholder="Password"
                onChange={handleDetails}
                className="form-control-lg"
              />
            </Form.Group>
  
            <Button 
              variant="primary" 
              type="submit" 
              className="w-100 btn-lg signup-button"
            >
              Sign Up
            </Button>
            
            <p className="text-center mt-3">
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

{/* <div>
<Form onSubmit={handleOnSubmit}>
 <Form.Group>
     <Form.Label>Name</Form.Label>
     <Form.Control type='name' name='name' onChange={handleDetails}/>
 </Form.Group>

 <Form.Group>
     <Form.Label>Email</Form.Label>
     <Form.Control type='email' name='email'onChange={handleDetails}/>
 </Form.Group>
 <Form.Group>
     <Form.Label>Password</Form.Label>
     <Form.Control type='password' name='password'onChange={handleDetails}/>
 </Form.Group>
 <Button type='submit'>SignUp</Button>
</Form>
</div> */}