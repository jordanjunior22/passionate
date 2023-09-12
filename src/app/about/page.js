/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

import '../programs/residencial/residencial.css'
import About from '@/components/About'
import Socials from '@/components/Socials'

function page() {
  return (
    <div>
        <div  className='add-padding'>
        <div className='residencial flex-reverse'>    
            <img src='./images/image1.jpg' alt='image1' className='margintop'/>
            <div className='heading'>
                <p className='first-text set-opacity'>LEARN MORE</p>
                <h2 className='h2-tags'>What We Do & What We're About</h2>
            </div> 
        </div>

        <div className='details'>
            <h2 className='h2-tags'>Our Mission</h2>
            <p className='set-opacity'>Our private, city setting provides an optimal environment 
              for healthy independent living in our vibrant residential group homes. 
              Along with support from skilled and caring behavioral health recovery support specialist, 
              each resident is offered a personalized plan to meet their individual needs and goals.</p>
        </div>

    </div>

    <About/>
    <Socials/>
    </div>
    
  )
}

export default page
