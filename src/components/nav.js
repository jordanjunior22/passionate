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
            <p className='animate-text'> <BiSolidPhoneCall /> +1 (571) 265 5198</p>
            <p className='animate-text'> <MdEmail /> pchhservicesllc@gmail.com</p>
        </div>
        <div className='bottom-navbar blurred-navbar'>
          <Link href='/'><img src='../images/logo.png' alt="logo" className='logo'/></Link>

            <ul className='bottom-navbar-links'>
                <li><Link href="/" className='links'>Home</Link></li>
                <li className='links with-submenu'><Link href='/about' className='links'>About</Link>
                    <ul className='submenu'>
                        <li><Link href="/about/gallery" className='sub-links'>Gallery</Link></li>
                        <li><Link href="/about/team" className='sub-links'>Meet The Team</Link></li>
                        <li><Link href="/about/faqs" className='sub-links'>FAQs</Link></li>
                    </ul>
                </li>
                <li className='links with-submenu'><Link href='/#programs-id' className='links'>Programs</Link> 
                    <ul className='submenu'>
                        <li><Link href="/programs/residencial" className='sub-links'>Residencial Support Programs</Link></li>
                        <li><Link href="/programs/community" className='sub-links'>Community Support</Link></li>
                    </ul>
                </li>

                <li className='links with-submenu'><Link href='/getinvolve' className='links'>Get Involve</Link> 
                    <ul className='submenu'>
                        <li><Link href="/getinvolve/careers" className='sub-links'>Careers</Link></li>
                    </ul>
                </li>
                
                <li><Link href='/#contact-id' className='links'>Contact</Link></li>
                <li><Link href='/donate' className='links donate'>Donate</Link></li>
                
            </ul>
            <button className="toggle" onClick={() => setNavbarOpen((prev) => !prev)}>
                {navbarOpen ? <GrClose className='menu'/> :  <RxHamburgerMenu className='menu'/>}
            </button>            
 
        </div>

       
        <ul ref={ref} className={`side-nav${navbarOpen ? ' show-menu' : ''}`}>
                <li><Link href="/" className='links' onClick={() => setNavbarOpen(false)}>Home</Link></li>
                <li className='links with-submenu'><Link href='/about' className='links'>About</Link>
                    <ul className='submenu'>
                        <li><Link href="/about/gallery" className='sub-links' onClick={() => setNavbarOpen(false)}>Gallery</Link></li>
                        <li><Link href="/about/team" className='sub-links' onClick={() => setNavbarOpen(false)}>Meet The Team</Link></li>
                        <li><Link href="/about/faqs" className='sub-links' onClick={() => setNavbarOpen(false)}>FAQs</Link></li>
                    </ul>
                </li>
                <li className='links with-submenu'><Link href='/#programs-id' className='links' onClick={() => setNavbarOpen(false)}>Programs</Link> 
                    <ul className='submenu'>
                        <li><Link href="/programs/residencial" className='sub-links' onClick={() => setNavbarOpen(false)}>Residencial Support Programs</Link></li>
                        <li><Link href="/programs/community" className='sub-links' onClick={() => setNavbarOpen(false)}>Community Support</Link></li>
                    </ul>
                </li>  
                <li className='links with-submenu'><Link href='/getinvolve' className='links' onClick={() => setNavbarOpen(false)}>Get Involve</Link> 
                    <ul className='submenu'>
                        <li><Link href="/getinvolve/careers" className='sub-links' onClick={() => setNavbarOpen(false)}>Careers</Link></li>
                    </ul>
                </li>              
                <li><Link href='/#contact-id' className='links' onClick={() => setNavbarOpen(false)}>Contact</Link></li>
                <li><Link href='/donate' className='links donate' onClick={() => setNavbarOpen(false)}>Donate</Link></li>
                
        </ul>
       

      </section>
    );
  }
  
  export default Nav;
