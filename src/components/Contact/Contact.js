import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
    
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.log("EmailJS Error:", error);
      setStatus("error");
    }

    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section className="contact" id="contact">
      <h1 data-aos="fade-up">
        Contact <span>Me</span>
      </h1>

      <div className="contact-wrapper">
        <form className="contact-form" onSubmit={sendEmail} data-aos="fade-right">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            value={form.message}
            onChange={handleChange}
            required
          ></textarea> 

          <button type="submit">Send Message</button>

          {status === "success" && (
            <p className="success">✔ Message Sent Successfully!</p>
          )}

          {status === "error" && (
            <p className="error">❌ Failed to send message. Check EmailJS setup.</p>
          )}
        </form>

        <div className="contact-info" data-aos="fade-left">
          <h2>Connect With Me</h2>
          <p>You can also reach out through social platforms.</p>

          <div className="social-icons">
            
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a> 
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="mailto:yourmail@gmail.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;