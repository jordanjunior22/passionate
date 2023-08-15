/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './team.css'
import About from '@/components/About'

function page() {
  return (
    <session>
        <div className='team'>
            <h3>Meet The Team</h3>
            <p className='add-opacity'>You will find that Hopewell House employs mental health professionals who have the skills, 
               training and compassion to create a supportive environment for all residents in our community. </p>

            <div className='team-image'>
                <div className='image-container'>
                    <img src='/images/alina.jpg' alt='alina'/>
                    <h4>Alina Moray</h4>
                    <p className='add-opacity'>Coordinator</p>
                </div>

                <div className='image-container'>
                    <img src='/images/joseph.jpg' alt='joseph'/>
                    <h4>Henry Joseph</h4>
                    <p className='add-opacity'>Executive Director</p>
                </div>

                <div className='image-container'>
                    <img src='/images/mary.jpg' alt='mary'/>
                    <h4>Mary Matilda</h4>
                    <p className='add-opacity'>Program Director</p>
                </div>
                
            </div>
        </div>
        <About/>
    </session>
    
  )
}

export default page