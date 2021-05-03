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
        title: "Effective",
        description: 'I always try to do my task effectively.'
    },
    {
        id: 2,
        icon: faCodepen,
        title: "Problem solving",
        description: 'I Solve More than 250+ problems in URI online Judge and Hacker Rank!'
    },
    {
        id: 3,
        icon: faCode,
        title: "Web-Dev",
        description: 'Expertise in Java Script, React Js, Material UI, Bootstrap, MongoDB, ES6, Node Js, Firebase etc'
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
        <section id="about" className="pt-4 pb-5 " style={{backgroundColor:'white',overflow:'hidden'}} >
            <h3 style={{zIndex:'5'}} data-aos="fade-down" className="text-center mt-5 section-title">ABOUT ME</h3>
            <div data-aos="zoom-in" className="devider"></div>
            <div className="container">
                <div  className="mt-2 d-flex justify-content-around align-itmes-center flex-wrap ">
                    {
                        aboutInfo.map(info => <div data-aos="fade-right" className="border d-flex p-3 flex-column justify-content-around align-items-center" style={{width:'200px',height:'225px',marginTop:'40px',overflow:'hidden'}} key={info.id}>
                            <div className="border" style={{width:'65%'}}>
                             <FontAwesomeIcon  className="icon-design w-100" variant='top' icon={info.icon} />
                            </div>
                            <div  style={{width:'95%',height:'50%',marginTop:'1%'}} className=" ">
                                <h5 className="text-center">{info.title}</h5>
                                <p className="text-center" style={{fontSize:'13px'}}>
                                    {info.description}
                                </p>
                            </div>
                            
                        </div>)
                    }
                </div>
            </div>
            <div className="container mt-5">
            <div className="row">
                    <div  className="col-md-6 mt-5 d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <img data-aos="slide-right" src={image} style={{width:'180px'}} alt="" />
                        </div>
                        <div data-aos="fade-up">
                            <h5 className="mt-2 text-center">WHAT TO KNOW ME?</h5>
                            <p className="text-center">I am A Full Stack Web-Developer. I have Serious passion for making Interactive Websites. Currently I am working with <span style={{color:'#05C2C9',fontStyle:'bold'}}>React.Js</span> .</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="col-md-6  d-flex flex-column justify-content-center">
                    <ProgressBar  className="mb-3" style={{height:'20px',borderRadius:'1px',width:'85%'}}  now={95} label={<div><span >HTML</span> <span>95%</span></div>} />
                    <ProgressBar className="mb-3" style={{height:'20px' ,borderRadius:'1px',width:'85%'}}  now={93} label={<div><span>CSS</span> <span>93%</span></div>} />
                    <ProgressBar className="mb-3" style={{height:'20px' ,borderRadius:'1px',width:'85%'}} now={80} label={<div><span>Java Script</span> <span>80%</span></div>} />
                    <ProgressBar className="mb-3" style={{height:'20px',borderRadius:'1px',width:'85%'}}  now={70} label={<div><span>React </span> <span>65%</span></div>} />
                    <ProgressBar className="mb-3" style={{height:'20px',borderRadius:'1px',width:'85%'}}  now={92} label={<div><span>Bootstrap</span> <span>92%</span></div>} />
                    <ProgressBar className="mb-3" style={{height:'20px',borderRadius:'1px',width:'85%'}}  now={89} label={<div><span>Material UI</span> <span>89%</span></div>} />
                    <ProgressBar className="mb-3" style={{height:'20px',borderRadius:'1px',width:'85%'}}  now={94} label={<div><span>C</span> <span>94%</span></div>} />
                    <ProgressBar className="mb-3" style={{height:'20px',borderRadius:'1px',width:'85%'}}  now={85} label={<div><span>JAVA</span> <span>85%</span></div>} />
                    </div>
            </div>
            </div>
        </section>
    );
};

export default About;