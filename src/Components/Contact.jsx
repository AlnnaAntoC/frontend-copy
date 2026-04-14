import React, { useState, useCallback } from "react";
import "./Contact.css";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { sendContactMessage } from "../api";

const Contact = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    formSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    if (honeypot) {
      setStatus("error");
      setErrorMessage("Submission blocked.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    if (!executeRecaptcha) {
      setStatus("error");
      setErrorMessage("reCAPTCHA is not ready yet. Please wait a moment.");
      return;
    }

    const captchaToken = await executeRecaptcha("contact_form");

    try {
      
      
        
        await sendContactMessage({ ...formData, captchaToken });

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message || "Unable to send your message. Please try again.");
      setStatus("error");
    }
  }, [formData, honeypot, executeRecaptcha]);

  return (
    <div className="contact-root">
      <div className="navbar-space"></div>
      <section className="hero">
        <div className="hero-text">
          <h1>Let's Talk</h1>
          <p>Have an idea, project, or question? Our team is ready to help you turn ideas into reality.</p>
          <div className="hero-buttons">
            <button className="primary" onClick={scrollToForm}>Contact Now</button>
            <button className="secondary" onClick={() => window.location.href="/services"}>View Services</button>
          </div>
        </div>
        <div className="hero-visual">
          <img src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9" alt="team discussion" />
          <div className="glass-card-support">
            <h4>Questions?</h4>
            <p>Drop us a message</p>
          </div>
        </div>
      </section>

      <section className="contact-cards">
        <div className="card">
          <img src="https://img.icons8.com/ios-filled/100/6366f1/marker.png" alt="location" />
          <h3>Visit Us</h3>
          <p>Doha, Qatar</p>
        </div>
        <div className="card">
          <img src="https://img.icons8.com/ios-filled/100/6366f1/email.png" alt="email" />
          <h3>Email</h3>
          <p>info@orbitqa.com</p>
          <p>sales@orbitqa.com</p>
        </div>
        <div className="card">
          <img src="https://img.icons8.com/ios-filled/100/6366f1/phone.png" alt="phone" />
          <h3>Call</h3>
          <p>+974 4005 2222</p>
        </div>
      </section>

      <section className="form-section" id="contact-form">
        <div className="form-card">
          <div className="form-info">
            <h2>Send Us a Message</h2>
            <p>We usually respond within one business day. Your information is safe with us.</p>
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7" alt="support" />
          </div>

          <form className="form-box" onSubmit={handleSubmit}>
            <input
              type="text"
              name="hp_field"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ position: "absolute", left: "-9999px", top: "-9999px" }}
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
            />
            <div className="input-group">
              <input name="name" value={formData.name} onChange={handleChange} required placeholder=" " />
              <label>Name</label>
            </div>
            <div className="input-group">
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder=" " />
              <label>Email</label>
            </div>
            <div className="input-group">
              <input name="subject" value={formData.subject} onChange={handleChange} required placeholder=" " />
              <label>Subject</label>
            </div>
            <div className="input-group">
              <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required placeholder=" "></textarea>
              <label>Message</label>
            </div>
            <button className="submit" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && <p style={{ color: "green", marginTop: "10px" }}>✅ Message sent successfully!</p>}
            {status === "error" && <p style={{ color: "red", marginTop: "10px" }}>{errorMessage || "❌ Something went wrong. Please try again."}</p>}
          </form>
        </div>
      </section>

      <section className="map-section">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.954471537121!2d51.4470961!3d25.2019586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45dac27e4fbdc5%3A0x8e0915d34baf550c!2sOrbit+Electronic+And+Telecommunication!5e0!3m2!1sen!2sus!4v1694091234567!5m2!1sen!2sus"
          width="100%" height="450"
          style={{ border: 0, borderRadius: "20px" }}
          allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section className="testimonials">
        <h2>What Clients Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial"><p>"Amazing service and very professional team."</p><span>— Ahmed</span></div>
          <div className="testimonial"><p>"They understood our vision perfectly."</p><span>— Sarah</span></div>
          <div className="testimonial"><p>"Fast delivery and great communication."</p><span>— John</span></div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Start?</h2>
        <p>Let's create something impactful together.</p>
        <button className="primary" onClick={scrollToForm}>Get Started</button>
      </section>

      <a href="https://wa.me/97431191887" target="_blank" rel="noopener noreferrer" className="whatsapp-float">
        <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp" />
      </a>
    </div>
  );
};

export default Contact;