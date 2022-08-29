import styles from '../Styles/HomePage.style.css'
import instagramLogo from '../Images/instagramLogo.svg';
import { Link } from 'react-router-dom';
import FooterLinkStyled from '../Styles/FooterLink.styled';

function Footer() {
    return (
    <div className="footer">
        <div className='footerLinks'>
            {/* NEED TO ADD IN PROPER LINKS */}
            <FooterLinkStyled to='/FAQs'>FAQs</FooterLinkStyled>
            <FooterLinkStyled to='/contactus'>Contact Info</FooterLinkStyled>
            {/* <FooterLinkStyled to='/testimonials'>Testimonials</FooterLinkStyled> */}
            <FooterLinkStyled to='/about'>About Us</FooterLinkStyled>
            <FooterLinkStyled to='/howitworks'>How It Works</FooterLinkStyled>
            <FooterLinkStyled to='/register/video'>Get Started</FooterLinkStyled>
            <FooterLinkStyled to='/partners'>NGO Partners</FooterLinkStyled>
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