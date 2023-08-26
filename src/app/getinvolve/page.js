/* eslint-disable @next/next/no-img-element */
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
                <p className='first-text set-opacity'>STAY WITH US</p>
                <h2 className='h2-tags'>Get Involve With Us</h2>
                <p className='set-opacity'>Experience the difference with Hopewells therapeutic environment.</p>
            </div> 
        </div>
        <div className='details'>
            <h2 className='h2-tags'>Life At Hopewell House</h2>
            <p className='set-opacity'>Our private, rural-like setting provides an optimal environment for healthy independent 
                living in our charming residential group homes. Along with support from skilled and caring behavioral 
                health coaches,each resident is offered a personalized plan to meet their individual needs and goals.</p>
        </div>

        <div className='details-1'>
            <div className='heading'>
                <p className='first-text set-opacity'>COMFORT</p>
                <h2 className='h2-tags'>A Place To Live</h2>
                <ul className='set-opacity liststyle'>
                    <li> <GrStatusGoodSmall className='bullet'/> Individual goal maps for each resident.</li>
                    <li> <GrStatusGoodSmall className='bullet'/> Enriched purpose, self-esteem, and dignity through planning and participation in all community outings, in-house activities, and meal planning.</li>
                    <li> <GrStatusGoodSmall className='bullet'/> On-site support and coaching from Behavioral Health Coaches, with an excellent staff to resident ratio, 24-hours a day, 7 days a week.</li>
                    <li> <GrStatusGoodSmall className='bullet'/> Integration with community treatment members and family to provide for comprehensive care in the community.</li>
                </ul>
            </div>
            <img src='../images/image1.jpg' alt='image1'/>
                 
        </div>

        <div className='details-1 flex-reverse'>
            <img src='../images/image2.jpg' alt='image2' className='margintop'/>

            <div className='heading'>
                <p className='first-text set-opacity'>INCLUSION</p>
                <h2 className='h2-tags'>A Place To Belong</h2>
                <ul className='set-opacity liststyle'>
                    <li> <GrStatusGoodSmall className='bullet'/> Individual goal maps for each resident.</li>
                    <li> <GrStatusGoodSmall className='bullet'/> Enriched purpose, self-esteem, and dignity through planning and participation in all community outings, in-house activities, and meal planning.</li>
                    <li> <GrStatusGoodSmall className='bullet'/> On-site support and coaching from Behavioral Health Coaches, with an excellent staff to resident ratio, 24-hours a day, 7 days a week.</li>
                    <li> <GrStatusGoodSmall className='bullet'/> Integration with community treatment members and family to provide for comprehensive care in the community.</li>
                </ul>

                <Link href='/getinvolve/careers' className='link-deco'>
                    <button className='careers'>Careers</button>
                </Link>
            </div>
        </div>
        
        <div className='details-1'>
            <div className='heading'>
                <p className='first-text set-opacity'>OPPORTUNITY</p>
                <h2 className='h2-tags'>A Place To Grow</h2>
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