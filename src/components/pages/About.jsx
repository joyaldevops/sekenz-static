import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './About.css';
import AboutImage1 from '../../Assets/about1.jpg';
import aboutImage2 from '../../Assets/about2.jpg';
import aboutImage3 from '../../Assets/about3.jpg';
import about4 from '../../Assets/about4.jpg';
import about5 from '../../Assets/about5.jpg';
import about6 from '../../Assets/about6.jpg';
import teamMember1 from '../../Assets/laksmi.jpg';
import teamMember2 from '../../Assets/anjali.jpg';
import teamMember3 from '../../Assets/Keerthi.jpg';
import teamMember4 from '../../Assets/nizu.jpg';
import teamMember5 from '../../Assets/nidhuna.jpg';
import teamMember6 from '../../Assets/anusree.jpg';

const teamMembers = [
  { name: 'Sreelakshmi Presadh.k', role: 'Full Stack Developer', image: teamMember1 },
  { name: 'Anjali Ayyappan', role: 'Full Stack Developer', image: teamMember2 },
  { name: 'Keerthi', role: 'Full Stack Developer', image: teamMember3 },
  { name: 'Nizam TC', role: 'Full Stack Developer', image: teamMember4 },
  { name: 'Nidhuna', role: 'Full Stack Developer', image: teamMember5 },
  { name: 'Anusree', role: 'Full Stack Developer', image: teamMember6 },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Spring animation for sliding effect
  const props = useSpring({
    transform: `translateX(${-currentIndex * 100}%)`,
    config: { duration: 1000 },
  });

  // Change the current index every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(teamMembers.length / 2));
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="about-container">
      <section className="about-section">
        <div className="about-content">
          <h1>Who we are</h1>
          <p>
            Sekenz Group is a leading web and app development company specializing in custom solutions for businesses worldwide. We deliver innovative, user-friendly, and scalable digital products, ensuring exceptional quality and client satisfaction.
          </p>
        </div>
        <img src={AboutImage1} alt="About Us" className="about-us-image" />
      </section>

      <section className="approach-section">
        <img src={aboutImage2} alt="Our Approach" className="approach-us-image" />
        <div className="approach-content">
          <h2>Our Approach</h2>
          <p>
            We emphasize innovation and collaboration. We start with detailed planning, create user-centric designs, and use the latest technologies for development. Our Agile methodology ensures flexibility, while rigorous quality assurance guarantees top-notch performance. We provide seamless deployment and continuous support for lasting success.
          </p>
        </div>
      </section>

      <div className="dark-blue-background">
        <p>
          "Innovation as our compass, collaboration as our fuel. Transforming possibilities into realities."
        </p>
      </div>

      <section className="why-sekenz-group">
        <h2>Why Sekenz Group</h2>
        <div className="content-image">
          <img src={aboutImage3} alt="Why Sekenz" className="why-sekenz-main-image" />
          <div className="features">
            <div className="feature">
              <div className="feature-header">
                <img src={about4} alt="Innovative Process" />
                <h3>Innovative Process</h3>
              </div>
              <p>
                We believe in keeping creativity at the helm of things at our workplace. Our innovative approach of making no two strategies similar is what makes us unique.
              </p>
            </div>
            <div className="feature">
              <div className="feature-header">
                <img src={about5} alt="Research Focused" />
                <h3>Research Focused</h3>
              </div>
              <p>
                Crafting transformative solutions through cutting-edge research and unwavering dedication to progress.
              </p>
            </div>
            <div className="feature">
              <div className="feature-header">
                <img src={about6} alt="Excellence in Delivery" />
                <h3>Excellence in Delivery</h3>
              </div>
              <p>
                We pride ourselves on our commitment to excellence in delivery. From meticulous planning to flawless execution, we prioritize precision and passion in every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h1>Our Team</h1>
        <div className="team-members-container">
          <animated.div className="team-members" style={props}>
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <div className="avatar" style={{ backgroundImage: `url(${member.image})` }}></div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </animated.div>
        </div>
      </section>
    </div>
  );
};

export default About;
