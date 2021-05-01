import React from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import './Navigationbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
const Navigationbar = () => {
    return (
        
            <Navbar sticky="top" className="navigation-design" collapseOnSelect expand="lg">
              
  <Navbar.Brand className="text-white" href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link className="text-white" href="#features">Features</Nav.Link>
      <Nav.Link className="text-white" href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link className="text-white" href="#deets">More deets</Nav.Link>
      <Nav.Link className="text-white" eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
};

export default Navigationbar;