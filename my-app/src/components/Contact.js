import React, { useState } from 'react';

 
const Contact = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const handleSubmit = (e) => {
      e.preventDefault();
    }

    

    return (
        <article>
        <section className="top-container">
          <h1>Lindsay Wilhelm</h1>
          <h4>Future Web Developer</h4>
        </section>
        <hr />
        <h2>Get In Touch</h2>
        <p>Send me a message and I'll get back to you as soon as possible!</p>
        <article>
          <section id="error" />
          <form className="contact-form" onSubmit={handleSubmit}>
            <section className="input_field">
              <label htmlFor="fname">First Name:</label><br />
              <input type="text" value={firstName} className="form-control" placeholder="John" required onChange={(e) => setFirstName(e.target.value)} />
            </section>
            <br />
            <section className="input_field">
              <label htmlFor="lname">Last Name:</label><br />
              <input type="text" value={lastName} className="form-control" placeholder="Doe" required onChange={(e) => setLastName(e.target.value)} />
            </section>
            <br />
            <section className="input_field">
              <label htmlFor="phone">Phone Number:</label><br />
              <input type="text" value={phone} className="form-control" placeholder="XXXXXXXXXX" required onChange={(e) => setPhone(e.target.value)} />
            </section>
            <br />
            <section className="input_field">
              <label htmlFor="email">Email Address:</label><br />
              <input type="email" value={email} className="form-control" placeholder="john@example.com" required onChange={(e) => setEmail(e.target.value)} />
            </section>
            <br />
            <section className="input_field">
              <label htmlFor="message">Your Message:</label><br />
              <textarea className="form-control" value={message} required onChange={(e) => setMessage(e.target.value)} />
            </section>
            <br />
            <section className="btn">
              <button type="submit" className="submitBtn">Submit</button>
            </section>
          </form>
        </article>
      </article>
    );
  }
 
export default Contact;