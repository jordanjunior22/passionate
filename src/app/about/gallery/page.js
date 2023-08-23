/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './gallery.css'

function page() {
  return (
    
        <section>
          <div className='gallery'>
            <div className='flex-column'>
              <img src='../images/image1.jpg' alt='image1'/>
              <h4 className='text-center'>Label</h4>
              <p className='add-opacity text-center'>description</p>
            </div>
            <div className='flex-column'>
              <img src='../images/image2.jpg' alt='image1'/>
              <h4 className='text-center'>Label</h4>
              <p className='add-opacity text-center'>description</p>
            </div>
            <div className='flex-column'>
              <img src='../images/image3.jpg' alt='image1'/>
              <h4 className='text-center'>Label</h4>
              <p className='add-opacity text-center'>description</p>
            </div>

          </div>
        </section>
    
    
  )
}

export default page        
