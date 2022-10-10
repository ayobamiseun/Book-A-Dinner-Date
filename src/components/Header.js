import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CgMenuRight } from 'react-icons/cg';
import {GiShoppingCart} from 'react-icons/gi'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function CollapsibleExample() {
  return (
   
    <Navbar collapseOnSelect expand="lg" bg="#FFBE55" style={{backgroundColor:"#FFBE55", fontWeight:"500", color:"black"}} variant="dark">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" > <CgMenuRight/> </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          <Link style={{textDecoration:"none"}} to="/"><Nav.Link href="#deets"> Home</Nav.Link> </Link>
          <Link style={{textDecoration:"none"}} to="/about"><Nav.Link href="#deets">About</Nav.Link></Link>
          <Link style={{textDecoration:"none"}} to="/about"> <Nav.Link href="#deets">Menu</Nav.Link></Link>
          <Link style={{textDecoration:"none"}} to="/about">  <Nav.Link eventKey={2} href="#memes">
             Contact Us
            </Nav.Link></Link>
            <Nav.Link eventKey={2} href="#memes">
             Events
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
               <GiShoppingCart/>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default CollapsibleExample;