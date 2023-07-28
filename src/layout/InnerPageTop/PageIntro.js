import React from 'react'
import { ReactComponent as ProductConsultingImg } from '../../img/svg/consulting.svg';
import { Col, Container, Row } from 'react-bootstrap';
import imagePaths from '../../img/ImagePath';

function PageIntro(props) {
    const { pageIntroText, pageIntroImage} = props.pageIntroData;

  return (
    <div className='page-intro'>
        <Container className='text-left pt-8 '>
            <Row>
                <Col className='flex flex-column justify-center'>
                    {/* <span className='inline-block p-2 mb-2'  ><ProductConsultingImg className='inline-block' /></span> */}
                    <h5 className='large font-normal'>{pageIntroText}</h5>
                </Col>
                <Col>
                    <span className='vector-img'>
                        <img src={pageIntroImage} />
                    </span>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default PageIntro