"use client"
import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('Email before fetch:', email);

    try {
      const response = await fetch('/api/mailchimp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      console.log(data); // Log the response from the API

      // Optionally, you can show a success message to the user
      if (response.ok) {
        alert('Subscribed successfully!');
      } else {
        alert('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <section>
      <div className='sign-up'>
        <h2>Sign Up For Our Mental Health Newsletter</h2>
<<<<<<< HEAD
=======

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit">SUBSCRIBE</button>
      </form>
>>>>>>> f2dcb9668755c8a16bc6aecb17ff888a23aaa6f2

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
