import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../img/ImagePath.js";
import './CaseStudies.scss';
import { Container } from 'react-bootstrap';
import Heading from '../../layout/Heading/Heading.js';
import imagePaths from '../../img/ImagePath.js';

function CaseStudies() {
    const headingData = {
        mainHeading: 'Case Studies',
        subHeading: 'Client Success Stories',
        description: 'We have delivered digital products in healthcare, education, consumer electronics, construction etc. employing IoT, AI and many other technologies relevant to the solution.'
    };
    // CaseStudies Carousel Settings
  const settings = {
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    speed: 500,
    slidesToScroll: 3,
    arrows: true,
    dots: false,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };
    const CaseStudyItems = [
        {   
          id: 1,
          caseStudyImage: imagePaths.caseStudy1,
          caseStudyTitle:'From Paperwork to Productivity: Developing an Integrated workplace Safety Product',
          caseStudyDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
         },
         {   
          id: 2,
          caseStudyImage:  imagePaths.caseStudy2,
          caseStudyTitle:'Parenting of product evolution from single user app to multiuser aggregator platform',
          caseStudyDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
         },
         {   
          id: 3,
          caseStudyImage:  imagePaths.caseStudy3,
          caseStudyTitle:'Development of Childcare & Parenting Mobile App',
          caseStudyDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
         },
         {   
          id: 4,
          caseStudyImage: imagePaths.caseStudy1,
          caseStudyTitle:'From Paperwork to Productivity: Developing an Integrated workplace Safety Product',
          caseStudyDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
         },
         {   
          id: 5,
          caseStudyImage: imagePaths.caseStudy2,
          caseStudyTitle:'Parenting of product evolution from single user app to multiuser aggregator platform',
          caseStudyDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
         },
         {   
          id: 6,
          caseStudyImage: imagePaths.caseStudy3,
          caseStudyTitle:'Development of Childcare & Parenting Mobile App',
          caseStudyDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
         },
    ]
  return (
    <div className='case-studies'>
        <Container>
          <Heading headingData={headingData} />
          <div className='case-study-slider'>
            <Slider {...settings}>
              {CaseStudyItems.map((item)=> {
                return<div className='slide' key={item.id} >
                  <div className='case-study-item' >
                    <img src={item.caseStudyImage} />
                    <div className='case-study-brief'>
                      <h5>{item.caseStudyTitle}</h5>
                      <p>{item.caseStudyDescription}</p>
                    </div>
                  </div>
                </div>
              })}
            </Slider>
          </div>
        </Container>
    </div>
  )
}

export default CaseStudies;