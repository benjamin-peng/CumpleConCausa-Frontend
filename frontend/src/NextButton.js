import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const NextButton = ({dest}) => {

    return (  
        <div className="nextButton">
            <a href={dest}>
                <button>Next</button>
            </a>
        </div>
    );
}
 
export default NextButton;