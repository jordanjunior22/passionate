"use client"
import React, { useState } from 'react';
import './SignUp.css'

function SignUp() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Call the API to add the email to your email list using your chosen email marketing service's API
    // Example: Call the function that handles the API request here
  };
  return (
    <section>
      <div className='sign-up'>
        <h2>Sign Up for Our Newsletter</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit">Subscribe</button>
      </form>

      </div>
    </section>
  )
}

export default SignUp
