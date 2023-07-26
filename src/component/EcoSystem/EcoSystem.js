import React from 'react'
import { Col, Container, Figure, Row } from 'react-bootstrap'
import Heading from '../../layout/Heading/Heading'
import './EcoSystem.scss'
import '../../img/ImagePath'
import imagePaths from '../../img/ImagePath'

function EcoSystem() {
    const headingData = {
        mainHeading: 'Ecosystem',
        subHeading: 'To nurture and grow products',
    };
  return (
    <div className='eco-system'>
        <Container>
            <Heading headingData={headingData} />
            <Row>
                <Col>
                    <Figure>
                            <img src={imagePaths.ecosystem} alt="Ecosystem" />
                    </Figure> 
                </Col>

                <Col>
                    <ul className='eco-content'>
                        <li>
                            <h5> PROD5</h5>
                            <p>Our product engineering and management framework leverages best out of business model canvas, design thinking, lean start-up, agile development, growth hacking and other important concepts for your product's growth.</p>
                        </li>

                        <li>  
                            <h5>Tech Stack</h5>
                            <p>Technology is a tool to solve problems and make world better place. We use modern and futuristic technologies that are relevant to problem at hand.</p>
                        </li>

                        <li>
                            <h5>Resources</h5>
                            <p>Continuous learning, research, experiments and knowledge sharing is what keeps us and our clients at advantage.</p>
                        </li>
                        
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default EcoSystem