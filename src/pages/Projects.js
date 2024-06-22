// Projects.js

import React from 'react';
import "../styles/Project.css";
import roadPhoto from '../Pictures/road.jpg';
import hallPhoto from '../Pictures/hall.png';
import motorPhoto from '../Pictures/motor.png';
import mitPhoto from '../Pictures/mit.jpg';
import spavaPhoto from '../Pictures/spava.jpg';
import psgPhoto from '../Pictures/psg.jpg';
import pocPhoto from '../Pictures/poc.png';
import bitPhoto from '../Pictures/bit.jpg';
import ccPhoto from '../Pictures/cc.jpg';
import mePhoto from '../Pictures/me.png';
import ietePhoto from '../Pictures/iete.png';
import whitePhoto from '../Pictures/white.png';

const projects = [
    { title: 'Road Safety', img: roadPhoto, description: 'A project focused on improving road safety through technology.', link: 'https://github.com/saravanakumar183/Road-safety' },
    { title: 'Hall Booking System', img: hallPhoto, description: 'A system to manage hall bookings efficiently.', link: 'https://github.com/saravanakumar183/EVENT-BOOKING-SYSTEM' },
    { title: 'Automatic Shutter System', img: motorPhoto, description: 'An automated system for controlling shutters.', link: 'https://github.com/saravanakumar183/Automatic-shutter-system' },
  ];

const papers = [
  { title: 'Blue Brain Technology - Madras Institute of Technology,Chennai', img: mitPhoto, description: 'About Blue Brain Technology and it application in space.' },
  { title: 'Nanotree - PSG college of technology,Coimbatore', img: psgPhoto, description: 'Efficient way of collecting electricity by applying nanotechnology in tree.' },
  { title: 'Electric Vehicle Explosion Arrester - IEEE paper Presentation', img: spavaPhoto, description: 'Preventing explosion of battery in electric vehicle using fireballs.'},
  { title: 'Road Safety - Proof of Concept', img: pocPhoto, description: 'Preventing the accident using IOT, emergency alert and data collection.'},
  { title: 'IOT Based Modern Vehicle Accident Detection - BIT,Erode', img: bitPhoto, description: 'This system uses sensors to detect sudden changes and indicating a potential accident.'},

];
const cre = [
    { title: 'NPTEL Courses', img: ccPhoto, description: 'Cloud Computing and Introduction to Industry 4.0 and Industrial Internet of Things.' },
    { title: 'Make Electronics', img: mePhoto, description: 'Won a first Place in Make Electronics Event.' },
    { title: 'Executive Member - ISF  ', img: ietePhoto, description: 'Executive Member in Institutional Student Forum.' },
    { title: 'Class Committee Member', img: whitePhoto, description: 'Class Committee Member during the Acadamic year 2022 to 2023.' },

  ];
function Projects() {
  return (
    <div className="projects-wrapper">
      <div className="projects-section">
        <h2>Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.img} alt={project.title} className="project-image" />
              <div className="project-details">
                <div className="project-title">{project.title}</div>
                <div className="project-description">{project.description}</div>
                <a href={project.link} className="project-link">
                  <button className="project-button">More</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="papers-section">
        <h2>Paper Presentation</h2>
        <div className="paper-container">
          {papers.map((paper, index) => (
            <div className="project-card" key={index}>
              <img src={paper.img} alt={paper.title} className="project-image" />
              <div className="project-details">
                <div className="project-title">{paper.title}</div>
                <div className="project-description">{paper.description}</div>
              </div>
              
            </div>
            
          ))}
        </div>
      </div>
      <div className="achievment-section">
        <h2>Other Credentials</h2>
        <div className="cre-container">
          {cre.map((paper, index) => (
            <div className="project-card" key={index}>
              <img src={paper.img} alt={paper.title} className="project-image" />
              <div className="project-details">
                <div className="project-title">{paper.title}</div>
                <div className="project-description">{paper.description}</div>
              </div>
              
            </div>
            
          ))}
        </div>
      </div>
    </div>
    
  );
}

export default Projects;
