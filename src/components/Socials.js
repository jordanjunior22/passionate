"use client"
import React from 'react'
import {TfiEmail} from 'react-icons/tfi'
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import {AiFillTwitterSquare} from 'react-icons/ai'
import { BsTiktok } from 'react-icons/bs'
import './socials.css'
import Reveal from '@/components/ScrollReveal'
import Hover from '@/components/HoverButton'

function Socials() {
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
    <section>
     <Reveal>
      <div className='socials-container'>
        <h2>Get In Touch</h2>
        <div className='social-media-icons'>
            <Hover><button onClick={GoEmail}> <TfiEmail/> Email</button></Hover>
            <Hover><button onClick={GoFacebook}> <BsFacebook/> Facebook</button></Hover>
            <Hover><button onClick={GoInstagram}>< FaInstagramSquare/> Instagram</button></Hover>
            <Hover><button onClick={GoTwitter}>< AiFillTwitterSquare/> Twitter</button></Hover>
            <Hover><button onClick={GoTiktok}>< BsTiktok/> Tiktok</button></Hover>
            <Hover><button onClick={GoPhone}> <BsWhatsapp/> Phone</button> </Hover>
           
           
           
           
           
           
        </div>
      </div>
    </Reveal>
    </section>
    )
}

export default Socials
