import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; // Custom CSS

const Header = () => {
    return (
        <Navbar expand="lg" bg="light" fixed="top" className="app-header">
            <Container>
                {/* Logo */}
                <Navbar.Brand as={Link} to="/">
                    <img
                        src="https://www.preciousinfosystem.com/images/logo/preciousLogoSquare.png"
                        alt="Precious Logo"
                        className="precious-logo"
                    />
                </Navbar.Brand>

                {/* Navbar Toggler */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Collapsible Navbar */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {/* Home */}
                        <Nav.Link as={Link} to="/" className="nav-item">Home</Nav.Link>

                        {/* Company Dropdown */}
                        <Nav.Link as={Link} to="#" className="nav-item">Company</Nav.Link>

                        {/* Service Dropdown */}
                        <Nav.Link as={Link} to="#" className="nav-item">Service</Nav.Link>

                        {/* Technology Dropdown */}
                        <Nav.Link as={Link} to="#" className="nav-item">Technology</Nav.Link>

                        {/* Contact Us Dropdown */}
                        <Nav.Link as={Link} to="/contact-us" className="nav-item">Contact Us</Nav.Link>

                        {/* Enquiry Button */}
                        <Button variant="danger" className="ms-3">Enquiry</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
