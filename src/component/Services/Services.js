import React from 'react';
import "./Services.scss";
import Heading from '../../layout/Heading/Heading';
import { Card, Col, Container, Figure, Row } from 'react-bootstrap';
import "../../img/ImagePath.js";
import { ReactComponent as ProductConsultingImg } from '../../img/svg/consulting.svg';
import { ReactComponent as ProductDevelopmentImg } from '../../img/svg/development.svg';
import { ReactComponent as ProductModernizationImg } from '../../img/svg/modernization.svg';
import imagePaths from '../../img/ImagePath.js';

function Services(props) {
    const headingData = {
        mainHeading: 'Services',
        subHeading: 'To create and deliver value',
        description:'Whether your product is in abstract form (idea), in-making or already developed and launched, we serve to elevate user experience and accelerate product’s growth.'
    };
    
    const ServiceItems = [
        {   id: 1,
           serviceImg:  <ProductConsultingImg/>,
            serviceTitle: 'Product Consulting',
            serviceDescription: 'Strategies to help you keep up with dynamic business environment.'
         },
         {   id: 2,
           serviceImg: <ProductDevelopmentImg />,
            serviceTitle: 'Product Development',
            serviceDescription: 'Technology practices to create seamless user experience in agile way.'
         },
         {   id: 3,
           serviceImg: <ProductModernizationImg />,
            serviceTitle: 'Product Modernization',
            serviceDescription: 'Innovations for existing product to stay relevant and continue winning.'
         },
   
    ]
  return (
        <div className='services'>
            <Container>
                {/* <h1>Services</h1> */}
                <Heading headingData={headingData} />  
                <Row>
                    {ServiceItems.map((item) => {
                    return <Col xs={12} md={4} key={item.id}>
                            <Card>
                                <Card.Body>
                                    <Figure>
                                        {item.serviceImg}
                                    </Figure> 

                                    <Card.Title>{item.serviceTitle}</Card.Title>
                                    <Card.Text>{item.serviceDescription}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    })}
                
                </Row>
            </Container>
        </div>
   
  )
}

export default Services;