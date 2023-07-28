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

function ProductDevelopment(props) {
  const data = {
    introHeading: 'Product Development',
    introSubHeading: 'Technology practices to create seamless user experience in agile way.',
};

const pageIntroData ={
   pageIntroText: "The journey of a digital product needs to be driven by how market responds. Keeping your product development agile enough to accommodate feedbacks and do it with right expertise to keep it competent is what you can bank us for.",
   pageIntroImage:imagePaths.development    
};

const serviceData = [
    {  
        id: 1,
        serviceOverviewTitle: 'Proof Of Concept (PoC)',
        serviceOverviewDescription: 'Is your digital product idea is based on a technical innovation? We can help you check its feasibility with required research to de-risk your further investment.'
     },
     {  
        id: 2,
        serviceOverviewTitle: 'Product Enhancement',
        serviceOverviewDescription: 'Product enhancements can at times become tricky as they need to be pushed on top of a working product. Our professionals do it with right care & quality.'
     },
     {  
        id: 3,
        serviceOverviewTitle: 'Product Maintenance And Support',
        serviceOverviewDescription: 'Keep your product under care of able hands for its Maintenance and Support. You can focus on the business and growth.'
     },
     {  
        id: 4,
        serviceOverviewTitle: 'Technology Resource On Demand (TROD)',
        serviceOverviewDescription: 'If you have your team in place to develop your digital product but need resources of some specific technology, hire them flexibly with us.'
     },
     {  
        id: 5,
        serviceOverviewTitle: 'Change Of Guards',
        serviceOverviewDescription: 'Not satisfied with your technology vendor but feels dependency on him. Don’t worry. We can take it over on your behalf to take your product ahead.'
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

export default ProductDevelopment;