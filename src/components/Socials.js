"use client"
import React from 'react'
import {TfiEmail} from 'react-icons/tfi'
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import {AiFillTwitterSquare} from 'react-icons/ai'
import { BsTiktok } from 'react-icons/bs'
import './socials.css'

function Socials() {
  const GoEmail = () => {
    // Redirect the user to the specified link
    window.open('https://www.example.com', '_blank');
  };
  const GoFacebook = () => {
    // Redirect the user to the specified link
    window.open('https://www.example.com', '_blank'); // Replace with your desired link
  };
  const GoInstagram = () => {
    // Redirect the user to the specified link
    window.open('https://www.example.com', '_blank'); // Replace with your desired link
  };
    const GoTwitter = () => {
    // Redirect the user to the specified link
    window.open('https://www.example.com', '_blank'); // Replace with your desired link
  };

  const GoTiktok = () => {
    // Redirect the user to the specified link
    window.open('https://www.example.com', '_blank'); // Replace with your desired link
  };

  const GoPhone = () => {
    // Redirect the user to the specified link
    window.open('https://www.example.com', '_blank'); // Replace with your desired link
  };
  return (
    <section>
      <div className='socials-container'>
        <h2>Get In Touch</h2>
        <div className='social-media-icons'>
           <button onClick={GoEmail}> <TfiEmail/> Email</button>
           <button onClick={GoFacebook}> <BsFacebook/> Facebook</button>
           <button onClick={GoInstagram}>< FaInstagramSquare/> Instagram</button>
           <button onClick={GoTwitter}>< AiFillTwitterSquare/> Twitter</button>
           <button onClick={GoTiktok}>< BsTiktok/> Tiktok</button>
           <button onClick={GoPhone}> <BsWhatsapp/> Phone</button> 
           
        </div>
      </div>
    </section>
    )
}

export default Socials
