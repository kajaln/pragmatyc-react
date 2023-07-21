import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../img/ImagePath';
import { Link } from 'react-router-dom';
import imagePaths from '../../img/ImagePath';
import './Footer.scss';

function Footer() {
  return (
    <div className='footer'>
        <Container>
            <div className='row1'>
                <Row>
                    <Col >
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
                    </Col>
                </Row>
            </div>
            <div className='row2'>
                <Row>
                    <Col></Col>
                </Row>
            </div>
        </Container>
    </div>
  )
}

export default Footer