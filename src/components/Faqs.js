"use client"
import React, { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

function Faqs() {
  const initialFaqData = [
    {
      question: "What Are My Rights, As a Resident?",
      answer: (
        <div>
          <p>➡️At Passionate Center & Homes Healthcare Services, IT IS YOUR RIGHT.</p>
          <p>➡️TO BE TREATED WITH DIGNITY AND RESPECT.</p>
          <p>➡️TO HAVE PRIVACY IN THE HOME.</p>
          <p>➡️TO HAVE  A KEY TO EACH LOCKABLE ENTRANCE.</p>
          <p>➡️TO HAVE A CHOICE OF ROOMMATES.</p>
          <p>➡️TO HAVE FREEDOM IN DECORATING AREAS IDENTIFIED WITHIN THE LEASE OR OTHER AGREEMENTS.</p>
          <p>➡️TO HAVE VISITORS AT ANYTIME.</p>
          <p>➡️TO HAVE FREEDOM AND SUPPORT TO CONTROL THEIR SCHEDULES AND ACTIVITIES.</p>
          <p>➡️TO HAVE ACCESS TO FOOD ANYTIME.</p>
          <p>➡️TO BE TOLD ABOUT YOUR TREATMENT.</p>
          <p>➡️TO HAVE A SAY IN YOUR TREATMENT.</p>
          <p>➡️TO SPEAK TO OTHERS IN PRIVATE.</p>
          <p>➡️TO HAVE YOUR COMPLAINTS RESOLVED.</p>
          <p>➡️TO SAY WHAT YOU PREFER.</p>
          <p>➡️TO ASK QUESTIONS AND BE TOLD ABOUT YOUR RIGHTS.</p>
          <p>➡️TO GET HELP WITH YOUR RIGHTS.</p>
        </div>

      ),
      isOpen: false
    },
    {
      question: "What Are My Options for Community Participation?",
      answer: "At Passionate Center & Homes Healthcare Services, The individuals receiving services at Passionate Center & Homes Healthcare Services shall get involved in the community and by so doing develop good relationship with members in the community. Some examples of developing relationship in the community shall be belonging to bowling clubs; joining church choir; volunteering etc.",
      isOpen: false
    },
    {
      question: "What Are The Guidelines for activities for Resident?",
      answer: (
        <div>
          <p>At Passionate Center & Homes Healthcare Services, IT IS YOUR RIGHT, </p>
          <p>➡️Age appropriateness will be taken into consideration when planning activities. Direct support professionals (DSPs) should be educated and trained to address individual needs and desires. DSPs sought and discover ways to support everyone to the extent possible. One individual&apos;s needs should not limit another person&apos;s freedoms and opportunities. To fully support community integration, settings must facilitate individuals taking part in age-appropriate activities with other individuals who do not receive HCBS. In residential settings, if access to the community is limited, the provider should facilitate access to transportation however possible. </p>
          <p>➡️Ensure individuals have opportunities and supports needed to be fully included in the community·</p>
          <p>➡️Identify information on transportation options.</p>
          <p>➡️Ensure that individuals have services, resources, and supports to explore and engage in meaningful activities.</p>
          <p>➡️Individuals and staff will be involved in planning activities on the monthly preplanned calendar.</p>
          <p>➡️Activities will reflect the individual&apos;s choice and interests. </p>
          <p>➡️Passionate Center & Homes Healthcare Services posts information about how to access transportation.</p>
          <p>➡️Each year new and preferred activities will be identified for each individual to partake during the upcoming year.These activities will be part of the PC-ISP.</p> 
          <p>➡️Activities will be planned and taken part in on a regular basis.</p> 
          <p>➡️New activities will be encouraged to help expose the individual to new things.</p> 
          <p>➡️All activities will be encouraged, but free and low-cost activities should also be sought out.</p> 
          <p>➡️Passionate Center & Homes Healthcare Services creates clear expectations for staff to adhere to the services and activities in the individual&apos;s plans while respecting the need for flexibility should an individual&apos;s preferences change.</p>
          <p>➡️Planning meetings are held with individuals to discuss opportunities for the coming weeks to ensure community integration.</p> 
          <p>➡️Passionate Center & Homes Healthcare Services supports individuals in trying new things and shares information about activities in the community.</p> 
          <p>➡️Passionate Center & Homes Healthcare Services supports individuals in exploring options for transportation to access the community (e.g., use of public transit, family, friends, companion services, volunteers).</p> 
          <p>➡️Passionate Center & Homes Healthcare Services has written policies and procedures explaining individual&apos;s access to and utilization of transportation to access the community.</p> 
          <p>➡️Progress notes, activity logs, and calendars document community activities and response.</p> 
          <p>➡️Consistent and individualized documentation of the # & type of community connections an individual make</p> 
          <p>➡️Access to information about community events is available in a variety of ways such as the internet, newspaper, newsletter, etc.</p> 
          <p>➡️Passionate Center & Homes Healthcare Services helps the individual search for a job and prepare for employment</p>
          <p>➡️Activities should build relationships between the individual and the community. A record of contacts will be kept on the community activity log.</p>
        </div>
      ),
      isOpen: false
    },
    {
      question: "What Are My Home and Community Based Services Rights?",
      answer:(
      <div>
        <p>At Passionate Center & Homes Healthcare Services, My Home and Community Based Services Rights, You have the right to: </p>
        <p>➡️Make choices when and where I want to go in the community. </p>
        <p>➡️Have privacy, dignity, and respect. </p>
        <p>➡️Say no without someone hurting me or forcing me to do something I don&apos;t want to do. </p>
        <p>➡️Learn how to stay safe in my home and community. </p>
        <p>➡️Say no to any services that I don&apos;t want. </p>
        <p>➡️Have a job if I choose. </p>
        <p>➡️Know what is written and said about me. </p>
        <p>➡️Have my own money, clothing, and other personal property.</p>
      </div>),

      isOpen: false
    },
    {
      question: "What Are My Person-Centered Planning Rights?",
      answer: (
        <div> 
            <p>At Passionate Center & Homes Healthcare Services, My Person-Centered Planning Rights, You have the right to:</p>
            <p>➡️Be in charge of my planning meeting.</p>
            <p>➡️Ask anyone I want to come to my meetings.</p>
            <p>➡️Choose my goals to work on and what is on my plan.</p>
            <p>➡️Schedule my person-centered planning meeting at a time and place when the people who I want to attend are available. </p>
            <p>➡️Pick the services I want from the choice of services I can have.</p>
            <p>➡️Pick the agency I want to give me my services.</p>
            <p>➡️Know that I may need help from my guardian, family and/or friends to make good choices.</p>
            

        </div>
      ),
      isOpen: false
    },
    {
      question: "What Are My Home and Community Based Setting Rights?",
      answer:(
      <div>
        <p>At Passionate Center & Homes Healthcare Services, My Rights in my Home, You have the right to: </p>
        <p>➡️Lock my bedroom door. </p>
        <p>➡️Have friends at my home when I want. </p>
        <p>➡️Have a written lease agreement. </p>
        <p>➡️If I share a bedroom, choose my roommate. </p>
        <p>➡️Have my own room. </p>
        <p>➡️Choose what I want to do inside or outside of my house. </p>
        <p>➡️Choose what and when I want to eat. </p>
        <p>➡️Choose where I want to live. </p>
        <p>➡️Choose how my home will look. </p>
        <p>➡️Be able to access all living areas of my home.</p>
        <p>➡️Have and use a private cell phone, computer, or other personal communication device.</p>
      </div>
      ),

      isOpen: false
    },
    {
      question: "What Are My Responsibilities As A Resident?",
      answer:(
        <div>
          <p>At Passionate Center & Homes Healthcare Services, You have the responsibility to: </p>
          <p>➡️Listen to other people&apos;s ideas.</p>
          <p>➡️Follow the choices I make in my plan and the choices I make about my services.</p> 
          <p>➡️Keep myself and others safe when I&apos;m at home and in the community.</p>
          <p>➡️Treat others with dignity and respect, respect their privacy and personal space.</p>
          <p>➡️Accept that others can say no and not force them to do something they don&apos;t want to do.</p>
          <p>➡️Consider how my actions affect myself and others.</p>
          <p>➡️Be aware of and manage my finances with the support needed.</p>
        </div>
      ), 

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
          width:100%;
          
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