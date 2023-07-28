import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../img/ImagePath.js";
import { Container } from 'react-bootstrap';
import imagePaths from '../../img/ImagePath.js';
import './ClientLogo.scss';

function ClientLogo() {
    const clientLogoItems = [
        {   
          id: 1,
          clientLogoImage: imagePaths.ezi2care,
          clientLogoImageTitle: "ezi2care"
         },
         {   
          id: 2,
          clientLogoImage: imagePaths.myla,
          clientLogoImageTitle: "Myla"
         },
         {   
          id: 3,
          clientLogoImage: imagePaths.veristride,
          clientLogoImageTitle: "Veristride"
         },
         {   
          id: 4,
          clientLogoImage: imagePaths.sujok,
          clientLogoImageTitle: "Sujok"
         },
         {   
          id: 5,
          clientLogoImage: imagePaths.gpit,
          clientLogoImageTitle: "Great Place IT Services"
         },
         {   
          id: 6,
          clientLogoImage: imagePaths.silvertouch,
          clientLogoImageTitle: "Silver Touch"
         },
         {   
            id: 7,
            clientLogoImage: imagePaths.gptw,
            clientLogoImageTitle: "Great Place to Work"
        },
        {   
            id: 8,
            clientLogoImage: imagePaths.clideg,
            clientLogoImageTitle: "ClideG"
        },
    ]
    const settings = {
        dots: false, 
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        //autoplaySpeed: 2000,
        cssEase: "linear"
      };

      return (
        <div className='client-logo-slider'>
          <Container>
            <Slider {...settings}>
                {clientLogoItems.map((item)=> {
                    return  <div key={item.id}>
                        <img src={item.clientLogoImage} alt={item.clientLogoImageTitle} />
                    </div>
                })}
            </Slider>
          </Container>
        </div>
      )
      }

//     const settings = {
//         centerMode: true,
//         centerPadding: '10px',
//         // dots: true, // Show dots for navigation (optional)
//         // infinite: true, // Enable infinite loop
//         // speed: 2000, // Set the transition speed in milliseconds
//         // autoplay: true, // Enable autoplay
//         // autoplaySpeed: 5000, // Set the time between slides in milliseconds
//         // slidesToShow: 5, // Number of slides to show at a time
//         // slidesToScroll: 1, // Number of slides to scroll at a time

//         autoplay: true,
//       autoplaySpeed: 1000,
//       dots: true,
//       infinite: true,
//       slidesToShow: 5,
//       slidesToScroll: 1,
//       speed: 1000,
//      // vertical: true,
//         // responsive: [
//         //   {
//         //     breakpoint: 768,
//         //     settings: {
//         //       arrows: false,
//         //       slidesToShow: 3,
//         //     },
//         //   },
//         //   {
//         //     breakpoint: 480,
//         //     settings: {
//         //       arrows: false,
//         //       slidesToShow: 1,
//         //     },
//         //   },
//         // ],
//       };

//   return (
//     <div className='ClientLogos'>
//         <Container>
//             <div className='case-study-slider'>
//                 <Slider {...settings}>
                    // {clientLogoItems.map((item)=> {
                    //     return  <div key={item.id}>
                    //         <img src={item.clientLogoImage} alt={item.clientLogoImageTitle} />
                    //     </div>
                    // })}
                    
//                 </Slider>
//             </div>
//         </Container>
//     </div>
//   )


export default ClientLogo;