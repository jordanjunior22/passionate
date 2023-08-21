/* eslint-disable @next/next/no-img-element */
import React from 'react'
import '../residencial/residencial.css'
import {GrStatusGoodSmall} from 'react-icons/gr'

function page() {
  return (
    <div className='add-padding'>
        <div className='residencial'>    
            <img src='../images/image1.jpg' alt='image1' className='margintop'/>
            <div className='heading'>
                <p className='first-text set-opacity'>HEAL AT HOME</p>
                <h2 className='h2-tags'>Community Support Programs</h2>
                <p className='set-opacity'>Start your journey to improved mental health from the comfort of your home.</p>
            </div> 
        </div>
        <div className='details'>
            <h2 className='h2-tags'>We'll meet you where you're at</h2>
            <p className='set-opacity'>Our Community Support Program helps people move forward in life through a collaborative coaching process in which individuals work 
            with a Mental Health Life Coach in their home to eliminate the barriers that negatively impact their mental health and independence.</p>
        </div>

        <div className='details-1'>
            <div className='heading'>
                <p className='first-text set-opacity'>FLEXIBILITY</p>
                <h2 className='h2-tags'>Collaborative and Comprehensive Support</h2>
                <ul className='set-opacity liststyle'>
                    <li> <GrStatusGoodSmall className='bullet'/> Pleasant, attractive residential group homes where residents learn and participate in tasks of daily living.</li>
                    <li> <GrStatusGoodSmall className='bullet'/> Tranquil setting within Virginia. Healthy, fun, and relaxing recreational activities tailored to individual stated interests.</li>
                    <li> <GrStatusGoodSmall className='bullet'/> Outings to events and places in the community that take advantage of our proximity to the greater Washington, DC area.</li>
                    <li> <GrStatusGoodSmall className='bullet'/> Transportation available for community participation whether for work, school, medical, or recreational activities.</li>
                </ul>
            </div>
            <img src='../images/image1.jpg' alt='image1'/>
                 
        </div>

        <div className='details-1 flex-reverse'>
            <img src='../images/image2.jpg' alt='image2' className='margintop'/>

            <div className='heading'>
                <p className='first-text set-opacity'>WE'RE IN THIS TOGETHER</p>
                <h2 className='h2-tags'>support and education for families</h2>
                <ul className='set-opacity liststyle'>
                    <li> <GrStatusGoodSmall className='bullet'/> Social groups that help residents understand and deal with particular symptoms and life skills throughout recovery.</li>
                    <li> <GrStatusGoodSmall className='bullet'/> Ability to select your own community providers including psychiatrists, therapists, and medical personnel.</li>
                    <li> <GrStatusGoodSmall className='bullet'/> Support in developing independent life skills, including housekeeping, financial management, social skills, community integration, and medication management.</li>
                    <li> <GrStatusGoodSmall className='bullet'/> Community partnerships with outpatient providers.</li>
                </ul>
            </div>
        </div>
        
        <div className='details-1'>
            <div className='heading'>
                <p className='first-text set-opacity'>WE BELIEVE IN YOU</p>
                <h2 className='h2-tags'>Discover Who You Are</h2>
                <ul className='set-opacity liststyle'>
                    <li> <GrStatusGoodSmall className='bullet'/> Individual goal maps for each resident.</li>
                    <li> <GrStatusGoodSmall className='bullet'/> Enriched purpose, self-esteem, and dignity through planning and participation in all community outings, in-house activities, and meal planning.</li>
                    <li> <GrStatusGoodSmall className='bullet'/> On-site support and coaching from Behavioral Health Coaches, with an excellent staff to resident ratio, 24-hours a day, 7 days a week.</li>
                    <li> <GrStatusGoodSmall className='bullet'/> Integration with community treatment members and family to provide for comprehensive care in the community.</li>
                </ul>
            </div>
            <img src='../images/image3.jpg' alt='image3'/>
        </div>
    </div>
  )
}

export default page