import React, { useEffect } from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';
import projectsData from './ProjectData';
import {Link} from 'react-router-dom';
import AllProjects from '../AllProjects/AllProjects';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Project.css';

const Projects = () => {
    useEffect(()=>{
		AOS.init({duration:1100});
	},[])
    const newData = projectsData.slice(0,3)
    return (
        <section id="projects" style={{backgroundColor:'#F5F5F5',overflow:'hidden'}} >
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h1 data-aos="fade-down" className="text-center mt-5 mb-3">PROJECTS</h1>
                <div className="mt-5  w-100 d-flex flex-wrap justify-content-center align-items-center" >
                    {
                        newData.map(data=><div data-aos="fade-left" className="p-2 d-flex justify-content-center align-items-center mr-5 mb-2">
                            <div className="project-image-box" >
                                <img style={{width:'100%'}} src={data.thumbnail} alt="" />
                                </div>
                        </div>)
                    }
                </div>
                {/* <Link to="/allprojects" onClick={} target="_blank" style={{backgroundColor:'#252934',color:'white',textDecoration:'none'}} className="mt-5 pt-2 pb-2 pr-3 pl-3 mb-5 border">Click To See All Projects</Link> */}
                
                <AllProjects ></AllProjects>
               
            </div>
            
        </section>
    );
};

export default Projects;