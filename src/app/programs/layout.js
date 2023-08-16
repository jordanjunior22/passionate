import React from 'react'
import SignUp from '@/components/SignUp'
import ContactForm from '@/components/ContactForm'
import Socials from '@/components/Socials'

function Programslayout({ children }) {
  return (
    <session>
        { children }
        <SignUp/>
        <Socials/>
        <ContactForm/>
    </session>
  )
}

export default Programslayout