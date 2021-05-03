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
        <section  id="projects" style={{backgroundColor:'#F5F5F5',overflow:'hidden'}} >
            <div className=" d-flex align-items-center flex-column">
                <h3 data-aos="fade-down" className="text-center mt-5 mb-1 ">PROJECTS</h3>
                <div data-aos="zoom-in" className="devider"></div>
                <div className="mt-5 d-flex flex-wrap justify-content-center " >
                    {
                        newData.map(data=><div style={{width:'350px'}} data-aos="fade-left"  className="p-2  mb-2">
                            <div className="project-image-box w-100">
                                <img  style={{width:'100%'}} src={data.thumbnail} alt="" />
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