import React from 'react'
import { Button, Card, Col, Container, Figure, Row } from 'react-bootstrap'
import Heading from '../../layout/Heading/Heading'
import imagePaths from '../../img/ImagePath'
import './Blog.scss'

function Blog() {
    const headingData = {
        mainHeading: 'Blogs',
        subHeading: 'Latest Articles and Updates',
     
    };
    
    const BlogItems = [
        {   id: 1,
           blogImg:  imagePaths.blogImage1,
            blogTitle: '6 Key Trends for Digital Transformation in Healthcare in 2021.',
            blogDescription: ' ‘Digital Care’ is the new normal for Healthcare industry and now every stakeholder.'
         },
         {   id: 2,
           blogImg: imagePaths.blogImage2,
            blogTitle: 'MAXIMESS introduces its new brand identity',
            blogDescription: 'MAXIMESS is a Digital Product Engineering company. Over the years we have developed and renovated digital products for clients all over the world.'
         },
         {   id: 3,
           blogImg: imagePaths.blogImage3,
            blogTitle: 'MAXIMESS celebrated virtually',
            blogDescription: 'The world keeps on changing, so does our way of work and life. The change we saw in past one year shocked most of us.'
         },
   
    ]
  return (
    <div className='blog'>
        <Heading headingData={headingData} />
        <Container>
            <Row>
                {BlogItems.map((item) => {
                return <Col xs={12} md={4} key={item.id}>
                        <Card>
                            <Card.Body>
                                <Figure>
                                   <img src={item.blogImg} alt='' />
                                </Figure> 
                                <div className='card-content'>
                                    <Card.Title><a href="#">{item.blogTitle}</a></Card.Title>
                                    <Card.Text>{item.blogDescription}</Card.Text>
                                    <Button>Read More</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>
        </Container>
    </div>
  )
}

export default Blog