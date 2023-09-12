"use client"
import React, { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

function Faqs() {
  const initialFaqData = [
    {
      question: "What Are My Rights, As a Resident?",
      answer: "At Passionate Center & Homes Healthcare Services, IT IS YOUR RIGHT,",
      isOpen: false
    },
    {
      question: "Can I use the phone? Can I bring my cell phone?",
      answer: "Yes. Each house has 2 program phones (A staff phone & a client phone)",
      isOpen: false
    },
    // ...more FAQ items...
  ];

  const toggleDropdown = (index) => {
    const updatedFaqData = faqData.map((item, i) => {
      if (i === index) {
        return { ...item, isOpen: !item.isOpen };
      } else {
        return item;
      }
    });

    setFaqData(updatedFaqData);
  };

  const [faqData, setFaqData] = useState(initialFaqData);

  return (
<div className="faq-container">
      <h3 className='h2-tags'>Faqs For Residents</h3>
      {faqData.map((item, index) => (
        <div key={index} className="dropdown">
          <div className="dropdown-button" onClick={() => toggleDropdown(index)}>
            <div className='align'>
              <p className='color-hover'>{item.question}</p>
              <MdArrowDropDown/>
            </div>
          </div>
          {item.isOpen && (
            <div className="dropdown-content">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}

<style jsx>{`
        .faq-container{
          margin:2em 0;
          
        }
        .h2-tags{
          font-size: 1.8rem;
          font-weight: 200;
          text-align:center;
          margin:1em 0;
        }
        .dropdown {
          
          display:flex;
          flex-direction:column;
          align-items:center;
        }
        .dropdown-button{
          text-align:center;
          background-color:#f8f8f8;
          width:700px;
          
        }
        .align{
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:1em;
        }
        .color-hover:hover{
          color:#0076BA;
        }
        .dropdown-button p{
          cursor: pointer;
          
          opacity:0.8;
        }

        .dropdown-content {
          background-color: #fff;
          border: 1px solid #ddd;
          color:#76C63E;
          z-index: 1;
          width:700px;

          
        }
      `}</style>
    </div>
  )
}

export default Faqs