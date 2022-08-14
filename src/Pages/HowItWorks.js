import person from '../Images/person.jpeg';
import Navbar from '../Components/Navbar';
import HowtItWorksStyled from '../Styles/HowItWorks.styled';
import LinkButton from '../Components/LinkButton';
import cupcake from '../Images/cupcake.jpeg';
import hbd from '../Images/hbd.jpg';
import Bottom from '../Components/Bottom';
import FooterLinkStyled from '../Styles/FooterLink.styled';

const HowItWorks = () => {
    return (
        <HowtItWorksStyled>
            <Navbar></Navbar>
            <h1 className='header'>How It Works</h1>
            
            <div className='infoBox'>
                <div className='textBox'>
                    <h2>Step 1</h2>
                    <br></br>
                    <h1>Register Your Email Address</h1>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                </div>
                <div className='photoBox'>
                    <img src={cupcake}></img>
                </div>
            </div>

            <div className='infoBox'>
                <div className='textBox'>
                    <h2>Step 2</h2>
                    <br></br>
                    <h1>Take A Quiz</h1>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                </div>
                <div className='photoBox'>
                    <img src={hbd}></img>
                </div>
            </div>

            <div className='infoBox'>
                <div className='textBox'>
                    <h2>Step 3</h2>
                    <br></br>
                    <h1>Get Your Personalized Connections</h1>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                </div>
                <div className='photoBox'>
                    <img src={cupcake}></img>
                </div>
            </div>

            <div className='infoBox'>
                <div className='textBox'>
                    <h2>Step 4</h2>
                    <br></br>
                    <h1>Choose Your NGO</h1>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                    <div className='linkButton'>
                    <FooterLinkStyled to='/register/video'>
                        <LinkButton text="Get Started">
                        </LinkButton>
                    </FooterLinkStyled>
                    </div>
                </div>
                <div className='photoBox'>
                    <img src={hbd}></img>
                </div>
            </div>

            <Bottom></Bottom>
        </HowtItWorksStyled>
    );
}
 
export default HowItWorks;