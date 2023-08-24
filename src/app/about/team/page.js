/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './team.css'
import About from '@/components/About'

function page() {
  return (
    <session>
        <div className='team'>
            <h3>Meet The Team</h3>
<<<<<<< HEAD
            <p className='add-opacity'>You will find that Pationate Center & Homes Healthcare Services employs 
            mental health professionals who have the skills, training and compassion to create a 
            supportive environment for all residents in our homes and community.</p>
=======
            <p className='add-opacity'>You will find that Pationate Center & Homes Healthcare Services employs mental health professionals who have the skills, 
               training and compassion to create a supportive environment for all residents in our homes and community. </p>
>>>>>>> f2dcb9668755c8a16bc6aecb17ff888a23aaa6f2

            <div className='team-image'>
                <div className='image-container'>
                    <img src='../images/alina.jpg' alt='alina'/>
                    <h4>Raissa Fombe</h4>
                    <p className='add-opacity'>Coordinator</p>
                </div>

                <div className='image-container'>
                    <img src='../images/joseph.jpg' alt='joseph'/>
                    <h4>Solomon Nchinda</h4>
                    <p className='add-opacity'>Executive Director</p>
                </div>

                <div className='image-container'>
                    <img src='../images/mary.jpg' alt='mary'/>
                    <h4>Miriane Melong</h4>
                    <p className='add-opacity'>Program Director</p>
                </div>
                
            </div>
        </div>
        <About/>
    </session>
    
  )
}

export default page