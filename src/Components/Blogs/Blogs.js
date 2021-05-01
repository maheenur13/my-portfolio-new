import React from 'react';
import BlogData from './BlogData';
const Blogs = () => {
    return (
        <section style={{}}>
            <div className="container pt-5 pb-5">
            <h1 className="text-center mb-5">BLOGS</h1>
            <div className="d-flex justify-content-around align-items-center">
                {
                    BlogData.map(data=><div style={{width:'300px'}} className="d-flex flex-column align-items-center justify-content-center border p-3">
                        <img className="w-100" src={data.blogImg} alt="" />
                        <div className="mt-3">
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