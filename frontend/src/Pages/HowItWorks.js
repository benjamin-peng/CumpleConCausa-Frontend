import person from '../Images/person.jpeg';
import Navbar from '../Components/Navbar';
import AboutStyled from '../Styles/About.styled';
import LinkButton from '../Components/LinkButton';
import cupcake from '../Images/cupcake.jpeg';
import hbd from '../Images/hbd.jpg';
import Bottom from '../Components/Bottom';

const HowItWorks = () => {
    return (
        <AboutStyled>
            <Navbar></Navbar>
            <h1>How It Works</h1>
            <div className="subinfo">
                <div className="horizontal">
                    <div className="vertical text">
                        <h3 className="caption">Step 1</h3>
                        <h1 className='caption'>Register Your Email Address</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                    </div>
                    <div className="vertical">
                        <img src={cupcake} alt="person" />
                    </div>
                </div>
                <div className="horizontal">
                    <div className="vertical text">
                        <h3 className="caption">Step 2</h3>
                        <h1 className='caption'>Take a Quiz</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. </p>
                    </div>
                    <div className="vertical">
                        <img src={hbd} alt="person" />
                    </div>
                </div>
                <div className="horizontal">
                    <div className="vertical text">
                        <h3 className="caption">Step 3</h3>
                        <h1 className='caption'>Get Your Personalized Connections</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                    </div>
                    <div className="vertical">
                        <img src={cupcake} alt="person" />
                    </div>
                </div>
                <div className="horizontal">
                    <div className="vertical text">
                        <h3 className="caption">Step 4</h3>
                        <h1 className='caption'>Choose Your NGO!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. </p>
                    </div>
                    <div className="vertical">
                        <img src={hbd} alt="person" />
                    </div>
                </div>
                <LinkButton link={window.location.origin+"/register/video"} 
                            text="Get Started">
                        </LinkButton>
            </div>
            <Bottom></Bottom>
        </AboutStyled>
    );
}
 
export default HowItWorks;