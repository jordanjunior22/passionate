/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import '../programs/residencial/residencial.css'
import {GrStatusGoodSmall} from 'react-icons/gr'
import Link from 'next/link'

function page() {
  return (
    <div className='add-padding'>
        <div className='residencial'>    
            <img src='../images/image1.jpg' alt='image1' className='margintop'/>
            <div className='heading'>
                <p className='first-text set-opacity'>WE&apos;RE IN THIS TOGETHER</p>
                <h2 className='h2-tags'>Get Involve With Us</h2>
                <p className='set-opacity'>We welcome inquiries from prospective residents, their families and community professionals.</p>
            </div> 
        </div>
        <div className='details'>
            <h2 className='h2-tags'>Other Ways To Contribute</h2>
            <p className='set-opacity'>At Passionate Center & Homes we believe every individual can make a huge difference in reaching our goals. 
            There are multiple ways you or your company, civic group, or religious organization can assist the individuals Passionate Center & Homes serves. 
            Regardless of your means of paticipation or contribution, be it by the amount of time you spend with us or resources given, we appreciate your help and interest.</p>
        </div>

        <div className='details-1'>
            <div className='heading'>
                <p className='first-text set-opacity'>PATICIPATE & CONTRIBUTE</p>
                <h2 className='h2-tags'>Volunteer Your Time</h2>
                <ul className='set-opacity liststyle'>
                    <li> <GrStatusGoodSmall className='bullet'/> At Passionate Center & Homes we believe volunteers give us the extra edge we need in reaching our goals.</li>
                    <li> <GrStatusGoodSmall className='bullet'/> There are multiple ways you or your company, civic group, or religious organization can assist the individuals Passionate Center & Homes serves.</li>
                    <li> <GrStatusGoodSmall className='bullet'/> Regardless of the amount of time you spend with us, we appreciate your help and support.</li>
                    <li> <GrStatusGoodSmall className='bullet'/> If you or your group are interested in volunteer opportunities at Passionate Center & Homes, please contact us.</li>
                </ul>
            </div>
            <img src='../images/image1.jpg' alt='image1'/>
                 
        </div>

        <div className='details-1 flex-reverse'>
            <img src='../images/image2.jpg' alt='image2' className='margintop'/>

            <div className='heading'>
                <p className='first-text set-opacity'>CAREERS</p>
                <h2 className='h2-tags'>Work with Us</h2>
                <ul className='set-opacity liststyle'>
                    <li> <GrStatusGoodSmall className='bullet'/> We are an intimate, caring team always looking for compassionate people interested in improving the lives of those they work with.</li>
                    <li> <GrStatusGoodSmall className='bullet'/> Ultimately, working with us wil be a rewarding experience for individuals who are passionate about mental health care.</li>
                    <li> <GrStatusGoodSmall className='bullet'/> Check out our open posstion by clicking the &quot;Career&quot; buton below.Join us to make meaningful impact and a significant difference in the lives of individuals with mental health disabilities and disorders. </li>
                    <li> <GrStatusGoodSmall className='bullet'/> Please submit all resumes and inquiries to pchhservicesllc@gmail.com for consideration.</li>
                </ul>

                <Link href='/getinvolve/careers' className='link-deco'>
                    <button className='careers'>Careers</button>
                </Link>
            </div>
        </div>
        
        <div className='details-1'>
            <div className='heading'>
                <p className='first-text set-opacity'>BLOG / YouTube</p>
                <h2 className='h2-tags'>Read, Lean & Grow</h2>
                <ul className='set-opacity liststyle'>
                    <li> <GrStatusGoodSmall className='bullet'/> We provide valuable insights into various mental health conditions, explaining their symptoms, causes, and effects.</li>
                    <li> <GrStatusGoodSmall className='bullet'/> You can learn about conditions such as depression, anxiety, bipolar disorder, and schizophrenia, increasing your awareness and understanding.</li>
                    <li> <GrStatusGoodSmall className='bullet'/> We offer practical advice and coping strategies for managing stress, anxiety, and other challenges.Check out our free blog or YouTube Channel by clicking the &quot;Blog&quot; or &quot;YouTube&quot;buton below.</li>
                    <li> <GrStatusGoodSmall className='bullet'/> Discover effective self-care practices that promote mental well-being and resources such as hotlines, therapy options, and support groups.</li>
                </ul>

                <Link href='/blog' className='link-deco'>
                    <button className='careers'>&ensp; Blog &ensp;</button>
                </Link>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;

                <Link href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className='link-deco'>
                    <button className='careers'>YouTube</button>
                </Link>
            </div>
            <img src='../images/image3.jpg' alt='image3'/>
        </div>
    </div>
  )
}

export default page
