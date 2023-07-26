import React from 'react'
import Services from '../../component/Services/Services'
import HomeIntro from './HomeIntro';
import ClientTestimonials from '../../component/Testimonials/ClientTestimonials/ClientTestimonials';
import CaseStudies from '../../component/CaseStudies/CaseStudies';
import EcoSystem from '../../component/EcoSystem/EcoSystem';
import Blog from '../../component/Blogs/Blog';
import ClientLogo from '../../component/ClientLogos/ClientLogo';
import CollaborateFooter from '../../component/Collaborate/CollaborateFooter';


function Home(props) {
 
  return (
    <>
    <HomeIntro />
    <Services />
    <CaseStudies />
    
    <ClientTestimonials />
    <EcoSystem />
    <ClientLogo />
    <Blog />
    <CollaborateFooter />
    </>
  )
}

export default Home;
