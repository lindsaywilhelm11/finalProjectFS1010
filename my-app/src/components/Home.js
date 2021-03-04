import React from 'react';
 
const home = () => {
    return (
        
        <div>
        <title>Lindsay Wilhelm's Personal Site</title>
        <link rel="stylesheet" href="PSstylesheet.css" />
        <main className="top-container">
          <h1 className="homeHeading">Lindsay Wilhelm</h1>
          <h4 className="homeSubHeading">Future Web Developer</h4>
        </main>
        <footer>
          <a href="about.html" className="homeButton">Check Out My Personal Site</a>
        </footer>
      </div>
    );
  }
 
export default home;