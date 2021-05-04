/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Particles from 'react-particles-js';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagramSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

const Header = () => {


	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, [])
	return (

		<div className="header-div " style={{ overflow: 'hidden' }} >
			<div className="brand-icon-design" data-aos="fade-up" >
				<a className="d-flex " href="https://www.facebook.com/maheenur.lucky13" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="brand-icon m-auto brand-icon-fb" icon={faFacebook} /></a>
				<a href="https://www.instagram.com/mahee_nur/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="brand-icon m-auto brand-icon-insta" icon={faInstagramSquare} /></a>
				<a href="https://github.com/maheenur13" target="_blank" rel="noreferrer"><FontAwesomeIcon className="brand-icon m-auto brand-icon-git" icon={faGithubSquare} /></a>
				<a href="https://www.linkedin.com/in/jahidun-nur-mahee-622634198/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="brand-icon m-auto brand-icon-in" icon={faLinkedin} /></a>
			</div>
			<div >
				<Particles

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
			</div>
			<div data-aos="fade-down" className=" header-text-box d-flex flex-column  align-items-center">
				<h2 className="header-text ">HI! I AM <span style={{ color: '#EFA37F' }}> JAHIDUN NUR MAHEE</span></h2>
				<h2 className="header-text">WANT TO KNOW ABOUT ME?</h2>
				<div className="mt-5 d-flex justify-content-around flex-wrap align-items-center" style={{ width: '35%' }}>
					 <Link  data-aos="zoom-in-up" className="header-box-text  pt-2 pb-2 pr-3 pl-3 mb-3  text-white" exact to="about" smooth={true} duration={1200}>View My Work <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} /> </Link>
					
					<a  data-aos="zoom-in-up" className="header-box-text text-white pt-2 pb-2 pr-3 pl-3 mb-3  "  href="https://drive.google.com/uc?export=download&id=1eRKFnZDEmf9KnpC9fzXke3eBppqNtWMv" role="button" target="_blank" rel="noreferrer">Download Resume <FontAwesomeIcon  style={{fontSize:''}} icon={faFileDownload} /></a>
				</div>
			</div>
		</div>

	);
};

export default Header;