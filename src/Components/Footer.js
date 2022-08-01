import styles from '../Styles/HomePage.style.css'
import instagramLogo from '../Images/instagramLogo.svg';
import { Link } from 'react-router-dom';

function Footer() {
    return (
    <div className="footer">
        <div className='footerLinks'>
            {/* NEED TO ADD IN PROPER LINKS */}
            <Link to='/FAQs'>FAQs</Link>
            <Link to='/contactus'>Contact Info</Link>
            <Link to='/testimonials'>Testimonials</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/howitworks'>How It Works</Link>
            <Link to='/register/video'>Get Started</Link>
            <Link to='/partners'>NGO Partners</Link>
            {/*
            <a className='footerLink' href="/FAQs">FAQS</a>
            <a className='footerLink' href="/contactus">Contact Info</a>
            <a className='footerLink' href="/testimonials">Testimonials</a>
            <a className='footerLink' href="/about">About Us</a>
            <a className='footerLink' href="/howitworks">How It Works</a>
            <a className='footerLink' href="/register/video">Get Started</a>
            <a className='footerLink' href="/partners">NGO Partners</a>
            */}
        </div>
        <div className='socialBox'>
            <a href="https://instagram.com/cumpleconcausa" target="_blank">
                <img className='socialIcon' src={instagramLogo}></img>
            </a>
        </div>
        
    </div>
      );
}

export default Footer;