"use client"
import React, { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

function Faqs() {
  const initialFaqData = [
    {
      question: "What Are My Rights, As a Resident?",
      answer: "At Passionate Center & Homes Healthcare Services, IT IS YOUR RIGHT, <br>· TO BE TREATED WITH DIGNITY AND RESPECT <br>· TO HAVE PRIVACY IN THE HOME <br>· TO HAVE  A KEY TO EACH LOCKABLE ENTRANCE <br>· TO HAVE A CHOICE OF ROOMMATES <br>· TO HAVE FREEDOM IN DECORATING AREAS IDENTIFIED WITHIN THE LEASE OR OTHER AGREEMENTS <br>· TO HAVE VISITORS AT ANYTIME <br>· TO HAVE FREEDOM AND SUPPORT TO CONTROL THEIR SCHEDULES AND ACTIVITIES <br>· TO HAVE ACCESS TO FOOD ANYTIME <br>· TO BE TOLD ABOUT YOUR TREATMENT <br>· TO HAVE A SAY IN YOUR TREATMENT <br>· TO SPEAK TO OTHERS IN PRIVATE <br>· TO HAVE YOUR COMPLAINTS RESOLVED <br>· TO SAY WHAT YOU PREFER <br>· TO ASK QUESTIONS AND BE TOLD ABOUT YOUR RIGHTS <br>· TO GET HELP WITH YOUR RIGHTS",
      isOpen: false
    },
    {
      question: "What Are My Options for Community Participation?",
      answer: "At Passionate Center & Homes Healthcare Services, The individuals receiving services at Passionate Center & Homes Healthcare Services shall get involved in the community and by so doing develop good relationship with members in the community. Some examples of developing relationship in the community shall be belonging to bowling clubs; joining church choir; volunteering etc.",
      isOpen: false
    },
    {
      question: "What Are The Guidelines for activities for Resident?",
      answer: "At Passionate Center & Homes Healthcare Services, IT IS YOUR RIGHT, <br>· Age appropriateness will be taken into consideration when planning activities. Direct support professionals (DSPs) should be educated and trained to address individual needs and desires. DSPs sought and discover ways to support everyone to the extent possible. One individual’s needs should not limit another person’s freedoms and opportunities. To fully support community integration, settings must facilitate individuals taking part in age-appropriate activities with other individuals who do not receive HCBS. In residential settings, if access to the community is limited, the provider should facilitate access to transportation however possible <br>· Ensure individuals have opportunities and supports needed to be fully included in the community <br>· Identify information on transportation options <br>· Assist with developing meaningful relationships <br>· Ensure that individuals have services, resources, and supports to explore and engage in meaningful activities. <br>· Individuals and staff will be involved in planning activities on the monthly preplanned calendar. <br>· Activities will reflect the individual’s choice and interests. <br>· Each year new and preferred activities will be identified for each individual to partake during the upcoming year.  These activities will be part of the PC-ISP. <br>· Activities will be planned and taken part in on a regular basis. <br>· New activities will be encouraged to help expose the individual to new things. <br>· All activities will be encouraged, but free and low-cost activities should also be sought out. <br>·  Passionate Center & Homes Healthcare Services creates clear expectations for staff to adhere to the services and activities in the individual’s plans while respecting the need for flexibility should an individual’s preferences change. <br>· Planning meetings are held with individuals to discuss opportunities for the coming weeks to ensure community integration. <br>·  Passionate Center & Homes Healthcare Services supports individuals in trying new things and shares information about activities in the community. <br>·  Passionate Center & Homes Healthcare Services supports individuals in exploring options for transportation to access the community (e.g., use of public transit, family, friends, companion services, volunteers). <br>·  Passionate Center & Homes Healthcare Services has written policies and procedures explaining individual’s access to and utilization of transportation to access the community. <br>·  Passionate Center & Homes Healthcare Services posts information about how to access transportation. <br>· Progress notes, activity logs, and calendars document community activities and response. <br>· Consistent and individualized documentation of the # & type of community connections an individual make <br>· Access to information about community events is available in a variety of ways such as the internet, newspaper, newsletter, etc. <br>·  Passionate Center & Homes Healthcare Services helps the individual search for a job and prepare for employment <br>· Activities should build relationships between the individual and the community. A record of contacts will be kept on the community activity log.",
      isOpen: false
    },
    {
      question: "What Are My Home and Community Based Services Rights?",
      answer: "At Passionate Center & Homes Healthcare Services, My Home and Community Based Services Rights, You have the right to: <br>· Make choices when and where I want to go in the community <br>· Have privacy, dignity, and respect <br>· Say no without someone hurting me or forcing me to do something I don’t want to do </br>· Learn how to stay safe in my home and community <br>· Say no to any services that I don’t want <br>· Have a job if I choose <br>· Know what is written and said about me <br>· Have my own money, clothing, and other personal property",
      isOpen: false
    },
    {
      question: "What Are My Person-Centered Planning Rights?",
      answer: "At Passionate Center & Homes Healthcare Services, My Person-Centered Planning Rights, You have the right to: <br>· Be in charge of my planning meeting <br>· Ask anyone I want to come to my meetings <br>· Choose my goals to work on and what is on my plan <br>· Schedule my person-centered planning meeting at a time and place when the people who I want to attend are available <br>· Pick the services I want from the choice of services I can have <br>· Pick the agency I want to give me my services <br>· Know that I may need help from my guardian, family and/or friends to make good choices",
      isOpen: false
    },
    {
      question: "What Are My Home and Community Based Setting Rights?",
      answer: "At Passionate Center & Homes Healthcare Services, My Rights in my Home, You have the right to: <br>· Lock my bedroom door <br>· Have friends at my home when I want <br>· Have a written lease agreement <br>· If I share a bedroom, choose my roommate <br>· Have my own room <br>· Choose what I want to do inside or outside of my house <br>· Choose what and when I want to eat <br>· Choose where I want to live <br>· Choose how my home will look <br>· Be able to access all living areas of my home <br>· Have and use a private cell phone, computer, or other personal communication device",
      isOpen: false
    },
    {
      question: "What Are My Responsibilities As A Resident?",
      answer: "At Passionate Center & Homes Healthcare Services, You have the responsibility to: <br>· Listen to other people's ideas <br>· Follow the choices I make in my plan and the choices I make about my services <br>· Keep myself and others safe when I'm at home and in the community <br>· Treat others with dignity and respect, respect their privacy and personal space <br>· Accept that others can say no and not force them to do something they don't want to do <br>· Consider how my actions affect myself and others <br>· Be aware of and manage my finances with the support needed",
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