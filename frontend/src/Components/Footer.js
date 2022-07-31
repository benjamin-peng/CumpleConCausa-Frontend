import styles from '../Styles/HomePage.style.css'
import instagramLogo from '../Images/instagramLogo.svg';

function Footer() {
    return (
    <div className="footer">
        <div className='footerLinks'>
            {/* NEED TO ADD IN PROPER LINKS */}
            <a className='footerLink' href="/FAQs">FAQS</a>
            <a className='footerLink' href="/contactus">Contact Info</a>
            <a className='footerLink' href="/testimonials">Testimonials</a>
            <a className='footerLink' href="/about">About Us</a>
            <a className='footerLink' href="/howitworks">How It Works</a>
            <a className='footerLink' href="/register/video">Get Started</a>
            <a className='footerLink' href="/partners">NGO Partners</a>
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