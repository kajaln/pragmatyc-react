import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../img/ImagePath';
import { Link } from 'react-router-dom';
import imagePaths from '../../img/ImagePath';
import { ArrowRight, Facebook, Instagram, Linkedin, TelephoneInbound, TelephoneInboundFill, Twitter } from 'react-bootstrap-icons';
import './Footer.scss';

function Footer() {
  return (
    <div className='footer'>
        <Container>
            <div className='row1'>
                <Row>
                    <Col sm={2}l >
                        <Link to="/" className='logo-icon'><img src={imagePaths.logoIcon} alt='Pragmatyc' height="40" /></Link>
                    </Col>
                    <Col>
                        <h5>Collaborate</h5>
                        <p><a href='mailto:collaborate@pragmatyc.com' target='_blank' rel='noopener'>collaborate@pragmatyc.com</a></p>
                        <p><a href='tel:+917722024202' target='_blank' rel='noopener'>+917722024202</a></p>
                    </Col>
                    <Col>
                        <h5>Careers</h5>
                        <p><a href='mailto:collaborate@pragmatyc.com' target='_blank' rel='noopener'>collaborate@pragmatyc.com</a></p>
                        <p><a href='tel:+917722024202' target='_blank' rel='noopener'>+917722024201</a></p>
                    </Col>
                    
                    <Col>
                        <h5>Subscribe to Blog</h5>
                        <form></form>
                    </Col>
                </Row>
            </div>
            <div className='row2'>
                <Row>
                    <Col>
                        <h5>Ashburn</h5>
                        <p>
                        44679 Endicott Drive, <br />
                        Suite 300 #742,<br />
                        Ashburn, VA, 20147,<br />
                        USA<br />

                        <span className='mt-2'><TelephoneInboundFill /><a href='tel:+1 (571) 5174007'>+1 (571) 5174007</a></span>
                        </p>
                    </Col>
                    <Col>
                        <h5>Pune</h5>
                        <p>
                            Teerth2Work, Bengaluru<br />
                            - Mumbai Hwy, Baner,<br />
                            Pune, MH, 411045<br />
                            INDIA<br />

                            <span className='mt-2'><TelephoneInboundFill /> <a href='tel:+91 7722024202'>+91 7722024202</a></span>
                        </p>
                    </Col>
                    <Col>
                        <h5>Nagpur</h5>
                        <p>
                            B wing, North Block, CF Building,<br />
                            MIHAN SEZ,<br />
                            Nagpur, MH, 441108<br />
                            INDIA<br />

                            <span className='mt-2'><TelephoneInboundFill /><a href='tel:+91 7722024202'>+91 7722024202</a></span>
                        </p>
                    </Col>
                    <Col>
                        <h5>Nagpur</h5>
                        <p>
                            202, Rama Niwas, Hill Road,<br />
                            Ram Nagar,<br />
                            Nagpur, MH, 440010<br />
                            INDIA<br />

                            <span className='mt-2'><TelephoneInboundFill /><a href='tel:+91 7722024201'>+91 7722024201</a></span>
                        </p>
                    </Col>
                </Row>
            </div>
            
        </Container>
        <div className='footer-bottom'>
            <Container>
                <Row className='align-items-center'>
                    <Col>
                        <a href='#'>Privacy Policy</a>
                    </Col>
                    <Col>
                        <p className='text-center'>2023 Pragmatyc All rights reserved</p>
                    </Col>
                    <Col>
                        <ul className='flex justify-end'>
                            <li><a href='https://twitter.com/MAXIMESS_IT' target='_blank'><Twitter  width="20" height="20" /></a></li>
                            <li><a href='https://www.facebook.com/MaximessNagpur/' target='_blank' ><Facebook  width="20" height="20" /> </a></li>
                            <li><a href='https://in.linkedin.com/company/maximess' target='_blank'> <Linkedin  width="20" height="20" /></a></li>
                            <li><a href='https://www.instagram.com/maximess_it/' target='_blank'> <Instagram  width="20" height="20" /> </a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default Footer