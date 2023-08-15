/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './footer.css'
import Image from 'next/image';
import {TfiEmail} from 'react-icons/tfi'
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import Link from 'next/link';

function Footer() {
  return (
    <session>
        <div className='footer-container'>
            <div className='footer-container-top'>
                <div className='footer-container-top-items'>
                    <h3>Contact Us</h3>
                    <p>+1 234 534 2121</p>
                    <p>emailus@gmail.com</p>
                    <p> 123 Freemont Street</p>
                </div>

                <div className='footer-container-top-items'>
                    <h3>Our Services</h3>
                    <Link  href='/' className='Link'>Home</Link>
                    <Link  href='/' className='Link'>About</Link>
                    <Link  href='/' className='Link'>Programs</Link>
                    <Link  href='/' className='Link'>Contact</Link>
                    <Link  href='/' className='Link'>Donate</Link>
                </div>

                <div className='footer-container-top-items'>
                    <h3>Quick Links</h3>
                    <Link  href='/' className='Link'>Galley</Link>
                    <Link  href='/' className='Link'>Meet The Team</Link>
                    <Link  href='/' className='Link'>FAQS</Link>
                </div>

                <div className='logo-and-social'>
                     <img src='/images/logo.png' alt="logo" className='logo'/>
                     <div className='socials'>
                        <button> <TfiEmail/> </button>
                        <button> <BsFacebook/> </button>
                        <button> <BsWhatsapp/> </button> 
                     </div>
                </div>

            </div>

            <div className='footer-container-bottom'>
                <p>Copyright @2023 Allrights Reserved | <span style={{color:'#0076BA'}}>Designed by Jordan Junior</span></p>
            </div>

        </div>
    </session>
  )
}

export default Footer