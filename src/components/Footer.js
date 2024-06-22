import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css";

function Footer() {
  const iconStyle = {
    fontSize: 30, // Change size here
    margin: '0 20px', // Add space between icons
    padding: '10px',
    border: '2px solid',
    borderRadius: '50%',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
  };
  return (
    
    <div className="footer">
      <div className="socialMedia">
        
        <a href="https://www.instagram.com/saravana_sk_03?igsh=aGQ2Ynk1MWpkOWRk" target="_blank" rel="noopener noreferrer">
          <InstagramIcon style={iconStyle} />
      </a>
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
      <p> Thanks for Visiting my Portfolio</p>
    </div>
  );
}

export default Footer;