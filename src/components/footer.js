import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';




function Footer() {
    return (
        <div className = 'footer-container'>
           <Link to = '/forms' className = 'footer-wrapper'>Contact Us</Link>
        </div>
    )
}

export default Footer
