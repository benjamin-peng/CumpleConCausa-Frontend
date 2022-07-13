import NavbarStyle from '../Styles/Navbar.styled.js';

const Navbar = () => {
    return (
        <NavbarStyle>
            <nav className="navbar">
            <h1>Cumple Con Causa</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/register/video">Get Started</a>
            </div>
            </nav>
        </NavbarStyle>
        
    );
}
 
export default Navbar;