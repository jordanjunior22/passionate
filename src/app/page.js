"use client"
import React from 'react'
import Home from '@/components/Home'
import About from '@/components/About'
import SignUp from '@/components/SignUp'
import Socials from '@/components/Socials'
import ContactForm from '@/components/ContactForm'
import { motion, AnimatePresence } from 'framer-motion'
import NProgress from 'nprogress'; // You can use any loading animation library
import { Router } from 'next/router';
import Map from '@/components/Map'

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});

function page() {

  return (
  
      <div>
        <Home/>
        <About/>
        <SignUp/>
        <Socials/>
        <ContactForm/>
      </div> 
  )
}

export default page
