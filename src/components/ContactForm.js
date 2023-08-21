import React from 'react'
import './contactform.css'
function ContactForm() {
  return (
    <section id='contact-id'>
        <form className='contact-container'>    
            <div className='top-form'>
                <div className='form-fields'>
                    <p>Name</p>
                    <input type='text' placeholder='Eg. Dorothea Dix' required/>
                </div>
  
                <div className='form-fields'>
                    <p>Phone</p>
                    <input type='text' placeholder='Eg. +1 703 911 1802' required/>
                </div>

                <div className='form-fields'>
                    <p>Email</p>
                    <input type='text' placeholder='Eg. email@gmail.com' required/>
                </div>
            </div>

            <div className='textarea'>
                <div className='form-textarea'>
                    <p>Message</p>
                    <textarea type='textarea' >
                        
                    </textarea>
                </div>
            </div>
            <button type='submit'>SEND MESSAGE</button>
        </form>
    </section>
  )
}

export default ContactForm