import React from 'react'
import InnerTop from '../../layout/InnerPageTop/InnerTop';
import Services from '../../component/Services/Services';
import CaseStudies from '../../component/CaseStudies/CaseStudies';
import Blog from '../../component/Blogs/Blog';
import ServiceOverviews from './ServiceOverviews';
import ClientLogo from '../../component/ClientLogos/ClientLogo';

function OurServices() {
  const data = {
    introHeading: 'Product Consulting',
    introSubHeading: 'Strategies to help you keep up with dynamic business environment.',
  };
   
  return (
    // <div style={{height:"500px",background:"#000"}}>
    //   <h1>Services</h1>
    // </div>
    <>
      <InnerTop data={data}/>
      <ServiceOverviews />
      <Services />
      <CaseStudies />
      <Blog />
      <ClientLogo />
    </>
  )
}

export default OurServices;