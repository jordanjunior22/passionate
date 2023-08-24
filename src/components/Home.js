/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useState, useEffect} from 'react';
import React from 'react'
import './home.css'
import '../animate.css'
import Link from 'next/link';
import ImageRotator from '@/components/ImageRotator';
import {BsBookmarkCheckFill} from 'react-icons/bs'

function Home() {
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
<<<<<<< HEAD
          <p style={{backgroundColor:'#000000', opacity:0.8, textAlign: "center", borderTopLeftRadius: '8px'}}>Renew Your Freedom at</p>
          <h2 className='focus-in-expand '>Passionate Center & Homes Healthcare Services</h2>
=======
          <p style={{backgroundColor:'#000000', opacity:0.8, textAlign: "center"}}>Renew Your Freedom At</p>
          <h2>Passionate Center & Homes Healthcare Services</h2>
>>>>>>> f2dcb9668755c8a16bc6aecb17ff888a23aaa6f2
          <h3>Your Mental Wellness, Is Our Passionate Priority</h3>
          <p>Passionate Center & Homes Healthcare Services provides an 
            opportunity for individuals dealing with mental health struggles 
            to find solace,
            recover, and reclaim their sense of independence.</p>
            <p>Let&apos;s be &ldquo;A Haven for Mental Health Recovery&rdquo;...</p>
            <Link href='/#contact-id' className='link-deco'><button className='email-us'>Book An Appointment <BsBookmarkCheckFill className='book-icon'/></button></Link>
        </div>
        <div className='header-image'>
            <ImageRotator images={images}/>
        </div>
      </div>
      
    </section>
  )
}

export default Home
