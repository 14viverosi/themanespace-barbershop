import React from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import './Home.css';

const Home = () => {
    const { openBookingModal } = useBooking();

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-content container">
                    <h1 className="hero-title">Your Look,<br /><span>Your Space</span></h1>
                    <p className="hero-subtitle">Premium grooming for every style. Experience the best in service and atmosphere.</p>
                    <button onClick={openBookingModal} className="btn btn-primary hero-btn">Book Appointment</button>
                </div>
            </section>

            {/* About Us */}
            <section className="about-section section-padding">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Who We Are</h2>
                        <div className="section-divider"></div>
                    </div>
                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                At The Mane Space, we believe that a haircut is more than just a service—it's an experience.
                                Located in the heart of the city, we combine old-school barbering techniques with modern style suitable for the contemporary gentleman.
                                Whether you need a classic cut, a hot towel shave, or a beard trim, our expert barbers are here to help you look and feel your best.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="services-section section-padding">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Services</h2>
                        <div className="section-divider"></div>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <h3>Classic Cut</h3>
                            <p className="service-desc">Consultation, wash, cut, and style.</p>
                            <div className="service-price">$40</div>
                        </div>
                        <div className="service-card">
                            <h3>Beard Trim</h3>
                            <p className="service-desc">Shaping, lining, and conditioning.</p>
                            <div className="service-price">$25</div>
                        </div>
                        <div className="service-card">
                            <h3>The Full Service</h3>
                            <p className="service-desc">Haircut + Beard Trim + Hot Towel.</p>
                            <div className="service-price">$60</div>
                        </div>
                        <div className="service-card">
                            <h3>Head Shave</h3>
                            <p className="service-desc">Hot towel and straight razor finish.</p>
                            <div className="service-price">$35</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact / Hours */}
            <section className="contact-section section-padding">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h2>Visit Us</h2>
                            <p>123 Barber Street<br />Cityville, ST 12345</p>
                            <p><strong>Phone:</strong> (555) 123-4567</p>
                            <p><strong>Email:</strong> info@mainspace.com</p>
                        </div>
                        <div className="hours-info">
                            <h2>Opening Hours</h2>
                            <ul className="hours-list">
                                <li><span>Mon - Fri:</span> <span>9:00 AM - 7:00 PM</span></li>
                                <li><span>Saturday:</span> <span>10:00 AM - 5:00 PM</span></li>
                                <li><span>Sunday:</span> <span>Closed</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
