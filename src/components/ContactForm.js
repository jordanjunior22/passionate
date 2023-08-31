"use client"
import React, { useState } from 'react';
import './contactform.css'
import Reveal from '@/components/ScrollReveal'
function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone:', phone);
      console.log('Message:', message);

      try {
        const response = await fetch('/api/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, phone, message }),
        });
  
        if (response.ok) {
          alert('Form submission successful!');
          // Reset form fields
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
        } else {
          alert('An error occurred while submitting the form.');
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred while submitting the form.');
      }
    };
  
  return (
    <section id='contact-id'>
    <Reveal>
    <form className='contact-container' onSubmit={handleSubmit}>
      <div className='top-form'>
        <div className='form-fields'>
          <p>Name</p>
          <input
            type='text'
            placeholder='Eg. Dorothea Dix'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='form-fields'>
          <p>Phone</p>
          <input
            type='text'
            placeholder='Eg. +1 703 911 1802'
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className='form-fields'>
          <p>Email</p>
          <input
            type='text'
            placeholder='Eg. email@gmail.com'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className='textarea'>
        <div className='form-textarea'>
          <p>Message</p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
      </div>
      <button type='submit'>SEND MESSAGE</button>
    </form>
    </Reveal>
  </section>
  )
}

export default ContactForm
