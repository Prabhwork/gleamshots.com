import React from 'react';
import { Row, Col } from 'react-bootstrap';  // Added Row import
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

function Aboutus() {
    return (
        <div className="aboutus-dark-section" id='aboutus'>
            <div className="aboutus-dark-container">
                <h2 className="aboutus-dark-title">About Us</h2>
                <p className="aboutus-dark-subtitle">
                    Creative. Fast. Impactful.
                </p>

                <div className="aboutus-dark-content">
                    <p>
                        At <strong>GleamShots</strong>, we turn ideas into digital success. Our team specializes in quick, high-quality services that elevate your brand.
                    </p>

                    <marquee behavior="scroll" direction="left" scrollamount="6" style={{ padding: '0', marginBottom: '35px' }}>
                        <ul className="aboutus-dark-content-list">
                            <li>🚀 Fast Delivery</li>
                            <li>📱 Social Media Promotions</li>
                            <li>💻  Modern Website Designs </li>
                            
                        </ul>
                    </marquee>


                    {/* Social icons row */}
                    <Row className="justify-content-center mb-4">
                        <Col xs="auto" className="social-col">
                            <div className="social-icon d-flex gap-3 justify-content-center">
                                <a href="https://youtube.com/@gleamshots?si=IRt9DyfUQVxpm0rX" target="_blank" rel="noopener noreferrer">
                                    <img src={navIcon1} alt="youtube" />
                                </a>
                                <a href="https://www.facebook.com/share/19oQ9Fxb6q/" target="_blank" rel="noopener noreferrer">
                                    <img src={navIcon2} alt="facebook" />
                                </a>
                                <a href="https://www.instagram.com/gleam_shots/" target="_blank" rel="noopener noreferrer">
                                    <img src={navIcon3} alt="instagram" />
                                </a>
                            </div>
                        </Col>
                    </Row>

                    <p className="aboutus-dark-highlight">
                        Let’s make your brand stand out.
                    </p>

                    <div className="aboutus-contact-info">
                        <h3>Contact Information</h3>
                        <p><strong>Email:</strong> gleamshots@gmail.com</p>
                        <p><strong>Phone:</strong> +91 9971381635, +91 9650598120</p>
                        <p><strong>Office Hours:</strong> 9 AM - 6 PM, Mon - Fri</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
