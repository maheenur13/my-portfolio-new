import React, { useEffect } from 'react';
import BlogData from './BlogData';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blogs = () => {
    useEffect(()=>{
		AOS.init({duration:1100});
	},[])
    return (
        <section  id="blogs" style={{zIndex:'1'}}>
            <div className="container pt-5">
            <h3 data-aos="fade-down" className="text-center mt-4 ">BLOGS</h3>
            <div data-aos="zoom-in" className="devider"></div>
            <div data-aos="fade-up" className="d-flex justify-content-around align-items-center mt-3">
                {
                    BlogData.map(data=><div style={{width:'300px'}}  className="d-flex flex-column align-items-center justify-content-center p-3">
                        <img className="w-100" src={data.blogImg} alt="" />
                        <div className="mt-2">
                        <a className="text-center" href="https://differentmahee13.medium.com/learning-web-development-at-programming-hero-7ccd6d7b1d95" target="_blank" rel="noreferrer">{data.blogTitle}</a>
                        </div>
                        
                    </div>)
                }
            </div>
            </div>
            
            
        </section>
    );
};

export default Blogs;