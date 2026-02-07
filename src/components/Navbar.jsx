import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import './Navbar.css';

import logo from '../assets/logo-full.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { openBookingModal } = useBooking();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    <img src={logo} alt="The Mane Space" className="logo-image" />
                </Link>

                {/* Desktop Menu */}
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/" className="nav-item" onClick={closeMenu}>Home</Link>
                    <Link to="/team" className="nav-item" onClick={closeMenu}>Team</Link>
                    <Link to="/bookings" className="nav-item" onClick={closeMenu}>Bookings</Link>
                    <Link to="/gallery" className="nav-item" onClick={closeMenu}>Gallery</Link>
                    <button
                        className="nav-btn btn btn-primary"
                        onClick={() => {
                            closeMenu();
                            openBookingModal();
                        }}
                    >
                        Book Now
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="mobile-icon" onClick={toggleMenu}>
                    {isOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
