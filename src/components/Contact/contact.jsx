import emailjs from "emailjs-com";
import React from 'react';
import './contact.scss'
export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_7bbfrnp', 'template_ukjcnlw', e.target, 'fOWG3Swea4-7WdKgt')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div className="contact" id="contact">
            <div className="about">
            <h1 className="resume"> About Ricky  </h1>
            <p className="text"> I am a 22 year old based out of Los Angeles California looking for a role in full stack or front end development. I recently completed the software engineering immersive program with General Assembly and despite the challenges of it the lessons as an individual and developer were well worth it. Software engineering is a field that has always interested me because I love being able to solve problems and exploring the unknowns of anything excites me. Ultimately I am looking for a role that will lead to growth for myself not only as a developer but as an individual as well. Please feel free to contact me or connect with me regarding any opportunities via email and I will do my best to respond promptly. </p>
            </div>
          <section class="mb-4">
            <div className="message"> <h2> Contact Me ! </h2> </div>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="name">
                            <input type="text" className="form-control" placeholder="Your Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Your Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Leave a message and I'll try my best to respond ASAP!" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
              
            </div>
          </section>
        </div>
    )
}