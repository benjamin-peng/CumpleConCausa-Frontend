import NextButton from '../Components/NextButton';
import { useNavigate } from "react-router-dom";
import Navbar from '../Components/Navbar';

const VideoOne = () => {
    const navigate = useNavigate();
    return (  
        <div className="form">
            <Navbar></Navbar>
            <h3>Glad to have you on board!</h3>
            <p>Watch this video for a quick overview of what we do:</p>
            <div className="video">
                <iframe
                    src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                />
            </div>
            <div className="nextButton">
                <NextButton handleClick={() => {
                    navigate('/register/form');
                }}></NextButton>
            </div>
        </div>
    );
}
 
export default VideoOne;