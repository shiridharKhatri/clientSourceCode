import React from "react";
import Topheader from "../components/Topheader";
export default function Contact() {
  return (
    <>
    <Topheader/>
    <section className="contactUs">
      <h1>Contact Us</h1>
      <div className="contactMainFlexDisplay">
        <div className="flexOne">
          <h2>Contact form</h2>
          <form>
      <div className="form-group">
        <label htmlFor="your_name">Your Name:</label>
        <input
          type="text"
          id="your_name"
          name="your_name"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="your_email">Your Email:</label>
        <input
          type="email"
          id="your_email"
          name="your_email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Enter subject"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Enter your message"
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
        </div>
        <div className="flexTwo">
          <div className="map">
            <h2>Where are you from?</h2>

            <iframe
              width="300"
              height="300"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=11&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              title="Google Map"
            ></iframe>
          </div>
          <div className="contactDetail">
            <h2>Contact details</h2>
            <h3>Address</h3>
            <p>A Foundation </p>
            <p>
              Plot-60, Road-3, Block-C, (Op5555aj Convention Center)r,
              Dhaka-1212
            </p>
            <h3>Phone</h3>
            <p>63656556565+88-0</p>
            <h3>Email</h3>
            <p>foundation@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
