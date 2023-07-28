import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavigationBar.scss';
import '../../img/ImagePath';
import imagePaths from '../../img/ImagePath';
function NavigationBar() {
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newBackgroundColor = scrollY > 100 ? '#3a364d' : 'transparent';
    setBackgroundColor(newBackgroundColor);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{ backgroundColor}}>
      <Container>
      <Navbar.Brand><Link to="/"><img src={imagePaths.logo} alt="Pragmatyc" height="40" /></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <ul  className='flex'>
            <li  className='display-inline'><Link to="/services">Services</Link>
              <ul>
                <li><Link to="/product-consulting">Product Consulting</Link></li>
                <li><Link to="/product-development">Product Development</Link></li>
                <li><Link to="/product-modernization">Product Modernization</Link></li>
              </ul>
            </li>
            <li  className='display-inline'><Link to="/company">Expertise</Link>
              <ul>
                <li><Link to="/product-consulting">About Us</Link></li>
                <li><Link to="/product-development">What Drive Us</Link></li>
                <li><Link to="/product-modernization">Career</Link></li>
              </ul>
            </li>
            <li  className='display-inline'><Link to="/success-stories">Success Stories</Link></li>
            <li  className='display-inline'><Link to="/insights">Insights</Link></li>
            <li  className='display-inline'><Link to="/contact">Let's Talk!</Link></li>
          </ul>
        
           
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    
  </>
  )
}

export default NavigationBar;