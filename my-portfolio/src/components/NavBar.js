import { useEffect, useState } from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import {FaInstagram} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';




export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.screenY > 50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="/" style={{color: 'white'}}>
                    Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('#home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('#skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('#projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="/">
                                <FaGithub className="iconEffect" style={{color: 'white'}}/>
                            </a>
                            <a href="/">
                                <FaInstagram className="iconEffect" style={{color: 'white'}}/>
                            </a>
                            <a href="/">
                                <FaLinkedin className="iconEffect" style={{color: 'white'}}/>
                            </a>
                        </div>
                        <button className="vvd"><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}