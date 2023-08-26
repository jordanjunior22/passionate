/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import '../programs/residencial/residencial.css'
function page() {
   const GoPay = () => {
    // Redirect the user to the specified link
    window.open('https://buy.stripe.com/5kAdTa3925zifle7ss', '_blank');
  };
  return (
    <div className='add-padding'>
        <div className='residencial flex-reverse'>    
            <img src='../images/image1.jpg' alt='image1' className='margintop'/>
            <div className='heading'>
                <p className='first-text set-opacity'>WE'RE IN THIS TOGETHER</p>
                <h2 className='h2-tags'>Get Involved With Mezah Foundation</h2>
            </div> 
        </div>   

        <div className='details'>
            <h2 className='h2-tags'>Donations </h2>
            <p className='set-opacity'>Passionate Center & Homes Healthcare Services is 
            partnered with Mezah Foundation, a non-profit 501c3 organization, which means all donations 
            are tax deductible. We immensely appreciate our donors and are deeply grateful for their support. 
            Private donations are always appreciated as they assist to provide quality services and scholarships 
            to the less privalaged. If you would like more information regarding the best way for you to donate 
            to Mezah Foundation, please contact us.</p>
        </div>

        <div className='donate-button'>
            <button onClick={GoPay}>Donate</button>
        </div>
    </div>
  )
}

export default page
