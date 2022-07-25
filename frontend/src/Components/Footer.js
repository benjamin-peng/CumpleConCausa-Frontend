import styles from '../Styles/HomePage.style.css'
import instagramLogo from '../Images/instagramLogo.svg';

function Footer() {
    return (
    <div className="footer">
        <div className='footerLinks'>
            {/* NEED TO ADD IN PROPER LINKS */}
            <a className='footerLink' href="/about">FAQS</a>
            <a className='footerLink' href="/about">Contact Info</a>
            <a className='footerLink' href="/about">Testimonials</a>
            <a className='footerLink' href="/about">About Us</a>
            <a className='footerLink' href="/about">How It Works</a>
            <a className='footerLink' href="/about">Get Started</a>
            <a className='footerLink' href="/about">NGO Partners</a>
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