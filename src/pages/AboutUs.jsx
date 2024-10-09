import React from 'react';
import '../styles/AboutUs.css'; // Import the CSS file
import Navbar from '../components/Navbar';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <Navbar />
            <header className="about-us-header">
                <h1>About Us</h1>
                <p>
                    We are committed to delivering innovative solutions that empower our clients and foster lasting connections.
                </p>
            </header>
            <section className="about-us-content">
                <div className="about-us-info">
                    <h2>Who We Are</h2>
                    <p>
                        Our mission is to create transformative experiences through creativity and technology. Our passionate team is dedicated to driving success and making a difference in the world.
                    </p>
                </div>
                <div className="about-us-team">
                    <h2>Meet Our Team</h2>
                    <div className="team-scroll">
                        <div className="team-member">
                            <img src="public/images/headshots/headshot.webp" alt="Team Member 1" />
                            <div className="member-info">
                                <h3>Stavros</h3>
                                <p>CEO & Founder</p>
                            </div>
                        </div>
                        <div className="team-member">
                            <img src="public/images/headshots/headshot.webp" alt="Team Member 2" />
                            <div className="member-info">
                                <h3>Harjas Mangat</h3>
                                <p>Chief Technology Officer</p>
                            </div>
                        </div>
                        <div className="team-member">
                            <img src="public/images/headshots/headshot.webp" alt="Team Member 3" />
                            <div className="member-info">
                                <h3>Puneet Mangat</h3>
                                <p>Marketing Director</p>
                            </div>
                        </div>
                        {/* Add more team members as needed */}
                    </div>
                </div>
            </section>
            <footer className="about-us-footer">
                <p>&copy; 2024 SERIAL MEDIA. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default AboutUs;
