import React from 'react';
import { FaSearch, FaHeart, FaShoppingCart, FaGlobe, FaUser } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className='upperDesign'>
                <div>Lorem ipsum dolor</div>
                <div>Lorem ipsum dolor</div>
                <div>Lorem ipsum dolor</div>
            </div>
            <nav className="navbar">
                <div className="logo navbar">
                    <img src="/assets/logo.png" alt="Logo" className="logo-image" />
                </div>
                <div className="logo-text-container">
                    <h1 className="logo-text">LOGO</h1>
                    <div className="mini-navbar">
                        <a href="#">SHOP</a>
                        <a href="#">SKILL</a>
                        <a href="#">STORIES</a>
                        <a href="#">ABOUT</a>
                        <a href="#">CONTACT US</a>
                    </div>
                </div>
                <div className="navbar-icons">
                    <FaSearch className="icon" /> {/* Search Icon */}
                    <FaHeart className="icon" /> {/* Wishlist Icon */}
                    <FaShoppingCart className="icon" /> {/* Cart Icon */}
                    <div className="dropdown">
                        <FaGlobe className="icon" /> {/* Language Icon */}
                        <div className="dropdown-content">
                            <a href="#">English</a>
                            <a href="#">हिंदी</a>
                            <a href="#">Español</a>
                            {/* Add more languages here */}
                        </div>
                    </div>
                    <FaUser className="icon" /> {/* Profile Icon */}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
