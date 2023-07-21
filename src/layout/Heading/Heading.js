import React from 'react';
import './Heading.scss';

function Heading(props) {
    const { mainHeading, subHeading, description } = props.headingData;
    return (
        <div className='heading'>
            <h4>{mainHeading}</h4>
            <h2>{subHeading}</h2>
            <div className="seperator">
                <span></span>
            </div>
            <div className='description-text'>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Heading;