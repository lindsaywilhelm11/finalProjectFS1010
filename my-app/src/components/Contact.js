import React from 'react';
 
const Contact = () => {
    return (
        <article>
        <section className="top-container">
          <h1>Lindsay Wilhelm</h1>
          <h4>Future Web Developer</h4>
        </section>
        <hr />
        <h2>Get In Touch</h2>
        <p>Send me a message and I'll get back to you as soon as possible!</p>
        <article className="contact-form">
          <section id="error" />
          <form id="myform" onsubmit="return validation()">
            <section className="input_field">
              <label htmlFor="fname">First Name:</label><br />
              <input type="text" name="Name" id="fname" placeholder="John" />
            </section>
            <br />
            <section className="input_field">
              <label htmlFor="lname">Last Name:</label><br />
              <input type="text" name="Name" id="lname" placeholder="Doe" />
            </section>
            <br />
            <section className="input_field">
              <label htmlFor="phone">Phone Number:</label><br />
              <input type="text" id="phone" placeholder="XXXXXXXXXX" />
            </section>
            <br />
            <section className="input_field">
              <label htmlFor="email">Email Address:</label><br />
              <input type="email" id="email" placeholder="john@example.com" />
            </section>
            <br />
            <section className="input_field">
              <label htmlFor="message">Your Message:</label><br />
              <textarea name="message" id="message" defaultValue={""} />
            </section>
            <br />
            <section className="btn">
              <input type="submit" defaultValue="Submit" name="Submit" id="Submit" />
              <input type="reset" defaultValue="Reset" name="Reset" id=" Reset" />
            </section>
          </form>
        </article>
      </article>
    );
  }
 
export default Contact;