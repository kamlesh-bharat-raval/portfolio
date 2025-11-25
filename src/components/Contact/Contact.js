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

  const [status, setStatus] = useState(""); // success / error message

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });

    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section className="contact" id="contact">
      <h1 data-aos="fade-up">
        Contact <span>Me</span>
      </h1>

      <div className="contact-wrapper">

        {/* FORM */}
        <form className="contact-form" onSubmit={sendEmail} data-aos="fade-right">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            required
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Send Message</button>

          {/* SUCCESS / ERROR MESSAGE */}
          {status === "success" && (
            <p className="success">✔ Message Sent Successfully!</p>
          )}
          {status === "error" && (
            <p className="error">✖ Failed to send message. Try Again!</p>
          )}
        </form>

        {/* SOCIAL BOX */}
        <div className="contact-info" data-aos="fade-left">
          <h2>Connect With Me</h2>
          <p>You can also reach out through social platforms.</p>

          <div className="social-icons">
            <a href="#" target="_blank">
              <FaLinkedin />
            </a>

            <a href="#" target="_blank">
              <FaGithub />
            </a>

            <a href="mailto:yourmail@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
