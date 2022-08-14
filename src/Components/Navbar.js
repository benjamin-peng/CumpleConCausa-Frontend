import NavbarStyle from '../Styles/Navbar.styled.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <NavbarStyle>
            <nav className="navbar">
            <h1>Cumple Con Causa</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/register/video">Get Started</Link>
                <Link to="/howitworks">How It Works</Link>
                <Link to="/partners">Our Partners</Link>
            </div>
            </nav>
        </NavbarStyle>
        
    );
}
 
export default Navbar;