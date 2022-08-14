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
                <Link to="/register/video">Find My NGO</Link>
            </div>
            </nav>
        </NavbarStyle>
        
    );
}
 
export default Navbar;