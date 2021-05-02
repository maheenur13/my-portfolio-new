import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './Navigationbar.css';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'
const Navigationbar = () => {
  return (

    <Navbar id="navbar" sticky="top" className="navigation-design" collapseOnSelect expand="lg">

      <Navbar.Brand className="text-white" href="#home">Jahidun Nur</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto all-nav-items">
          <div className="nav-item">
            <Link activeClass="active-class" spy={true} className="text-white mr-5 p-3 nav-link" offset={-55} exact to="about" smooth={true} duration={800}>ABOUT</Link>
          </div>
          <div className="nav-item">
            <Link activeClass="active-class" spy={true} className="text-white mr-4 p-3 nav-link" offset={-55} exact to="projects" smooth={true} duration={800}>
              PROJECTS
            </Link>
          </div>
          <div className="nav-item">
            <Link activeClass="active-class" spy={true} className="text-white mr-5 p-3 nav-link" offset={-55} exact to="blogs" smooth={true} duration={800}>BLOG</Link>
          </div>
          
          <div className="nav-item">
            <Link activeClass="active-class" spy={true} className="text-white mr-5 p-3 nav-link" offset={-55} exact to="contact" smooth={true} duration={600}>CONTACT</Link>
          </div>
          <div className="nav-item resume-icon" style={{position:'relative',width:'25px '}}>
          <a href="https://drive.google.com/uc?export=download&id=1eRKFnZDEmf9KnpC9fzXke3eBppqNtWMv"   role="button" target="_blank" rel="noreferrer"><FontAwesomeIcon className="brand-icon " style={{fontSize:'26px',width:'100%'}} icon={faFileDownload}/></a> 
          <p className="resume-button-text ">Download Resume</p>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;