// `app/page.js` is the UI for the `/` URL
"use client"
import './nav.css'
import {BiSolidPhoneCall} from 'react-icons/bi'
import {RxHamburgerMenu} from 'react-icons/rx'
import {MdEmail} from 'react-icons/md'
import Image from 'next/image';
import myImage from '../app/assets/logo.png';
import Link from 'next/link';
import { React , useRef, useState,useEffect } from 'react';
import {GrClose} from 'react-icons/gr';
import dynamic from "next/dynamic";


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
            <Image src={myImage} alt="logo" className='logo'/>

            <div className='bottom-navbar-links'>
                <Link href='/' className='links'>
                    Home
                </Link>
                <Link href='/about' className='links with-submenu'>
                    About
                    <div className='submenu'>
                        
                        <Link href='/about/galery' className='sub-links'>Galery</Link> 
                        <Link href='/about/team' className='sub-links'>Team</Link>
                    </div>
                </Link>
                <Link href='/' className='links'>
                    Programs
                </Link>
                <Link href='/' className='links'>
                    Contact
                </Link>
                <Link href='/' className='links donate'>
                    Donate
                </Link>
            </div>
            <button className="toggle" onClick={() => setNavbarOpen((prev) => !prev)}>
                {navbarOpen ? <GrClose className='menu'/> :  <RxHamburgerMenu className='menu'/>}
            </button>            

        </div>
        <div ref={ref} className={`side-nav${navbarOpen ? ' show-menu' : ''}`}>
                <Link href='/' className='links' onClick={() => setNavbarOpen(false)}>
                    Home
                </Link>
                <Link href='/' className='links with-submenu'>
                    About
                    <div className='submenu'>
                        
                        <Link href='/' className='sub-links'  onClick={() => setNavbarOpen(false)}>Gallery</Link> 
                        <Link href='/' className='sub-links'  onClick={() => setNavbarOpen(false)}>Team</Link>
                    </div>
                </Link>
                <Link href='/' className='links'  onClick={() => setNavbarOpen(false)}>
                    Programs
                </Link>
                <Link href='/' className='links'  onClick={() => setNavbarOpen(false)}>
                    Contact
                </Link>
                <Link href='/' className='links donate'  onClick={() => setNavbarOpen(false)}>
                    Donate
                </Link>
        </div>
        
      </section>
    );
  }
  
  export default dynamic (() => Promise.resolve(Nav), {ssr: false})
