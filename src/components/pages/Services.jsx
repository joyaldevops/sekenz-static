// Services.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card">
    <span className="service-icon">{icon}</span>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Services = () => {
  const navigate = useNavigate();

  const services = [
    { icon: '🌐', title: "Web Development", description: "Custom websites tailored to your industry, designed for performance, scalability, and a seamless user experience. From simple landing pages to complex web applications, we have you covered." },
    { icon: '📱', title: "App Development", description: "Innovative mobile applications promoting engagement and growth. Our apps are designed to be user-friendly, feature-rich, and compatible with both iOS and Android platforms." },
    { icon: '💻', title: "Software Development", description: "Comprehensive software solutions for your business needs. We specialize in developing robust, scalable, and efficient software that drives business success and enhances operational efficiency." },
    { icon: '📢', title: "Digital Marketing", description: "Data-driven strategies to enhance your online presence. We use SEO, PPC, social media, and content marketing to reach your target audience and achieve your marketing goals." },
    { icon: '🎨', title: "UI/UX Designing", description: "Stunning, intuitive interfaces for seamless user experiences. Our design process focuses on creating visually appealing and user-centric designs that improve user satisfaction and engagement." },
    { icon: '🛒', title: "E-Commerce Development", description: "Robust online stores to boost your digital sales. We develop secure, scalable, and user-friendly e-commerce platforms that offer a smooth shopping experience and drive conversions." },
    { icon: '🎓', title: "Study Abroad", description: "Comprehensive guidance for international education experiences. From choosing the right institution to visa applications, we provide end-to-end support to help you achieve your academic goals abroad." },
    { icon: '👔', title: "Abroad Recruitment", description: "Connecting global talent with international opportunities. We assist candidates in finding the right job overseas and help companies in recruiting the best talent from around the world." }
  ];

  return (
    <div className="services-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>We create digital products and experiences that meet great expectations.</p>
        </div>
      </section>

      <section className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </section>

      <section className="cta-section">
        <h2>Ready to get started?</h2>
        <p>Let's work together to bring your vision to life.</p>
        <button className="cta-button" onClick={() => navigate('/contact')}>Contact Us</button>
      </section>
    </div>
  );
};

export default Services;
