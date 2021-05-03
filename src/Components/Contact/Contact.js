import React from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        // console.log('email sent', e.target.value);
        emailjs.sendForm('service_mahee_email', 'template_ys3pbdn', e.target, 'user_jFyozLCM8J18y21KPtMi3')
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <section id="contact" style={{position:'relative',overflow:'hidden'}} className="pt-5 pb-4">
            <svg data-aos="fade-right" style={{position:'absolute',zIndex:'-1',top:'0',height:'100%'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 320"><path fill="#252934" fill-opacity="1" d="M0,33L1440,145L1440,320L0,320Z"></path></svg>
            <svg data-aos="fade-left" style={{position:'absolute',zIndex:'-1',top:'0',height:'100%'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 320"><path fill="#252934" fill-opacity="1" d="M0,87L1440,0L1440,320L0,320Z"></path></svg>
            <div className="container  mb-5" style={{zIndex:'3',marginTop:'150px'}}>
                <h1 data-aos="fade-down" className="text-center text-white pt-5">Contact</h1>
                <div data-aos="zoom-in" className="devider text-white"></div>
                <form data-aos="fade-up" className="m-4 d-flex flex-column align-items-center" onSubmit={sendEmail}>
                    <div className="form-group w-75 mt-5">
                    <input className="w-100 mb-3 p-2" type="text" name="from_name" placeholder="Name" required/>
                    </div>
                    <div className="form-group w-75">
                    <input className="w-100 mb-3 p-2" type="email" name="user_email" placeholder="Email" required/>
                    </div>
                   <div className="form-group w-75 mb-4">
                   <textarea className="w-100 p-4" name="message" placeholder="Type Your Message" required/>
                   </div>
                   
                    <input style={{padding:'3px 50px'}} type="submit" value="Send" />
                    
                </form>
            </div>
        </section>
    );
};

export default Contact;