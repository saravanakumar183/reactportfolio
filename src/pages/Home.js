import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
// import { Avatar } from '@mui/material';
import myPhoto from '../styles/my.png'; // Update the path to your image
import Typewriter from "typewriter-effect";
import "../styles/Home.css";
import resume from '../Pictures/prores.pdf'; 
function Home() {
  const iconStyle = {
    fontSize: 30, // Change size here
    margin: '0 20px', // Add space between icons
    padding: '10px',
    border: '2px solid',
    borderRadius: '50%',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
  };
  
  return (
    <div>
      
    <div className="home">
    
         <div className="loading-animation"></div>
      <div className="about">
      <img alt="SARAVANAKUMAR" src={myPhoto} />

        <h2>
        <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString(" Hii, I'm SARAVANAKUMAR")
                        .start();
                }}
            />
        </h2>
        <div className="prompt">
          <p>An Electronics and Communication Engineer making the world better.</p>
          <a href="https://www.linkedin.com/in/saravanakumarp-ece/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon style={iconStyle} />
      </a>
      <a href="mailto:saravanakumarp.21ece@kongu.edu" target="_blank" rel="noopener noreferrer" className="licon">
        <EmailIcon  style={iconStyle} />
      </a>
      <a href="https://github.com/saravanakumar183" target="_blank" rel="noopener noreferrer" className="licon">
        <GithubIcon style={iconStyle} />
      </a>
        </div>
      </div>
      <hr className="styled-break" />

      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS.
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Java Spring, MySQL, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, Verilog HDL</span>
          </li>
        </ol>
      </div>
      <div>
        <h2>My Resume </h2>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <button style={myresume}>Click Here</button>
        </a>
      </div>
    </div></div>
  );
}

export default Home;