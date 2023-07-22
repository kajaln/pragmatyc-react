import React from 'react'
import './ClientTestimonials.scss';
import Heading from '../../../layout/Heading/Heading';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagePaths from '../../../img/ImagePath';
// import imagePaths from '../../../img/ImagePath';

function ClientTestimonials() {
  // Heading Data
  const headingData = {
      mainHeading: 'Testimonials',
      subHeading: 'Words from Client',
  };
  // Testimonial Carousel Settings
  const settings = {
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1,
        speed: 500,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
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

      // Client Testimonial data

      const clientTestimonialItems = [
        {   
          id: 1,
          clientImage: imagePaths.clientImage1,
          clientName: 'Shlomo Engel',
          clientDesignation: 'R&D Head,  C+A Global, Edison, NJ, USA',
          clientWords:  'We have been working with Pragmatyc for more than 4 years. Pragmatyc Mobility Team has rejuvenated our key products for clients like Kodak, Polaroid, Lifeprint and HP. With team’s ability to handle concurrent assignment and deliver with required quality in time has resulted in increase in our positive ratings. As a client we are very happy with the performance of Praful, Deepti and team.',
           
         },
         {   
          id: 2,
          clientImage: imagePaths.clientImage2,
          clientName: 'Sachin Punde',
          clientDesignation: 'Co- founder,  Squared Methods, NY, USA.',
          clientWords:  'I approached Pragmatyc with a very raw idea about the product to be made. I am impressed with how they competently transformed it into a functioning portal, right from design, documentation, user research, development, and launch. They are also helping for growth of the product.',
         },
         {   
          id: 3,
          clientImage: imagePaths.clientImage3,
          clientName: 'Dheeraj Bhagat',
          clientDesignation: 'Founder,  Great Place IT Services, India.',
          clientWords:  'Team Pragmatyc picked idea of Ezi2care from single line requirement and using their expertise in Digital Product Engineering they have created a wonderful product. Happy working with Pragmatyc, they are true partners.I approached Pragmatyc with a very raw idea about the product to be made. I am impressed with how they competently transformed it into a functioning portal, right from design, documentation, user research, development, and launch. They are also helping for growth of the product.',
         },
    ]
  return (
    <div className='client-testimonials'>
        <Heading headingData={headingData} />
        <div className='container'>
            <Slider {...settings}>
              {clientTestimonialItems.map((item) => {
                return<div className='clientTestimonialItem'>
                  <div className='testimonials-item-inner'>
                  <div className='client-image'>
                    <img src={item.clientImage} />
                  </div>
                  <div>
                    <p>{item.clientWords}</p>
                    <h5>{item.clientName}</h5>
                    <h6>{item.clientDesignation}</h6>
                  </div>
                  </div>
                </div>
              })}
            
            </Slider>
        </div>
    </div>
  )
}

export default ClientTestimonials