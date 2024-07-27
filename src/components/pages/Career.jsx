import React from 'react';
import './Career.css'; // Import your CSS file for styling
import CareerImage from '../../Assets/CareerImage.jpg'; // Adjust the path relative to Career.jsx
import career1 from '../../Assets/career11.jpg';
import career2 from '../../Assets/career2.jpg'; // Corrected import path
import career3 from '../../Assets/career3.jpg'; 
import careernew from '../../Assets/careernew.jpg'; // Corrected import path

const Career = () => {
    return (
        <>
            <div className="career-content">
                <div className="career-text">
                    <h2>A Career You Love</h2>
                    <p>We're here to help! Whether you have a question, need support, or want to discuss a project, feel free to reach out. Our team at SekenZ Group is dedicated to providing prompt and professional assistance.</p>
                    <div className="career-new">
                        <img src={careernew} alt="Career New" />
                        <h3>We are looking for:</h3>
                        <div className="job-opening">
                            <h4>Full Stack Developer</h4>
                            <p>Responsibilities:</p>
                            <ul>
                                <li>Work with product managers and design team to ideate software solutions</li>
                                <li>Design client-side and server-side architecture</li>
                                <li>Build the front-end of applications with appealing visual design</li>
                                <li>Develop and manage well-functioning databases and applications</li>
                                <li>Write effective APIs</li>
                                <li>Troubleshoot and debug existing software</li>
                                <li>Write technical documentation</li>
                              
                            </ul>
                            <p>Requirements:</p>
                            <ul>
                                <li>Minimum 3 years of proven experience as a Full Stack Developer or similar role</li>
                            </ul>
                        </div>
                        <div className="job-opening">
                            <h4>Operations Manager</h4>
                            <p>Responsibilities:</p>
                            <ul>
                                <li>Budget management</li>
                                <li>Design policies</li>
                                <li>Staff recruitment and training</li>
                                <li>Support HR initiatives</li>
                                <li>Boost employee productivity</li>
                                <li>Enhance customer service quality and satisfaction</li>
                                <li>Ensure legal protocols and business compliance</li>
                                <li>Quality control</li>
                                <li>Formulate strategic and operational objectives</li>
                            </ul>
                        </div>
                        <div className="job-opening">
                            <h4>Video Editor</h4>
                            <p>Responsibilities:</p>
                            <ul>
                                <li>Video editing</li>
                                <li>Color correction</li>
                                <li>Sound effect sourcing and editing</li>
                                <li>Create rough and final cuts</li>
                                <li>Digital video production</li>
                                <li>Motion graphics animation</li>
                                <li>Audio level optimization</li>
                                <li>Client communication</li>
                                <li>Computer software troubleshooting</li>
                            </ul>
                        </div>
                        <div className="job-opening">
                            <h4>Telecaller</h4>
                            <p>Responsibilities:</p>
                            <ul>
                                <li>Understanding customer needs</li>
                                <li>Maintaining accurate records</li>
                                <li>Make outbound calls to potential customers</li>
                                <li>Resolving customer complaints and concerns</li>
                                <li>Explaining company services and products</li>
                                <li>Product knowledge</li>
                                <li>Handling inbound and outbound calls</li>
                                <li>Maintain customer databases</li>
                                <li>Active listening</li>
                            </ul>
                        </div>
                        <p>Send your CVs to this number:</p>
                        <button className="send-cv-button" onClick={() => window.location.href = 'https://wa.me/919562966066'}>+91 95629 66066</button>
                    </div>
                </div>
                <div className="career-image">
                    <img src={CareerImage} alt="Career" />
                </div>
            </div>

            <div className="why-work-with-us">
                <h2>Why work with us</h2>
                <p>Working with the right people makes all the difference! Be a part of our Thought Leaders.</p>
                <div className="why-work-cards">
                    <div className="why-work-card">
                        <img src={career1} alt="Startup for your career" />
                        <h3>Startup for your career</h3>
                        <p>We are a self-funded profitable start-up registered under the start-up India program. At SekenZ Group, you get to work in a start-up with the stability of working in an MNC.</p>
                    </div>
                    <div className="why-work-card">
                        <img src={career2} alt="Learning" />
                        <h3>Learning</h3>
                        <p>We strive for excellence and push each other to grow daily. Learning new things and implementing them creatively is something that happens daily at SekenZ Group.</p>
                    </div>
                    <div className="why-work-card">
                         <img src={career3} alt="Professional growth" /> 
                        <h3>Professional growth</h3>
                        <p>We are growing at a fast pace. If you want to be part of something creative, exciting, challenging, and fun, SekenZ Group is the answer.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Career;
