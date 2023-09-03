/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import './footer.css'
import {TfiEmail} from 'react-icons/tfi'
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsTiktok } from 'react-icons/bs';
import Link from 'next/link';

function Footer() {

  const GoEmail = () => {
    // Redirect the user to the specified link
        window.location.href ='mailto:pchhservicesllc@gmail.com';
  };
  const GoFacebook = () => {
    // Redirect the user to the specified link
    window.open('https://www.facebook.com/profile.php?id=100083733096698', '_blank'); // Replace with your desired link
  };
  const GoInstagram = () => {
    // Redirect the user to the specified link
    window.open('https://www.instagram.com/pchhservicesllc/', '_blank'); // Replace with your desired link
  };
    const GoTwitter = () => {
    // Redirect the user to the specified link
    window.open('https://twitter.com/pchhservicesllc', '_blank'); // Replace with your desired link
  };

  const GoTiktok = () => {
    // Redirect the user to the specified link
    window.open('https://www.tiktok.com/@pchhservicesllc', '_blank'); // Replace with your desired link
  };

  const GoPhone = () => {
    // Redirect the user to the specified link
    window.location.href = 'tel:+15712655198'; // Replace with your desired link
  };
  return (
    <session>
        <div className='footer-container'>
            <div className='footer-container-top'>
                <div className='footer-container-top-items'>
                    <h3>Contact Us</h3>
                    <p>+1 (571) 265 - 5198</p>
                    <p>pchhservicesllc@gmail.com</p>
                    <p>5721 Eliot Ct, Unit 173</p>
                    <p>Alexandria, VIrginia 22311</p>
                </div>

                <div className='footer-container-top-items'>
                    <h3>Our Services</h3>
                    <Link  href='/' className='Link'>Home</Link>
                    <Link  href='/#about-id' className='Link'>About</Link>
                    <Link  href='/#programs-id' className='Link'>Programs</Link>
                    <Link  href='/getinvlove' className='Link'>Get Involve</Link>
                    <Link  href='/#contact-id' className='Link'>Contact</Link>
                    <Link  href='/donate' className='Link'>Donate</Link>
                </div>

                <div className='footer-container-top-items'>
                    <h3>Quick Links</h3>
                    <Link  href='/about/gallery' className='Link'>Galley</Link>
                    <Link  href='/about/team' className='Link'>Meet The Team</Link>
                    <Link  href='/getinvolve/careers' className='Link'>Careers</Link>
                    <Link  href='about/faqs' className='Link'>FAQS</Link>
                </div>

                <div className='logo-and-social'>
                    <Link href='/'><img src='./images/logo.png' alt="logo" className='logo'/></Link>
                    <div className='socials'>
                        <button onClick={GoEmail}> <TfiEmail/> </button>
                        <button onClick={GoFacebook}> <BsFacebook/> </button>
                        <button onClick={GoInstagram}> <FaInstagram/> </button>
                     </div>
                     <div className='socials'>
                        <button onClick={GoTwitter}> <BsTwitter/> </button>
                        <button onClick={GoTiktok}> <BsTiktok/> </button>
                        <button onClick={GoPhone}> <BsWhatsapp/> </button>
                     </div>
                </div>

            </div>

            <div className='footer-container-bottom'>
                <p>Copyright @2023 All Rights Reserved | <span style={{color:'#0076BA'}}>Designed By Jordan Junior</span></p>
            </div>

        </div>
    </session>
  )
}

export default Footer
