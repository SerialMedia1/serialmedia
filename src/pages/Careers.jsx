import React from 'react';
import '../styles/Careers.css'; 
import Navbar from '../components/Navbar';


const jobListings = [
    { id: 1, title: 'Videographer', description: 'Create, edit, and produce high-quality video content for various platforms, ensuring alignment with the brand’s vision and messaging.', type: 'FULL TIME & PART TIME', location: 'New York, New Jersey, Pennsylvania, Boston, Connecticut, Florida, Georgia' },
    { id: 2, title: 'Photographer', description: 'Capture compelling images for marketing, advertising, and editorial purposes. Collaborate with teams to ensure visual content meets project requirements.', type: 'FULL TIME & PART TIME', location: 'New York, New Jersey, Pennsylvania, Boston, Connecticut, Florida, Georgia' },
    { id: 3, title: 'Creative Director', description: 'Lead the creative process for branding and marketing projects. Develop and execute innovative concepts and strategies to drive brand growth and engagement.', type: 'FULL TIME & PART TIME', location: 'New York, New Jersey, Pennsylvania, Boston, Connecticut, Florida, Georgia' },
    { id: 4, title: 'Account Manager', description: 'Manage client relationships and ensure successful delivery of services. Act as the main point of contact between clients and internal teams to meet client expectations and project goals.', type: 'FULL TIME & PART TIME', location: 'New York, New Jersey, Pennsylvania, Boston, Connecticut, Florida, Georgia' },
    { id: 5, title: 'Sales Director', description: 'Develop and implement sales strategies to achieve revenue targets. Lead and motivate the sales team, manage key client relationships, and identify new business opportunities.', type: 'FULL TIME & PART TIME', location: 'New York, New Jersey, Pennsylvania, Boston, Connecticut, Florida, Georgia' },
    { id: 6, title: 'Sales Representative', description: 'Identify and pursue sales opportunities, build and maintain relationships with clients, and achieve sales targets. Provide excellent customer service and support throughout the sales process.', type: 'FULL TIME & PART TIME', location: 'New York, New Jersey, Pennsylvania, Boston, Connecticut, Florida, Georgia' },
    { id: 7, title: 'PR Manager', description: 'Develop and implement public relations strategies to enhance the company’s image and reputation. Manage media relations, coordinate press releases, and oversee PR campaigns.', type: 'FULL TIME & PART TIME', location: 'New York, New Jersey, Pennsylvania, Boston, Connecticut, Florida, Georgia' },
    { id: 8, title: 'Social Media Manager', description: 'Create and execute social media strategies to increase brand visibility and engagement. Manage social media platforms, develop content calendars, and analyze performance metrics.', type: 'FULL TIME & PART TIME', location: 'New York, New Jersey, Pennsylvania, Boston, Connecticut, Florida, Georgia' },
    { id: 9, title: 'Data Analyst', description: 'Collect, analyze, and interpret complex data to support business decision-making. Create reports and visualizations to communicate insights and recommendations to stakeholders.', type: 'FULL TIME & PART TIME', location: 'New York, New Jersey, Pennsylvania, Boston, Connecticut, Florida, Georgia' },
  ];
  

const Careers = () => {
  const handleEmailApplication = (jobTitle) => {
    window.location.href = `mailto:careers@yourcompany.com?subject=Application for ${jobTitle}&body=Please find attached my resume for the ${jobTitle} position.`;
  };

  return (
    <div className="careers-container">
      <Navbar />
      <header className="careers-header">
        <span className="join-text">Join our team</span>
      </header>
      <main className="job-listings">
        <h2>Job Openings</h2>
        <div className="job-cards">
          {jobListings.map((job) => (
            <div className="job-card" key={job.id}>
              <div className="job-type">{job.type}</div>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <button className="apply-button" onClick={() => handleEmailApplication(job.title)}>Apply Now</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Careers;
