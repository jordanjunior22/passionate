"use client"
import React from 'react'
import './blog.css'

function page() {
  const FirstPost = () => {
    // Redirect the user to the specified link
    window.open('/blog/firstpost', '_blank');
  };
  const SecondPost = () => {
    // Redirect the user to the specified link
    window.open('/blog/secondpost', '_blank');
  };
  return (
    <section>
    <h2 className='title'>BlOG <span style={{color:'#76C63E'}}>POST</span></h2>
      <div className='parent '>

        <div className='blog-container border-gradient border-gradient-purple'>
          <div className='image-container'> 
            <img src='https://jordanjunior22.github.io/passionate/images/pots.jpg' alt='blogimage'/>
          </div>

          <div className='blog-des'>
            <h3 className='blog-title'>This is the tile of the blog post</h3>
            <p className='set-opacity'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat.</p>
            <button onClick={FirstPost}>See Post</button>
          </div>
        </div>

        <div className='blog-container border-gradient border-gradient-purple'>
          <div className='image-container'> 
            <img src='https://jordanjunior22.github.io/passionate/images/blog2.jpg' alt='blogimage'/>
          </div>

          <div className='blog-des'>
          <h3 className='blog-title'>This is the tile of the blog post</h3>
            <p className='set-opacity'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat.</p>
            <button onClick={SecondPost}>See Post</button>
          </div>
        </div>

      </div>
   

    </section>
  )
}

export default page
