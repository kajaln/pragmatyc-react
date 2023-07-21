import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Heading from '../../layout/Heading/Heading'
import './EcoSystem.scss'

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
                    
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default EcoSystem