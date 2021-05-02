import React from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import './Navigationbar.css';
import {Link} from 'react-scroll';
import {NavLink} from 'react-router-dom'
const Navigationbar = () => {
    return (
        
            <Navbar sticky="top" className="navigation-design" collapseOnSelect expand="lg">
              
  <Navbar.Brand className="text-white" href="#home">Jahidun Nur</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto">
      
      <Link activeClass="active-class" className="text-white mr-3 " exact to="contact" smooth={true} duration={1200}>Contact</Link>
      <Link activeClass="active-class" className="text-white mr-3 " exact to="blogs" smooth={true} duration={1200}>blog</Link>
      <Link activeClass="active-class" className="text-white mr-3 " exact to="contact" smooth={true} duration={1200}>Contact</Link>
      <Link activeClass="active-class" className="text-white mr-3" exact to="projects" smooth={true} duration={1200}>
       Projects
      </Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
};

export default Navigationbar;