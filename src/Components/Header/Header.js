/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Particles from 'react-particles-js';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagramSquare,faGithubSquare,faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Header = () => {
    return (
		
        <div className="header-div">
			<div className="brand-icon-design">
               <a href="https://www.facebook.com/maheenur.lucky13" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="brand-icon" icon={faFacebook}/></a>
               <a href="https://www.instagram.com/mahee_nur/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="brand-icon" icon={faInstagramSquare}/></a> 
               <a href="https://github.com/maheenur13" target="_blank" rel="noreferrer"><FontAwesomeIcon className="brand-icon" icon={faGithubSquare}/></a> 
               <a href="https://www.linkedin.com/in/jahidun-nur-mahee-622634198/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="brand-icon" icon={faLinkedin}/></a> 
              </div>
            <Particles
			style={{height:'100vh'}}
    params={{
	    "particles": {
	        "number": {
	            "value": 100
	        },
	        "size": {
	            "value": 2
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
    <div className="header-text-box">
        <h2 className="header-text">Hello I Am <span style={{color:'yellow'}}> Jahidun Nur Mahee</span></h2>
        <h2 className="header-text">I am a full-Stack Web developer</h2>
        <h3 className="header-text m-auto border p-2" style={{width:'15%'}}>View My Work</h3>
    </div>
        </div>
		
    );
};

export default Header;