import React from 'react';
import edinburghPhoto from '../images/edinburghPhoto.jpg'
import helsinkiPhoto from '../images/helsinkiPhoto.jpg'
import irelandPhoto from '../images/irelandPhoto.jpg'
import morainePhoto from '../images/morainePhoto.jpg'
import swedenPhoto from '../images/swedenPhoto.jpg'
import washingtonPhoto from '../images/washingtonPhoto.jpg'

 
const Portfolio = () => {
    return (
        <div>
        <title>Lindsay Wilhelm's Portfolio</title>
      
        
        <article className="top-container">
          <h1>Lindsay Wilhelm</h1>
          <h4>Future Web Developer</h4>
        </article>
        <hr />
        <h3>Thanks for checking out my portfolio.</h3>
        <p>I currently do not have any relevant or live projects to put in this section <br />
          but as I work through York University's Full-Stack Web Development Certificate program, <br /> 
          I will have more to show in my portfolio.</p>
        <br />
        <p>Please enjoy some of my photography instead.</p>
        <main className="imgContainer">
          <img src={edinburghPhoto} alt="Edinburgh Castle" className="edinburghPhoto" height="200px" width="300px" />
          <img src={helsinkiPhoto} alt="Helsinki" className="helsinkiPhoto" height="200px" width="300px" />
          <img src={irelandPhoto} alt="Cork, Ireland" className="irelandPhoto" height="200px" width="300px" />
          <br />
          <img src={morainePhoto} alt="Moraine Lake" className="morainePhoto" height="200px" width="300px" />
          <img src={swedenPhoto} alt="Malmo, Sweden" className="swedenPhoto" height="200px" width="300px" />
          <img src={washingtonPhoto} alt="Washington, D.C." className="washingtonPhoto"  height="200px" width="300px" />
        </main>
        <hr />
        <br /><br />
        
      </div>
    );
  };
 
export default Portfolio;