import React from 'react'
import InnerTop from '../../layout/InnerPageTop/InnerTop';
import Services from '../../component/Services/Services';
import CaseStudies from '../../component/CaseStudies/CaseStudies';
import Blog from '../../component/Blogs/Blog';
import ServiceOverviews from './ServiceOverviews';
import ClientLogo from '../../component/ClientLogos/ClientLogo';
import InnerCollaborate from '../../layout/Collaborate/InnerCollaborate';
import PageIntro from '../../layout/InnerPageTop/PageIntro';
import imagePaths from '../../img/ImagePath';

function ProductModernization(props) {
  const data = {
    introHeading: 'Product Modernization',
    introSubHeading: 'Innovations for existing product to stay relevant and continue winning.',
  };

  const pageIntroData ={
    pageIntroText: "Digital product business is game one must carefully play to excel especially in today’s heavily user driven environment. We help you to stay modern not only to fight technology obsolescence, but to stay ahead in the game.",
    pageIntroImage:imagePaths.modernization    
 };

  const serviceData = [
    {  
        id: 1,
        serviceOverviewTitle: 'Rejuvenate Your Product',
        serviceOverviewDescription: 'Is your digital app not working well? We help you rejuvenate it with a wholistic treatment to make it perform and thrive.'
     },
     {  
        id: 2,
        serviceOverviewTitle: 'Renovate Your Product',
        serviceOverviewDescription: 'Every digital product needs renovation at a certain frequency. It may be upgrade of UI/UX or technology. We help you keep your product contemporary.'
     },
     {  
        id: 3,
        serviceOverviewTitle: 'Re-Innovate Your Product',
        serviceOverviewDescription: 'Continuous innovation is an essential element of a digital product journey. If you feel your product is due for complete re-innovation, we can join hands.'
     },
     {  
        id: 4,
        serviceOverviewTitle: 'Future Tech Consulting',
        serviceOverviewDescription: 'AI, ML, AR, IoT etc. are buzzwords in future tech category. Make your product future ready with a value-add element of these modern technologies. We are just a call away to discuss possibilities.'
     },
     {  
        id: 5,
        serviceOverviewTitle: 'Product Differentiation',
        serviceOverviewDescription: 'Every me too business still need differentiation the product for its clients to stick. Are you struggling to differentiate your product from competetion? Lets talk.'
     },

]
  return (
    // <div style={{height:"500px",background:"#000"}}>
    //   <h1>Services</h1>
    // </div>
    <>
      <InnerTop data={data}/>
      <PageIntro pageIntroData={pageIntroData} />
      <ServiceOverviews serviceData={serviceData} />
      <InnerCollaborate />
      <Services />
      <CaseStudies />
      <Blog />
      <ClientLogo />
    </>
  )
}

export default ProductModernization;