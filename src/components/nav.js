/* eslint-disable @next/next/no-img-element */
/* esant-disable @next/next/no-img-element */
// `app/page.js` is the UI for the `/` URL
"use client"
import './nav.css'
import {BiSolidPhoneCall} from 'react-icons/bi'
import {RxHamburgerMenu} from 'react-icons/rx'
import {MdEmail} from 'react-icons/md'
import Image from 'next/image';
import { React , useRef, useState,    useEffect } from 'react';
import {GrClose} from 'react-icons/gr';
import Link from 'next/link'


function Nav() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const ref = useRef();
    useEffect(() => {
      const handler = (event) => {
        if (
          navbarOpen &&
          ref.current &&
          !ref.current.contains(event.target)
        ) {
          setNavbarOpen(false);
        }
      };
      document.addEventListener('mousedown', handler);
        return () => {
        // Cleanup the event listener
        document.removeEventListener('mousedown', handler);
        };

    }, [navbarOpen]);

    return (
      <section className="navbar">
        <div className='top-navbar'>
            <p className='animate-text'> <BiSolidPhoneCall /> +1 (234) 456 2345</p>
            <p className='animate-text'> <MdEmail /> passionate@gmail.com</p>
        </div>
        <div className='bottom-navbar blurred-navbar'>
            <img src='/images/logo.png' alt="logo" className='logo'/>

            <ul className='bottom-navbar-links'>
                <li><Link href="/" className='links'>Home</Link></li>
                <li className='links with-submenu'>About
                    <ul className='submenu'>
                        <li><Link href="/about/gallery" className='sub-links'>Gallery</Link></li>
                        <li><Link href="/about/team" className='sub-links'>Team</Link></li>
                    </ul>
                </li>
                <li><Link href='/programs' className='links'>Programs</Link></li>
                <li><Link href='/#contact-id' className='links'>Contact</Link></li>
                <li><Link href='/donate' className='links donate'>Donate</Link></li>
                
            </ul>
            <button className="toggle" onClick={() => setNavbarOpen((prev) => !prev)}>
                {navbarOpen ? <GrClose className='menu'/> :  <RxHamburgerMenu className='menu'/>}
            </button>            
 
        </div>

       
        <ul ref={ref} className={`side-nav${navbarOpen ? ' show-menu' : ''}`}>
                <li><Link href="/home" className='links' onClick={() => setNavbarOpen(false)}>Home</Link></li>
                <li className='links with-submenu'>About
                    <ul className='submenu'>
                        <li><Link href="./gallery" className='sub-links' onClick={() => setNavbarOpen(false)}>Gallery</Link></li>
                        <li><Link href="./team" className='sub-links' onClick={() => setNavbarOpen(false)}>Team</Link></li>
                    </ul>
                </li>
                <li><Link href='/programs' className='links' onClick={() => setNavbarOpen(false)}>Programs</Link></li>
                <li><Link href='/contact' className='links' onClick={() => setNavbarOpen(false)}>Contact</Link></li>
                <li><Link href='/donate' className='links donate' onClick={() => setNavbarOpen(false)}>Donate</Link></li>
                
        </ul>
       

      </section>
    );
  }
  
  export default Nav;
