import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faRocket,faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import { faCodepen,faConnectdevelop } from '@fortawesome/free-brands-svg-icons'
import { Card, CardDeck } from 'react-bootstrap';
import './About.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import image from '../../Images/profile.jpg'
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
    
    return (
        <section className="p-5" >
            <h1 className="text-center m-5">ABOUT ME</h1>
            <div className="container">
                <div className="d-flex justify-content-around align-itmes-center flex-wrap mb-5">
                    {
                        aboutInfo.map(info => <div className="border d-flex p-3 flex-column justify-content-around align-items-center" style={{width:'200px',marginTop:'50px',overflow:'hidden'}} key={info.id}>
                            <FontAwesomeIcon className="icon-design" variant='top' icon={info.icon} />
                            <div>
                                <h4 className="text-center">{info.title}</h4>
                                <p className="text-center">
                                    {info.description}
                                </p>
                            </div>
                            
                        </div>)
                    }
                </div>
            </div>
            <div className="container pt-5">
            <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <img src={image} style={{width:'250px'}} alt="" />
                        </div>
                        <div>
                            <h5 className="mt-4 text-center">WHAT TO KNOW ME?</h5>
                            <p className="text-center">I am A Full Stack Web-Developer. I have Serious passion for making Interactive Websites. Currently I am working with <span style={{color:'#05C2C9',fontStyle:'bold'}}>React.Js</span> .</p>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                    <ProgressBar  className="mb-3" style={{height:'27px',borderRadius:'1px'}}  now={95} label={<div><span >HTML</span> <span>90%</span></div>} />
                    <ProgressBar className="mb-3" style={{height:'27px' ,borderRadius:'1px'}}  now={93} label={<div><span>CSS</span> <span>93%</span></div>} />
                    <ProgressBar className="mb-3" style={{height:'27px' ,borderRadius:'1px'}} now={80} label={<div><span>Java Script</span> <span>80%</span></div>} />
                    <ProgressBar className="mb-3" style={{height:'27px',borderRadius:'1px'}}  now={65} label={<div><span>React </span> <span>65%</span></div>} />
                    <ProgressBar className="mb-3" style={{height:'27px',borderRadius:'1px'}}  now={92} label={<div><span>Bootstrap</span> <span>92%</span></div>} />
                    <ProgressBar className="mb-3" style={{height:'27px',borderRadius:'1px'}}  now={89} label={<div><span>Material UI</span> <span>89%</span></div>} />
                    <ProgressBar className="mb-3" style={{height:'27px',borderRadius:'1px'}}  now={90} label={<div><span>HTML</span> <span>90%</span></div>} />
                    </div>
            </div>
            </div>
        </section>
    );
};

export default About;