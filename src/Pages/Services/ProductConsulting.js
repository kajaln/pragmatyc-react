import React from 'react'
import InnerTop from '../../layout/InnerPageTop/InnerTop';
import Services from '../../component/Services/Services';
import CaseStudies from '../../component/CaseStudies/CaseStudies';
import Blog from '../../component/Blogs/Blog';
import ServiceOverviews from './ServiceOverviews';
import ClientLogo from '../../component/ClientLogos/ClientLogo';
import InnerCollaborate from '../../layout/Collaborate/InnerCollaborate';

function ProductConsulting(props) {
  const data = {
    introHeading: 'Product Consulting',
    introSubHeading: 'Strategies to help you keep up with dynamic business environment.',
  };

  const serviceData = [
    {  
        id: 1,
        serviceOverviewTitle: 'Idea To Business Translation Consulting',
        serviceOverviewDescription: 'An idea can become big only if it is executed with right business model. We help you cocreate the one with some handy tools like BMC & VPC.'
     },
     {  
        id: 2,
        serviceOverviewTitle: 'Product Roadmap Planning',
        serviceOverviewDescription: 'Digital Product business is an iterative process of Build-Measure-Learn loop. We help you plan the probable evolvement of your product in the form of Roadmap planning.'
     },
     {  
        id: 3,
        serviceOverviewTitle: 'Project Requirement Documentation',
        serviceOverviewDescription: 'The project of building a product starts with documenting requirements with right details. Leave it to our experts to do it professionally for you.'
     },
     {  
        id: 4,
        serviceOverviewTitle: 'Product Audit & Recommendations',
        serviceOverviewDescription: 'If your product is in making or already in market, get it audited to know value add recommendations for its betterment & further growth.'
     },
     {  
        id: 5,
        serviceOverviewTitle: 'IOT Based Product Consulting',
        serviceOverviewDescription: 'Pragmatyc has forte in crafting digital IoT based apps complimenting your hardware product. Make your hardware product a smart product with us.'
     },

]
   
  return (
    // <div style={{height:"500px",background:"#000"}}>
    //   <h1>Services</h1>
    // </div>
    <>
      <InnerTop data={data}/>
      <ServiceOverviews serviceData={serviceData} />
      <InnerCollaborate />
      <Services />
      <CaseStudies />
      <Blog />
      <ClientLogo />
    </>
  )
}

export default ProductConsulting;