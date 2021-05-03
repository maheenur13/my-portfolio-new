import React, { useState } from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import image1 from '../../Images/ProjectImages/project1Thumb.PNG';
import image2 from '../../Images/ProjectImages/project2Thumb.PNG';
import image3 from '../../Images/ProjectImages/project3Thumb.PNG'
import image4 from '../../Images/ProjectImages/project4Thumb.PNG'
import image5 from '../../Images/ProjectImages/project5Thumb.PNG'
import Modal from 'react-modal';
import './AllProjects.css';
import { Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'
// import projectsData from '../AllProjects/AllProjects';
const projectsData = [
    {
        name: 'Musical Instrument House',
        thumbnail: image1,
        image1: '',
        image2: '',
        gitLink: 'https://github.com/Porgramming-Hero-web-course/complete-website-client-maheenur13',
        liveLink: 'https://buy-music-instruments-bd.web.app',
        dataAos:'fade-right'
        
    },
    {
        name: 'Guitar World',
        thumbnail: image2,
        image1: '',
        image2: '',
        gitLink: 'https://github.com/Porgramming-Hero-web-course/full-stack-client-maheenur13',
        liveLink: 'https://guitar-world-7940d.web.app/',
        description: ``,
        dataAos:'fade-up'
    },
    {
        name: 'Share Ride',
        thumbnail: image3,
        image1: '',
        image2: '',
        gitLink: '',
        liveLink: 'https://share-your-ride-c072d.firebaseapp.com/',
        description:'',
        dataAos:'fade-left'
    },
    {
        name: 'League Finder',
        thumbnail: image4,
        image1: '',
        image2: '',
        gitLink: 'https://github.com/Porgramming-Hero-web-course/simple-react-maheenur13 ',
        liveLink: 'https://soccer-player-auction.netlify.app/',
        description: '',
        dataAos:'fade-right'
    },
    {
        name: 'Soccer Auction',
        thumbnail: image5,
        image1: '',
        image2: '',
        gitLink: '',
        liveLink: '',
        description: '',
        dataAos:'fade-left'
    }
]
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width:'80%',
        height:'80%',
        backgroundColor: '#252934'
    }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
const AllProjects = () => {
    useEffect(()=>{
		AOS.init({duration:1100});
	},[])

    // console.log(projectsData);
    // console.log(subtitle)
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }



    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div >
            <button  className="open-modal-btn" onClick={openModal}>SEE ALL PROJECTS</button>
            <Modal 
                isOpen={modalIsOpen}
                //   onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
                <h3 className="text-center text-white">PROJECTS</h3>
                <button className="modal-close-button" onClick={closeModal}>X</button>
                <div className="d-flex mt-5 flex-wrap justify-content-center align-items-center">
                    {
                        projectsData.map(data => <Card  style={{overflow:'hidden',width:'340px'}} data-aos={data.dataAos} className=" mr-2 mb-4 project-box">
                            <Card.Img style={{width:'100%'}} src={data.thumbnail} alt="Card image" />
                            <Card.ImgOverlay className=" image-overlay w-100">
                                <h6 style={{fontSize:'1rem'}}  className="text-center">{data.name}</h6>
                                <div className=" mt-5  d-flex justify-content-around align-items-center">
                                <a href={data.gitLink} target="_blank" rel="noreferrer" >GitHub</a><a href={data.liveLink} target="_blank" rel="noreferrer">Live Site</a>
                                </div>
                            </Card.ImgOverlay>
                        </Card>)
                    }
                </div>
            </Modal>
        </div>
    );

};


export default AllProjects;