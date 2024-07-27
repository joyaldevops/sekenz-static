import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import homeGif from "../video/home gif.mp4";
import {
  FaUsers,
  FaCogs,
  FaHeadset,
  FaShieldAlt,
  FaRegClock,
  FaSyncAlt,
} from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import weblogo from '../Assets/webdevops.jpg';
import moblogo from '../Assets/mobapp.jpg';
import softlogo from '../Assets/software.jpg';
import digitallogo from '../Assets/digital market.jpg';
import ecommercelogo from '../Assets/ecommerce.jpg';
import uiuxlogo from '../Assets/uiux.jpg';
import studylogo from '../Assets/study.jpg';
import abroadlogo from '../Assets/abroad.jpg';
import Homepage from "./pages/Homepage";

const services = [
  {
    title: "Web Development",
    description:
      "Build dynamic, responsive websites that captivate and convert.",
    logo: weblogo,
  },
  {
    title: "Mobile App Development",
    description:
      "Transform your ideas into powerful mobile applications.",
    logo: moblogo,
  },
  {
    title: "Software Development",
    description:
      "Custom software solutions designed to optimize your operations.",
    logo: softlogo,
  },
  {
    title: "Digital Marketing",
    description:
     "Maximize your online presence with targeted digital marketing strategies.",
    logo: digitallogo,
  },
  {
    title: "E-Commerce Development",
    description:
       "Create seamless shopping experiences with our e-commerce solutions."
  },
  {
    title: "UI/UX Designing",
    description:
     "Design intuitive interfaces that enhance user experience.",
    logo: uiuxlogo,
  },
  {
    title: "Study Abroad",
    description:
      "Pursue your dreams of studying abroad with our expert guidance.",
    logo: studylogo,
  },
  {
    title: "Abroad Recruitment",
    description:
      "Connect with global opportunities through our recruitment services.",
    logo: abroadlogo,
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const navigateToServices = () => {
    navigate('/services');
  };

  return (
    <div>
      <ToastContainer />
      <section className="home-section">
        <div className="home-content">
          <h1>
            Web & Mobile App <br />
            Development
            <br /> Solutions
          </h1>
          <p>
          We are a team of young, creative dreamers passionate about crafting content that provokes thought, makes sense, and inspires. With a blend of technological expertise, digital literacy, and imaginative ideas, we bring a fresh perspective to everything we create.
          </p>
          <button className="join-btn" onClick={navigateToServices}>Join us</button>
        </div>
        <div className="home-gif">
          <video width="100%" height="auto" autoPlay loop muted>
            <source src={homeGif} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="services-section">
        <div className="services-header">
          <h4>Our Services</h4>
          <h1>See what we can do for your business</h1>
        </div>
        <div className="services-content">
          <p>
            We offer enterprise software services and web &<br /> mobile app
            development with cutting-edge<br /> technology.
          </p>
          <button className="view-services-button">
            <Link to="/services" className="view-services-link">
              View All Services <span className="arrow">→</span>
            </Link>
          </button>
        </div>
      </section>

      <div className="home">
        <div className="services-card">
          {services[currentIndex].logo && (
            <img className="service-logo" src={services[currentIndex].logo} alt="Service Logo" />
          )}
          <h3>{services[currentIndex].title}</h3>
          <p>{services[currentIndex].description}</p>
        </div>
      </div>

      <div className="container-ethics">
        <h2 className="ethics-h1">Ethics</h2>
        <h3 className="header">What makes us stand out</h3>
        <hr className="blue-line" />
        <p className="sub-header">
          As a team of passionate people, we are driven by <br /> one relentless
          pursuit - to craft innovative solutions<br /> and deliver unparalleled
          results.
        </p>
        <button className="button">View All</button>
        <div className="card-container">
          <div className="card">
            <div className="icon-container">
              <FaUsers />
            </div>
            <h3 className="card-title">Client Centric Development</h3>
            <p className="card-text">
              With our turn-key solutions, we deliver customized applications
              that are business-ready based on the client's requirements.
            </p>
          </div>
          <div className="card">
            <div className="icon-container">
              <FaSyncAlt />
            </div>
            <h3 className="card-title">Agile Model</h3>
            <p className="card-text">
              We follow the Agile development process to ensure the best quality
              and utmost customer satisfaction.
            </p>
          </div>
          <div className="card">
            <div className="icon-container">
              <FaCogs />
            </div>
            <h3 className="card-title">Dedicated Development Team</h3>
            <p className="card-text">
              To ensure cost-effectiveness and instant support for our premium
              clients, we assign a dedicated team to each project.
            </p>
          </div>
          <div className="card">
            <div className="icon-container">
              <FaHeadset />
            </div>
            <h3 className="card-title">24*7 Support</h3>
            <p className="card-text">
              Every project gets a dedicated business executive on support
              during working days and a Project manager on support during the
              delivery phase.
            </p>
          </div>
          <div className="card">
            <div className="icon-container">
              <FaShieldAlt />
            </div>
            <h3 className="card-title">Backups & Network Security</h3>
            <p className="card-text">
              In our closed network with Secure Shell encryption, we protect our
              deployment server and regularly back up the complete source code
              of the project.
            </p>
          </div>
          <div className="card">
            <div className="icon-container">
              <FaRegClock />
            </div>
            <h3 className="card-title">Quality Assurance</h3>
            <p className="card-text">
              To maintain robust infrastructure, every deployment and delivery
              is passed through our Quality Assurance Engineers.
            </p>
          </div>
        </div>
      </div>

      <div className="contact-left">
        <h1>Contact Us</h1>
        <p className="contact-p">
          We would love to make<br /> your brand and business the<br />
          best as well as the best <br />brknown.If you've got a <br />
          requirement you’d like to discuss<br /> about digital marketing,
          branding or <br />any of the services mentioned <br />or if you
          simply want to <br />know more about how we<br /> work, get in
          touch.
        </p>
      </div>

      <Homepage />
    </div>
  );
};

export default Home;
