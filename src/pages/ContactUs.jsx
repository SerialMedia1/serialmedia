import React, { useState } from 'react';
import '../styles/ContactUs.css'; // Make sure to import the CSS file
import Navbar from '../components/Navbar';

const services = [
  'Influencer',
  'Email and SMS',
  'Local Radio Ads',
  'Geofence Campaign',
  'Social Media Management',
  'SEO',
  'Paid Ads',
  'Mail Order',
  'Physical PR Campaign',
  'Billboard',
  'Videography',
  'Web Development',
  'Logo Development',
  'Brand Packaging',
  'Poster, Graphic Creation',
  'App Development',
  'Software Integration'
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <div className="contact-us-container">
      <Navbar />
      <header className="contact-us-header">
        <h1>
          <span className="contact-text">CONTACT</span>
          <br />
          <span className="us-text">US</span>
        </h1>
      </header>
      <main className="contact-us-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-container">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder=" " 
                className="floating-input"
              />
              <label htmlFor="firstName">First Name</label>
            </div>
          </div>
          <div className="form-group">
            <div className="input-container">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder=" " 
                className="floating-input"
              />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="form-group">
            <div className="input-container">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" " 
                className="floating-input"
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="form-group">
            <div className="input-container">
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder=" " 
                className="floating-input"
              />
              <label htmlFor="company">Company</label>
            </div>
          </div>
          <div className="form-group custom-select">
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <div className="input-container">
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="5"
                required
                placeholder=" "
                className="floating-input"
              />
              <label htmlFor="description">Description</label>
            </div>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default ContactUs;
