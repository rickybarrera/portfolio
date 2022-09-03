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
          <section class="mb-4">

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