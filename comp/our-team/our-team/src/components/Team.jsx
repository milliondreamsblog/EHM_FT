import React, { useEffect } from 'react';
import './Team.css';

import one from '/one.png';
import two from '/two.png';
import three from '/three.png';
import bgShape from '/bg-shape.png';

const Team = () => {
  const members = [
    {
      name: "Harshit Mishra",
      title: "Founder & CEO",
      degree: "Ph.D., IIT Bombay",
      img: one,
    },
    {
      name: "Neha Shukla",
      title: "Director & COO",
      degree: "M.Sc., PGDCA",
      img: two,
    },
    {
      name: "Utsav Mishra",
      title: "Co-Founder & CTO",
      degree: "Ph.D., IIT Kanpur",
      img: three,
    }
  ];

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <div className="team-wrapper">
      <h1>Our Team</h1>
      <div className="container">
        {members.map((member, index) => (
          <div className="card" key={index}>
            <img className="bg" src={bgShape} alt="bg-shape" />
            <img className="one" src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <h4>{member.title}<br />({member.degree})</h4>
            <div className="icon">
              <ion-icon name="logo-linkedin"></ion-icon>
              <ion-icon name="logo-twitter"></ion-icon>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
