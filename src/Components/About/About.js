import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faRocket,faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import { faCodepen,faConnectdevelop } from '@fortawesome/free-brands-svg-icons'
import { Card, CardDeck } from 'react-bootstrap';
import './About.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import image from '../../Images/profile.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
const aboutInfo = [
    {
        id: 1,
        icon: faTachometerAlt,
        title: "Fast",
        description: 'Fast load times and lag free interaction, my highest priority.'
    },
    {
        id: 2,
        icon: faCodepen,
        title: "Problem solving",
        description: 'Fast load times and lag free interaction, my highest priority.'
    },
    {
        id: 3,
        icon: faCode,
        title: "Responsive",
        description: 'Fast load times and lag free interaction, my highest priority.'
    },
    {
        id: 4,
        icon: faRocket,
        title: "Dynamic",
        description: 'Fast load times and lag free interaction, my highest priority.'
    },
]
const About = () => {
        useEffect(()=>{
            AOS.init({duration:1400});
        },[])
    return (
        <section id="about" className="pt-3 pb-2 " style={{backgroundColor:'white',zIndex:'10'}} >
            <h1 style={{zIndex:'5'}} data-aos="fade-down" className="text-center mb-2">ABOUT ME</h1>
            <div className="container">
                <div style={{zIndex:'1'}} className="d-flex justify-content-around align-itmes-center flex-wrap mb-3">
                    {
                        aboutInfo.map(info => <div data-aos="fade-right" className="border d-flex p-2 flex-column justify-content-around align-items-center" style={{width:'200px',marginTop:'50px',overflow:'hidden'}} key={info.id}>
                            <div style={{zIndex:'1'}}>
                             <FontAwesomeIcon  className="icon-design" variant='top' icon={info.icon} />
                            </div>
                            <div>
                                <h4 className="text-center mt-2">{info.title}</h4>
                                <p className="text-center" style={{fontSize:'13px'}}>
                                    {info.description}
                                </p>
                            </div>
                            
                        </div>)
                    }
                </div>
            </div>
            <div className="container pt-4">
            <div className="row">
                    <div style={{zIndex:'10'}} className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <img data-aos="slide-right" src={image} style={{width:'250px'}} alt="" />
                        </div>
                        <div data-aos="fade-up">
                            <h5 className="mt-4 text-center">WHAT TO KNOW ME?</h5>
                            <p className="text-center">I am A Full Stack Web-Developer. I have Serious passion for making Interactive Websites. Currently I am working with <span style={{color:'#05C2C9',fontStyle:'bold'}}>React.Js</span> .</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="col-md-6 d-flex flex-column justify-content-center">
                    <ProgressBar  className="mb-3" style={{height:'27px',borderRadius:'1px'}}  now={95} label={<div><span >HTML</span> <span>90%</span></div>} />
                    <ProgressBar className="mb-3" style={{height:'27px' ,borderRadius:'1px'}}  now={93} label={<div><span>CSS</span> <span>93%</span></div>} />
                    <ProgressBar className="mb-3" style={{height:'27px' ,borderRadius:'1px'}} now={80} label={<div><span>Java Script</span> <span>80%</span></div>} />
                    <ProgressBar className="mb-3" style={{height:'27px',borderRadius:'1px'}}  now={65} label={<div><span>React </span> <span>65%</span></div>} />
                    <ProgressBar className="mb-3" style={{height:'27px',borderRadius:'1px'}}  now={92} label={<div><span>Bootstrap</span> <span>92%</span></div>} />
                    <ProgressBar className="mb-3" style={{height:'27px',borderRadius:'1px'}}  now={89} label={<div><span>Material UI</span> <span>89%</span></div>} />
                    <ProgressBar className="mb-3" style={{height:'27px',borderRadius:'1px'}}  now={90} label={<div><span>C</span> <span>94%</span></div>} />
                    <ProgressBar className="mb-3" style={{height:'27px',borderRadius:'1px'}}  now={90} label={<div><span>JAVA</span> <span>85%</span></div>} />
                    </div>
            </div>
            </div>
        </section>
    );
};

export default About;