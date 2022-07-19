import person from '../Images/person.jpeg';
import Navbar from '../Components/Navbar';
import AboutStyled from '../Styles/About.styled';

const About = () => {
    return (
        <AboutStyled>
            <Navbar></Navbar>
            <div className="horizontal">
                <div className="vertical">
                    <img src={person} alt="person" />
                </div>
                <div className="vertical text">
                    <h2 className="caption">Our Misson</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </AboutStyled>
    );
}
 
export default About;