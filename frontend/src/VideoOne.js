import NextButton from './NextButton';

const VideoOne = () => {
    return (  
        <div className="form">
            <h3>Glad to have you on board!</h3>
            <p>Watch this video for a quick overview of what we do:</p>
            <div className="video">
                <iframe
                    src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    title="video"
                />
            </div>
            <div className="nextButton">
                <NextButton dest="/register/video"></NextButton>
            </div>
        </div>
    );
}
 
export default VideoOne;