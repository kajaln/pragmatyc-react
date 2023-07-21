import React from 'react'
import HomeVideo from '../../assets/videos/home-video.mp4';
import posterImage from '../../img/poster.jpg';
import './Home.scss';


function HomeIntro() {
  return (
    <div className='home-intro'>
       
        <video autoPlay muted playsInline loop poster={posterImage} >
            <source src={HomeVideo} type="video/mp4" />
        </video>    
        <div className='overlay'>
            <div className='container'>
                <h1>MAXIMESS <span>is now</span> Pragmatyc</h1>
                <p>Your trusted partner in building futuristic digital products & solutions.</p>
            </div>
        </div>
    </div>
  )
}

export default HomeIntro;