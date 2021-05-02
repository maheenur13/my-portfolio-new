/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Particles from 'react-particles-js';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagramSquare,faGithubSquare,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-scroll';
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
						"value": 110,
						"density": {
							"enable": true,
							"value_area": 1500
						}
					},
					"line_linked": {
						"enable": true,
						"opacity": 0.4
					},
					"move": {
						"direction": "right",
						"speed": 0.8
					},
					"size": {
						"value": 2
					},
					"opacity": {
						"anim": {
							"enable": true,
							"speed": 3,
							"opacity_min": 0.05
						}
					}
				},
				"interactivity": {
					"events": {
						"onclick": {
							"enable": true,
							"mode": "push"
						}
					},
					"modes": {
						"push": {
							"particles_nb": 1
						}
					}
				},
				"retina_detect": true
	}} />
    <div className="header-text-box d-flex flex-column  align-items-center">
        <h2 className="header-text">HELLO I AM <span style={{color:'yellow'}}> JAHIDUN NUR MAHEE</span></h2>
        <h2 className="header-text">WANT TO KNOW ME?</h2>
       <h3 className="header-text mt-5"> <Link className="work-text p-3 d-block text-white" exact to="navbar" smooth={true} duration={1200}>View My Work <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} /> </Link> 
	   </h3>
    </div>
        </div>
		
    );
};

export default Header;