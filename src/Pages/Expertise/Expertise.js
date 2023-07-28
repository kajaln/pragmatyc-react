import React from 'react'
import InnerTop from '../../layout/InnerPageTop/InnerTop';
import PageIntro from '../../layout/InnerPageTop/PageIntro';
import imagePaths from '../../img/ImagePath';
import Services from '../../component/Services/Services';
import CollaborateFooter from '../../component/Collaborate/CollaborateFooter';
import DigitalStrategy from './DigitalStrategy';

function Expertise() {
    const data = {
        introHeading: 'Expertise',
        introSubHeading: 'Toolkit to craft best digital products for you.',
      };
    
      const pageIntroData ={
        pageIntroText: "As a digital product engineering partner, we ensure that the best technology and practices are employed while crafting the digital product. We create state-of-the-art solutions that are scalable and futureproof. ",
        pageIntroImage:imagePaths.expertise    
      };
      
  return (
    <div>
        <InnerTop data={data}/>
        <PageIntro pageIntroData={pageIntroData} />
        <DigitalStrategy />
        <Services />
        <CollaborateFooter />
    </div>
  )
}

export default Expertise