/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import './About.css'
import {TfiWrite} from 'react-icons/tfi'
import {ImHome} from 'react-icons/im'
import {BiSolidDonateHeart} from 'react-icons/bi'
import {PiUsersThreeFill} from 'react-icons/pi'
import Link from 'next/link'
import Reveal from '@/components/ScrollReveal'
import Bounce from '@/components/Bounce'

function About() {
  return (
    <section>
      <div className='about-us' id='about-id'>
        <h3>Start A New Journey</h3>
    
        <Reveal>
        <div className='about-us-content'>
          <p>
          Situated in the DMV area, in the historic Alexandria area within Northern Virginia, 
          Passionate Center & Homes Healthcare Services stands as a distinctive and nurturing residential 
          program tailored for adults facing mental health illness and challenges. Our programs are meticulously 
          crafted to offer individuals and their families a closely tailored path towards stability and 
          personal development. We pride ourselves on fostering a supportive community for those who encounter 
          difficulty assimilating into society due to mental health conditions. Our unique approach to mental 
          health housing guarantees that our residents are not only respected and embraced, but also backed by 
          authentic and substantial relationships, all while preserving their independence.

          </p>

          <ul>
            <div className='problems'>
              <TfiWrite/> We Offer Services That can help individuals daignosed with the followings;
            </div>
            
            <li>Schizophrenia</li>
            <li>Schizo-affective disorders</li>
            <li>Depression</li>
            <li>Bipolar Disorder</li>
            <li>Anxiety related disorders</li>
            <li>Other mental illnesses on a case by case basis</li>
          </ul>

        </div>
        </Reveal>

        <Reveal>
        <div className='how'>
          <h4 className='remove-padding'> How We Can Help </h4>
          <p id='apply-opacity' className='remove-padding'>For those facing the challenges of mental illness, Passionate Center & Homes is a place to call home.</p>
          
          <div className='boxes' id='programs-id'>
            <Bounce direction='left' delay={10}>
              <div className='how-info '> 
                <div className='how-left'>
                  <ImHome className='how-images'/>
                  <h5>Residential Programs</h5>
                </div>
                <div className='how-right'>
                <p id='apply-opacity'>
                Experience Passionate Center & Homes Healthcare Services's most comprehensive level of support at our 
                Residential Support Program. 
                Residents live in one of our homes, with full access 
                to our service offerings while leading a self-determining lifestyle.
                </p>
                  <Link href='/programs/residencial'>
                    <button className='read-more' >Read More</button>
                  </Link>                
                </div>
              </div>
              </Bounce>

            <Bounce direction='right' delay={20}>
              <div className='how-info '> 
                <div className='how-left'>
                  <PiUsersThreeFill className='how-images'/>
                  <h5>Community Support</h5>
                </div>
                <div className='how-right'>
                  <p id='apply-opacity'>
                  Passionate Center & Homes Healthcare Services's Community Support Program helps our clients transition 
                  back into the community through a collaborative coaching process. 
                  A mutually agreed upon care plan guides a resident as they utilize the tools they have learned in 
                  real time to live outside of our homes.
                  </p>
                  <Link href='/programs/community'>
                    <button className='read-more' >Read More</button>
                  </Link>
                </div>
              </div>            
           </Bounce>
             
            <Bounce direction='left' delay={30}>
              <div className='how-info '> 
                <div className='how-left'>
                  <BiSolidDonateHeart className='how-images'/>
                  <h5>Get Involve</h5>
                </div>
                <div className='how-right'>
                <p id='apply-opacity'>
                Get involve with Passionate Center & Homes Healthcare Services's Vision and help support our Mission and Purpose 
                There are multiple ways you  
                or your company, civic group, or religious organization can assist the individuals Passionate Center & Homes serves. 
                We appreciate your help and interest.
                </p>
                  <Link href='/getinvolve'>
                    <button className='read-more' >Read More</button>
                  </Link>                
                </div>
              </div>
              </Bounce>
     
          </div>
        </div>
      </Reveal>
      </div>
    </section>
  )
}

export default About
