import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const NextButton = ({handleClick}) => {

    return (  
        <div className="nextButton">
            <button onClick={handleClick}>Next</button>
        </div>
    );
}
 
export default NextButton;