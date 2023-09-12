/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import './blog.css'
import Link from 'next/link';

function page() {
  return (
    <section>
    <h2 className='title'>THE PASSIONATE <span style={{color:'#76C63E'}}> BLOG </span></h2>
      <div className='parent '>

        <div className='blog-container border-gradient'>
          <div className='image-container'> 
            <img src='../images/About.jpg' alt='blogimage'/>
          </div>

          <div className='blog-des'>
            <h3 className='blog-title'> About Mental Health </h3>
            <p className='set-opacity'>Mental health refers to a person&apos;s psychological, social, and emotional well-being.
              Just like physical health, mental health is something everybody can actively work on.
              If you or someone you know needs help, visit the <a href="https://www.themighty.com/suicide-prevention-resources/">suicide prevention resources</a> page.
              If you are in the U.S. and need support right now, call the <a href="https://988lifeline.org/">988 Suicide & Crisis Lifeline</a> at <a href="1-800-273-8255">1-800-273-8255</a> or <a href="988">988</a>.</p>
            <Link href='/blog/firstpost'>
                <button>See Post</button>
            </Link>
            
          </div>
        </div>

        <div className='blog-container border-gradient border-gradient-purple'>
          <div className='image-container'> 
            <img src='../images/Blog.jpg' alt='blogimage'/>
          </div>

          <div className='blog-des'>
          <h3 className='blog-title'>Top Mental Health Blogs to Read for Total Wellness</h3>
            <p className='set-opacity'>There are thousands of mental health bloggers out there,
              but these top 100 mental health blogs are particularly powerful sources of insight, wisdom, and support. 
              Here are the most high ranking blogs among the world&apos;s long list of anxiety, bipolar disorder, depression, 
              eating disorder, OCD, PTSD blogs, and more.</p>
            <Link href='/blog/secondpost'>
                <button>See Post</button>
            </Link>
          </div>
        </div>

      </div>
   

    </section>
  )
}

export default page
