import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './Services.scss'

function ServiceOverviews(props) {
    const serviceData = props.serviceData;
  return (
    <div className='ServiceOverviews'>
        <Container>
            <Row>
                {serviceData.map((item)=>{
                    return<Col sm={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{item.serviceOverviewTitle}</Card.Title>
                                <Card.Text>{item.serviceOverviewDescription}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>
        </Container>
    </div>
  )
}

export default ServiceOverviews