import React from 'react'
import './careers.css'

function page() {
  return (
    <div>
      <div className='details'>
        <h3 className='h2-tags'>Be Part Of Something Great</h3>
        <p className='set-opacity'>We&apos;re not just a company; we&apos;re a collaborative and diverse team that meaningful impact 
          and a significant difference in the lives of individuals with mental health disabilities and disorders. If you&apos;re passionate about pushing the boundaries, embracing new challenges, 
          and working alongside brilliant minds, then we invite you to join us on our journey. 
          At Passionate Center & Homes Healthcare Services, we value dedication, and a shared commitment to excellent health care. 
          Whether you&apos;re an experienced professional or a recent graduate, 
          if you&apos;re looking to contribute your unique skills and learn from others, 
          we&apos;d love to have you as part of our team. 
          Together, we can create something extraordinary. Join us in supporting challanged Individuals!</p>
      </div>
      <div className='details'>
        <h3 className='h2-tags'>Careers</h3>
        <p className=' add-green'>Exciting job opportunities available! 
        If you&apos;re ready to take the next step in your career, submit your CV to pchhservicesllc@gmail.com. 
        Join our team and be a part of something amazing. </p>
      </div>
      <div className='positions'>

        <div className='job-title'>
          <h4>Job Title : Community Support Worker - Behavioral Health</h4>
          <p className='set-italic set-opacity'>Currently Hiring</p>
        </div>

        <div className='job-title'>
          <h4>Job Title : Care Coordinator - Behavioral Health</h4>
          <p className='set-italic set-opacity'>Currently Hiring</p>
        </div>

        <div className='job-title'>
          <h4>Job Title : Transportation Driver - On Call</h4>
          <p className='set-italic set-opacity'>Currently Hiring</p>
        </div>

        <div className='job-title'>
          <h4>Job Title : Recovery Support Specialist</h4>
          <p className='set-italic set-opacity'>Currently Hiring</p>
        </div>
        
      </div>

    </div>
  )
}

export default page