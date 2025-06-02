import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false); // For hamburger toggle

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false); // Collapse navbar on link click
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""} expanded={expanded}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <HashLink 
              to="#home" 
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('home')}
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Home
            </HashLink>
            <HashLink 
              to="#aboutus" 
              className={activeLink === 'aboutus' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('aboutus')}
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              About
            </HashLink>
            <HashLink 
              to="#projects" 
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('projects')}
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Works
            </HashLink>
            <HashLink 
              to="#skills" 
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('skills')}
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Services
            </HashLink>
          </Nav>
          <span className="navbar-text">
            <HashLink 
              to="#connect" 
              onClick={() => setExpanded(false)} // Also collapse on button click
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              <button className="vvd"><span>Let's Connect</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
