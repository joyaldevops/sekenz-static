import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Homepage = () => {
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
            <ToastContainer />
        </div>
    );
}

export default Homepage;
