"use client"
import About from '@/components/About'
import SignUp from '@/components/SignUp'
import ContactForm from '@/components/ContactForm'
import './global.css'    
import Nav from "@/components/nav"
import Socials from '@/components/Socials'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react';
import Router from 'next/router';

export default function RootLayout({ children }) {
 return (
  
    <html lang="en">
      
        <body>
          <Nav/>
          {children}
          <Footer/>
        </body> 
      
      
    </html>
  )
}
