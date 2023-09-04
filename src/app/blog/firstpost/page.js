import React from 'react'
import '../post.css'
function page() {
  return (
    <section>
      <div className='container'>
        <h2 className='post-title'>About Mental Health</h2>

        <div className='post-container'>
            <div className='image-container'>
                <img src='../images/pots.jpg' alt='images'/>
            </div>
            <p className='description'>Mental health refers to a person&apos;s psychological, social, and emotional well-being. 
                Just like physical health, mental health is something everybody can actively work on. 
                A mental illness is any disorder in the brain that affects mood, thinking or behavior, believed to be caused by genetic, biological, and environmental factors. 
                In the United States, about 1 in 4 adults and 1 in 5 children have a mental illness in any given year.                         
                </p>
                <p className='description'>
                The most common mental illnesses include anxiety, depression, obsessive-compulsive disorder (OCD), bipolar disorder, and schizophrenia. 
                There are a number of treatment options available such as medication, lifestyle changes, different forms of therapy, and procedures depending on the type and severity of the condition. 
                Recovery is not linear, so each individual with a mental illness must work to find the unique treatment plan that is best for them.                  
                </p>
                <p className='description'>
                Mental illnesses may affect a person&apos;s ability to function, relate to, and communicate with others. 
                The condition may be temporary, lasting a few months or years, or it may be chronic and affect the person their entire life. 
                Early intervention and treatment are often helpful in managing a mental illness.   
                </p>
                <p className='description'>
                There are a number of resources available to provide support and information to people living with mental illnesses. 
                If you or someone you know needs help, visit the <a href="https://www.themighty.com/suicide-prevention-resources/" target="_blank" rel="noopener noreferrer">suicide prevention resources</a> page
                If you are in the U.S. and need support right now, call the <a href="https://988lifeline.org/" target="_blank" rel="noopener noreferrer">988 Suicide & Crisis Lifeline</a> at <a href="1-800-273-8255" target="_blank" rel="noopener noreferrer">1-800-273-8255</a> or <a href="988" target="_blank" rel="noopener noreferrer">988</a>.
                </p>
        </div>
        

      </div>
    </section>
  )
}

export default page
