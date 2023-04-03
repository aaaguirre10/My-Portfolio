import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import ContactAstro from "../assets/img/ContactAstro.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
    const form = useRef();
    const [buttonText, setButtonText] = useState('Send');

    // EmailJS template
    const sendEmail = (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        emailjs.sendForm('service_dru56hp', 'template_cw57aal', form.current, 'Y18CNOJZaULZjwdP4')
            .then((result) => {
                setButtonText("Sent Successfully");
                console.log(result.text)
            }, (error) => {
                setButtonText("Sending Failed");
                console.log(error.text)

            });
        e.target.reset();
    };

    return (
    <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
                <Col size={12} md={6}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={ContactAstro} alt="Contact Us"/>
                        }
                    </TrackVisibility>
                </Col>
                <Col size={12} md={6}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <h2>Get In Touch</h2>
                                <form ref={form} onSubmit={sendEmail}>
                                <Row>
                                    <Col size={12} sm={6} className="px-1">
                                        <input name="user_fname" type="text" placeholder="First Name" required/>
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input name="user_lname" type="text" placeholder="Last Name" required/>
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input name="user_email" type="email" placeholder="Email Address" required/>
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input name="user_pnumber" type="tel" placeholder="Phone No." required/>
                                    </Col>
                                    <Col size={12} className="px-1">
                                        <textarea name="message" rows="6" placeholder="Message" required></textarea>
                                        <button type="submit"><span>{buttonText}</span></button>
                                    </Col>
                                </Row>
                                </form>
                            </div>
                        }
                    </TrackVisibility>
                </Col>
            </Row>
        </Container>
    </section>
)
}