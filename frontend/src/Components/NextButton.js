import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NextButtonStyled from '../Styles/NextButton.styled';

const NextButton = ({handleClick}) => {

    return (  
        <NextButtonStyled>
            <div className="nextButton">
                <button onClick={handleClick}>Next</button>
            </div>
        </NextButtonStyled>
    );
}
 
export default NextButton;