import React from 'react'
import { Container } from 'react-bootstrap'
import '../../img/ImagePath'
import imagePaths from '../../img/ImagePath'
import './innerStyle.scss'

function InnerTop(props) {
  const backgroundImage = imagePaths.ecosystemBg
  const containerStyle = {
      backgroundImage: `url(${backgroundImage})`,
  };

const { introHeading, introSubHeading } = props.data;
  return (
    <div className='inner-top' style={containerStyle} >
      <div className='overlay'></div>
        <Container>
            <h1>{introHeading}</h1>
            <h5>{introSubHeading}</h5>
        </Container>
    </div>
  )
}

export default InnerTop