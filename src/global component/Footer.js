import React from "react";
import './Footer.css';
import  { Component } from 'react';

const Footer = () => {
    return (
        <>
            {/* footer top part */}
            <footer className="app-footer">
                <div className="container">
                    <div className="footer-top-part">
                        <div className="footer-col footer-col1">
                            <h4>Precious Infosystem Pvt. Ltd.</h4>
                            <p>Our Commitment: Making Technology Work for You!</p>
                        </div>
                        <div className="footer-col footer-col2">
                            <h4>Quick Links</h4>
                            <div className="footer-links">
                                <a href="#">Industries we serve</a>
                                <a href="#">Press Release</a>
                                <a href="#">Career Opportunities</a>
                            </div>
                        </div>
                        <div className="footer-col footer-col3">
                            <h4>Services</h4>
                            <div className="footer-links">
                                <a href="#">Website Development</a>
                                <a href="#">Mobile App Development</a>
                                <a href="#">Software Development</a>
                                <a href="#">Digital Marketing</a>
                                <a href="#">UI/UX Design</a>
                            </div>
                        </div>
                        <div className="footer-col footer-col4">
                            <h4>Contact Us</h4>
                            <p>01, MR 9, Scheme No 51, Sector B, Chandra Nagar, Indore, Madhya Pradesh, India (452010)</p>
                            <address className="address">
                                <a href="mailto:contact@preciousinfosystem.com">contact@preciousinfosystem.com</a><br />
                                <a href="tel:+917880087103">P: +91-7880087103</a>
                            </address>
                        </div>
                    </div>

                    {/* footer bottom part */}
                    <div className="footer-bottom-part">
                        <div className="text-center">
                            &copy; Copyright 2024. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
