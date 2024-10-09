import React from 'react';
import '../styles/Services.css'; // Make sure to import the CSS file
import Navbar from '../components/Navbar';

const services = {
  brandBuilding: [
    { name: 'Influencer', price: '$300+' },
    { name: 'Email and SMS', price: '$500+' },
    { name: 'Local Radio Ads', price: '$750+' },
    { name: 'Geofence Campaign', price: '$750+' },
    { name: 'Social Media Management', price: '$0' },
    { name: 'SEO', price: '$300+' },
    { name: 'Paid Ads', price: '$300+' },
  ],
  physicalAdvertising: [
    { name: 'Mail Order', price: '$75+' },
    { name: 'Physical PR Campaign', price: '$400+' },
    { name: 'Billboard', price: '$900+' },
  ],
  creative: [
    { name: 'Videography', price: '$400+' },
    { name: 'Web Development', price: '$300+' },
    { name: 'Logo Development', price: '$300+' },
    { name: 'Brand Packaging', price: '$300+' },
    { name: 'Poster, Graphic Creation', price: '$300+' },
    { name: 'App Development', price: '$1,000+' },
    { name: 'Software Integration', price: '$1,000+' },
  ],
};

const Services = () => {
  return (
    <div className="services-container">
      <Navbar />
      <header className="services-header">
        <h1>Our Services</h1>
        <p>Explore the range of services we offer to meet your needs.</p>
      </header>
      <main className="services-main">
        {Object.entries(services).map(([category, items]) => (
          <section key={category} className="service-category">
            <h2>{category.replace(/([A-Z])/g, ' $1').toUpperCase()}</h2>
            <ul>
              {items.map((service, index) => (
                <li key={index} className="service-item">
                  <span className="service-name">{service.name}</span>
                  <span className="service-price">{service.price}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Services;
