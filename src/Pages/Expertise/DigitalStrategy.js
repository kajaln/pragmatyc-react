import React from 'react'
import { Card, Col, Container, Figure, Row } from 'react-bootstrap';
import Heading from '../../layout/Heading/Heading';

function DigitalStrategy() {
const headingData = {
    mainHeading: 'Digital Strategy',
    subHeading: 'Value Engineering Masterplan',
    description:'Creating seamless and delightful experience for your customers, making sure that the right technology is used and innovating to engineer differentiated value holds the key to growth.'
};
  return (
    <div>
        <Container>
            <Heading headingData={headingData} /> 
            <Row>
                <Col xs={12} md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Img></Card.Img>
                            <Card.Title>Customer Experience</Card.Title>
                            <Card.Text>Hyper-focus on Customer Experience, which implies providing a fast, responsive, frictionless experience through-out their journey.</Card.Text>
                            <Card.Subtitle>"The Customers perception is your reality."</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Img></Card.Img>
                            <Card.Title>Customer Experience</Card.Title>
                            <Card.Text>Hyper-focus on Customer Experience, which implies providing a fast, responsive, frictionless experience through-out their journey.</Card.Text>
                            <Card.Subtitle>"The Customers perception is your reality."</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Img></Card.Img>
                            <Card.Title>Customer Experience</Card.Title>
                            <Card.Text>Hyper-focus on Customer Experience, which implies providing a fast, responsive, frictionless experience through-out their journey.</Card.Text>
                            <Card.Subtitle>"The Customers perception is your reality."</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default DigitalStrategy