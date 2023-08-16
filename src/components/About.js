/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import './About.css'
import {TfiWrite} from 'react-icons/tfi'
import {ImHome} from 'react-icons/im'
import {PiUsersThreeFill} from 'react-icons/pi'
import Link from 'next/link'

function About() {
  return (
    <section>
      <div className='about-us'>
        <h3>Start A New Journey</h3>

        <div className='about-us-content'>
          <p>
          Situated on an historic farm within Northern Virginia, 
          Passionate Center & Homes Healthcare Services stands as a distinctive and nurturing residential 
          program tailored for adults facing mental illness challenges. Our programs are meticulously 
          crafted to offer individuals and their families a closely tailored path towards stability and 
          personal development. We pride ourselves on fostering a supportive community for those who encounter 
          difficulty assimilating into society due to mental health conditions. Our unique approach to mental 
          health housing guarantees that our residents are not only respected and embraced, but also backed by 
          authentic and substantial relationships, all while preserving their independence.

          </p>

          <ul>
            <div className='problems'>
              <TfiWrite/> We Offer Services That can help individuals daignosed with the followings
            </div>
            
            <li>Schizophrenia</li>
            <li>Schizo-affective disorders</li>
            <li>Depression</li>
            <li>Bipolar Disorder</li>
            <li>Anxiety related disorders</li>
            <li>Other mental illnesses on a case by case basis</li>
          </ul>

        </div>

        <div className='how'>
          <h4 className='remove-padding'> How We Can Help </h4>
          <p id='apply-opacity' className='remove-padding'>For those facing the challenges of mental illness, Hopewell House is a place to call home.</p>
          
          <div className='boxes'>
            
              <div className='how-info '> 
                <div className='how-left'>
                  <ImHome className='how-images'/>
                  <h5>Residential Programs</h5>
                </div>
          
                <div className='how-right'>
                <p id='apply-opacity'>
                Experience Hopewell's most comprehensive level of support at our 
                Residential Support Program. Residents live in a home on the farm with full access 
                to our service offerings while leading a self-determining lifestyle.
                </p>
                  <Link href='/programs/residencial'>
                    <button className='read-more' >Read More</button>
                  </Link>                
                </div>
              </div>
           
           
              <div className='how-info '> 
                <div className='how-left'>
                  <PiUsersThreeFill className='how-images'/>
                  <h5>Community Support</h5>
                </div>
        
                <div className='how-right'>
                  <p id='apply-opacity'>
                  Hopewell's Community Support Program helps our clients transition 
                  back into the community through a collaborative coaching process. 
                  A mutually agreed upon care plan guides a resident as they utilize the tools they have learned in 
                  real time to live outside of our farm.
                  </p>
                  <Link href='/programs/community'>
                    <button className='read-more' >Read More</button>
                  </Link>
                </div>

              </div>            

          </div>
          

          
        </div>
        
      </div>
    </section>
  )
}

export default About
