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
  const LoadingIndicator = () => {
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const startLoading = () => setLoading(true);
      const endLoading = () => setLoading(false);
  
      Router.events.on('routeChangeStart', startLoading);
      Router.events.on('routeChangeComplete', endLoading);
      Router.events.on('routeChangeError', endLoading);
  
      return () => {
        Router.events.off('routeChangeStart', startLoading);
        Router.events.off('routeChangeComplete', endLoading);
        Router.events.off('routeChangeError', endLoading);
      };
    }, []);
  
    return loading ? <div>Loading...</div> : null;
  };

 return (
  
    <html lang="en">
      
        <body>
        <LoadingIndicator />
          <Nav/>
          {children}
          <Footer/>
        </body> 
      
      
    </html>
  )
}
