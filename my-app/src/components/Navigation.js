import React from 'react';
import { Link } from 'react-router-dom';
 
function Navigation() {
   const navStyle = {
      color: '#1a1c20'
   };

    return (
       <div>
          <ul className='navLink'>
          <Link style={navStyle} to="/"><li>Home</li></Link>
          <Link style={navStyle} to="/about"><li>About</li></Link>
          <Link style={navStyle} to="/portfolio"><li>Portfolio</li></Link>
          <Link style={navStyle} to="/resume"><li>Resume</li></Link>
          <Link style={navStyle} to="/contact"><li>Contact</li></Link>
          </ul>
       </div>
    );
}
 
export default Navigation;