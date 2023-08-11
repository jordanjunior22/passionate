/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useState, useEffect} from 'react';
import React from 'react'
import './page.css'
import ImageRotator from '@/components/ImageRotator';
import {BsBookmarkCheckFill} from 'react-icons/bs'

function page() {
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Replace with your image filenames
  const bgColorList = ['#7496A3', '#6F95BA', '#3A6287'];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentBgColor = bgColorList[currentImageIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 60 seconds in milliseconds

    return () => clearInterval(interval);   
  }, []);    

  return (
    <section>
      <div className='header' style={{ backgroundColor: currentBgColor }}>
        <div className='header-info'>
          <p style={{backgroundColor:'#000000', opacity:0.8}}>Renew Your Freedom at</p>
          <h2>Passionate Center & Homes Healthcare Services</h2>
          <h3>A Haven for Mental Health Recovery</h3>
          <p>Passionate Center & Homes Healthcare Services provides an 
            opportunity for individuals dealing with mental health struggles 
            to find solace,
            recover, and reclaim their sense of independence.</p>
          <button className='email-us'>Book An Appointment <BsBookmarkCheckFill className='book-icon'/></button>
        </div>
        <div className='header-image'>
            <ImageRotator images={images}/>
        </div>
      </div>

    </section>
  )
}

export default page