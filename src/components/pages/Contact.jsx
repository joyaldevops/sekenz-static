import React from 'react';
import './Contact.css'; // Import your CSS file for styling
// Adjust the path relative to Contact.jsx
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const res = await fetch('https://erikqli5juo5hqajbrajv3vjay0ebdfb.lambda-url.us-west-2.on.aws/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();
            setResponse(data);
            toast.success('Your message has been sent successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            }); // Reset form after successful submission

        } catch (error) {
            setError(error.message);
            toast.error('Failed to send message');
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <>
            <ToastContainer />
            
            <div className="contact-content">

                
        
                <div className="contact-text">
                    <h1>Contact Us</h1>
                    <p>At SekenZ Group, we are committed to offering comprehensive support and guidance for all your needs. Our team comprises experts with diverse skills and extensive experience in various fields, ensuring that you receive the best possible advice and solutions. Whether you have a question about our services, need help with a specific project, or simply want to explore new opportunities, we are here to assist you every step of the way. Your inquiries are important to us, and we strive to provide prompt, accurate, and insightful responses to all your concerns.<br/><br/>

Our dedication to customer satisfaction is reflected in the personalized attention we give to each client. We understand that every project and query is unique, and we tailor our approach to meet your specific requirements. From the initial consultation to the final implementation, we work closely with you to ensure that your goals are achieved efficiently and effectively. Our team is equipped with the latest tools and knowledge to tackle any challenge, and we pride ourselves on delivering high-quality results that exceed your expectations.<br/><br/>

At SekenZ Group, we believe in building long-term relationships with our clients based on trust, transparency, and mutual respect. We are more than just a service provider; we are your partners in success. By fostering open communication and collaboration, we aim to create a supportive environment where your ideas can flourish. Don't hesitate to reach out to us with any questions or projects you have in mind. Together, we can turn your vision into reality and achieve great things.</p>
                </div>
                <div className="contact-image">
                    
                </div>
            </div>
            <div className="contact-container">
                <h1>Get in Touch with Us</h1>
                <p>Our team is always ready to help. Give us a call, drop us an email, or just fill in the form below to instantly schedule a call with us.</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Name"
                            className="contact-input"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="E-mail"
                            className="contact-input"
                            title="Please enter a valid email address (e.g., example@example.com)"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                            className="contact-input"
                            pattern="[0-9]{10}"
                            title="Please enter a valid 10-digit phone number"
                            required
                        />
                    </div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Message"
                        className="contact-textarea"
                        required
                    ></textarea>
                    <button type="submit" className="contact-button">
                        Contact Us
                    </button>

                    {/* Display success or error message */}
                    {response && <p className="success-message">{response.message}</p>}
                    {error && <p className="error-message">Failed to send message: {error}</p>}
                </form>
            </div>
        </>
    );
};

export default Contact;
