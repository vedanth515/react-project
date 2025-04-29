import React from 'react'
import { author, database } from '../firebaseCogFig';
import { signOut } from 'firebase/auth'
import { useNavigate, useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from '../DashSection-1/DSection1';
import StyleSwipeComponent from '../DashSection-2/DashSection';
import SupportSection from '../DashSection-3/DashSection3';
import './DashBoard.css'
import Swal from 'sweetalert2';
import 'animate.css';


function DashBoardPage() {
  const location = useLocation()
  console.log("dfghjklgfds:", location.state);

  const { personData, role } = location.state || {};
  console.log(personData, role, "loggedIn user details");


  const navigate = useNavigate()
  const logout = async () => {
    await signOut(author)
    // alert("loggedOut Successfully")
    Swal.fire({
      title: "loggedOut Successfully",
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
    });
    navigate("/loginPage")

    
  }
  return (
    <div>
       <Navbar>
        <Container id='nav'>
          <Navbar.Brand href="#home">Welcome To DashBoard~</Navbar.Brand>
          <Nav>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <button  id='dashbtn' onClick={logout}>LogOut</button>
          </Nav>
        </Container>
      </Navbar>
      <hr style={{opacity:0.1}}></hr>
      <Carousel/>
     <StyleSwipeComponent/>
      <SupportSection/> 
    </div>
  )
}

export default DashBoardPage;





