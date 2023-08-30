import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { FaDownload, FaGithub } from 'react-icons/fa';
import logo from './assets/logo.png';
import './App.css'; // Make sure to adjust the path to your CSS file

const ResponsiveNavbar = () => {
    const [navbarTransparent, setNavbarTransparent] = useState(true);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setNavbarTransparent(false);
        } else {
            setNavbarTransparent(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar  expand="lg" variant="dark" fixed="top" className={`custom-navbar ${navbarTransparent ? 'navbar-transparent' : ''}`}>
            <Navbar.Brand>
                <img src={logo} width="30" height="30" className="d-inline-block align-top margin-left-logo" alt="Logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto align-items-center"> {/* Add align-items-center class */}
                    <Nav.Link href="#home" className="nav-link">Deku Web</Nav.Link>
                    <Nav.Link href="#about" className="nav-link">About</Nav.Link>
                    <NavDropdown title="Socail Media Handles" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="https://twitter.com/Deku_app">Twitter</NavDropdown.Item>
                        <NavDropdown.Item href="https://github.com/deku-messaging">Github</NavDropdown.Item>
                        {/* <NavDropdown.Item href="#services">LinkedIn</NavDropdown.Item> */}
                    </NavDropdown>
                </Nav>
                <Nav> {/* Move the buttons to a separate Nav */}
                    <Button variant="link" href="https://play.google.com/store/apps/details?id=com.afkanerd.deku" className="nav-icon-button margin-left-btn">
                        <FaDownload /> Download
                    </Button>
                    <Button variant="link" href="https://github.com/deku-messaging" className="nav-icon-button margin-left-btn">
                        <FaGithub /> GitHub
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default ResponsiveNavbar;
