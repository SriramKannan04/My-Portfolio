import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div>
          <nav>
        
        <div class="first">
            <Link className='a' to="/Homepage"><img src="./images/logo.png" alt="#" className="size1"/></Link>
            <span class="display2">PROFILE</span>
        </div>

        <div class="first">
            <Link className='a' to="/Skills"><img src="./images/skills2.png" alt="#" className="size1"/></Link>
            <span class="display3">PROFICIENCY</span>
        </div>

        <div class="first">
            <Link className='a' to="/Education"><img src="./images/education2.png" alt="#" className="size1"/></Link>
            <span class="display">EDUCATION</span>
        </div>

        <div class="first">
            <Link className='a' to="/Certificates"><img src="./images/certificates2.png" alt="#" className="size1"/></Link>
            <span class="display3">CERTIFICATES</span>
        </div>

        <div class="first">
            <Link className='a' to="/Projects"><img src="./images/projects2.png" alt="#" className="size1"/></Link>
            <span class="display1">PROJECTS</span>
        </div>
        

        <div class="last">
            <Link className='a' to="/Contact"><img src="./images/contact.png" alt="#" className="size1"/></Link>
            <span class="display1">CONTACT</span>
        </div>
    </nav>
    </div>
  )
}

export default Navbar;