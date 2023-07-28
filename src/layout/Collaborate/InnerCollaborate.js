import React from 'react'
import { ArrowLeftCircle, ArrowRightCircle } from 'react-bootstrap-icons';
import './Collaborate.scss'
import imagePaths from '../../img/ImagePath';

function InnerCollaborate() {
  const backgroundImage = imagePaths.innerCollaborate;
  const containerStyle = {
      backgroundImage: `url(${backgroundImage})`,
  };
  return (
    <div className='inner-collaborate flex flex-column justify-content-center' style={containerStyle}>
        <h2>Let's Discuss How We Can Serve Your Product</h2>
        <a href='#'>Let's Connect <ArrowRightCircle /></a>
    </div>
  )
}

export default InnerCollaborate;