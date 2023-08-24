"use client"
import React from 'react'
import Home from '@/components/Home'
import About from '@/components/About'
import SignUp from '@/components/SignUp'
import Socials from '@/components/Socials'
import ContactForm from '@/components/ContactForm'
import { motion, AnimatePresence } from '/node_modules/framer-motion'

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