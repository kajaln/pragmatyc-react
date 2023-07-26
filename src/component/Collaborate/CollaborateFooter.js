import React from 'react'
import { Container } from 'react-bootstrap';
import { ArrowDownLeft, ArrowRightCircle } from 'react-bootstrap-icons';
import './Collaborate.scss'

function CollaborateFooter() {
  return (
    <div className='collaborate-footer'>
        <Container>
            <div className='collaborate-footer-content'>
                <h3>Let's Collaborate to Create Great Product For Better World</h3>
                <a href='#'>Let's Connect<ArrowRightCircle /></a>
            </div>
        </Container>
    </div>
  )
}

export default CollaborateFooter;