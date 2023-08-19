import React from 'react'
import {TfiEmail} from 'react-icons/tfi'
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import {AiFillTwitterSquare} from 'react-icons/ai'
import './socials.css'

function Socials() {
  return (
    <section>
      <div className='socials-container'>
        <h2>Get In Touch</h2>
        <div className='social-media-icons'>
           <button> <TfiEmail/> Email</button>
           <button> <BsFacebook/> Facebook</button>
           <button>< FaInstagramSquare/> Instagram</button>
           <button>< AiFillTwitterSquare/> Twitter</button>
           <button> <BsWhatsapp/> Phone</button> 
           
        </div>
      </div>
    </section>
    )
}

export default Socials
