"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" data-section="contact">
      <div>
        <div>
          <header>
            <h2>Schedule Your Appointment Today</h2>
            <p>We're accepting new patients and look forward to serving your healthcare needs.</p>
          </header>

          <form onSubmit={handleSubmit} data-contact-form="true">
            <div>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="message">How can we help you?</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your healthcare needs"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Request Appointment</button>
          </form>

          <div data-contact-info="true">
            <h3>Contact Information</h3>
            <p>
              <strong>Address:</strong><br />
              123 Healthcare Drive<br />
              Springfield, CA 90210
            </p>
            <p>
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <p>
              <strong>Email:</strong> info@sunrisemedical.com
            </p>
            <p>
              <strong>Hours:</strong><br />
              Monday - Friday: 8:00 AM - 6:00 PM<br />
              Saturday: 9:00 AM - 2:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;