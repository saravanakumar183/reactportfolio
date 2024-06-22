import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';
import ogoPhoto from '../styles/ogo.png';
import resume from '../Pictures/prores.pdf'; // Adjust the path accordingly

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [activeButton, setActiveButton] = useState('/');

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      { <img className="logo" src={ogoPhoto} alt="Logo" /> }
      <div className="toggleButton">
  <button
    onClick={() => {
      setExpandNavbar((prev) => !prev);
      console.log(`Navbar expanded: ${!expandNavbar}`); // Debugging line
    }}
  >
    <ReorderIcon className="smallicon"/>
  </button>
</div>
      <div className="links">
        <Link to="/">
          <button
            className={activeButton === '/' ? 'active' : ''}
            onClick={() => setActiveButton('/')}
          >
            Home
          </button>
        </Link>
        <Link to="/projects">
          <button
            className={activeButton === '/projects' ? 'active' : ''}
            onClick={() => setActiveButton('/projects')}
          >
            Projects
          </button>
        </Link>
        <Link to="/experience">
          <button
            className={activeButton === '/experience' ? 'active' : ''}
            onClick={() => setActiveButton('/experience')}
          >
            Education
          </button>
        </Link>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <button className="blink">Pick My Resume</button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
