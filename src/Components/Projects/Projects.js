import React from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';
import image1 from '../../Images/ProjectImages/project1Thumb.PNG';
import image2 from '../../Images/ProjectImages/project2Thumb.PNG';
import image3 from '../../Images/ProjectImages/project3Thumb.PNG'
import {Link} from 'react-router-dom';
const projectsData=[
    {
        name:'Musical Instrument House',
        thumbnail:image1,
        image1:'',
        image2:'',
        gitLink:'https://github.com/Porgramming-Hero-web-course/complete-website-client-maheenur13',
        liveLink:'https://buy-music-instruments-bd.web.app',
        description:''
    },
    {
        name:'Guitar World',
        thumbnail:image2,
        image1:'',
        image2:'',
        gitLink:'https://github.com/Porgramming-Hero-web-course/full-stack-client-maheenur13',
        liveLink:'',
        description:''
    },
    {
        name:'Share Ride',
        thumbnail:image3,
        image1:'',
        image2:'',
        gitLink:'',
        liveLink:'',
        description:''
    },
    {
        name:'Doctors Portal',
        thumbnail:'',
        image1:'',
        image2:'',
        gitLink:'',
        liveLink:'',
        description:''
    },
    {
        name:'Last one',
        thumbnail:'',
        image1:'',
        image2:'',
        gitLink:'',
        liveLink:'',
        description:''
    }
]
const Projects = () => {
    const newData = projectsData.slice(0,3)
    return (
        <section id="projects" style={{backgroundColor:'#F5F5F5',overflow:'hidden'}} >
            <div className="   d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-center mt-5 mb-3">PROJECTS</h1>
                <div className="mt-5  w-100 d-flex flex-wrap justify-content-center align-items-center" >
                    {
                        newData.map(data=><div className="p-2 d-flex justify-content-center align-items-center mr-5 mb-2">
                            <div style={{width:'360px'}}>
                                <img style={{width:'100%'}} src={data.thumbnail} alt="" />
                                </div>
                        </div>)
                    }
                </div>
                <Link to="/allprojects" target="_blank" style={{backgroundColor:'#252934',color:'white',textDecoration:'none'}} className="mt-5 pt-2 pb-2 pr-3 pl-3 mb-5 border">Click To See All Projects</Link>
            </div>
            
        </section>
    );
};

export default Projects;