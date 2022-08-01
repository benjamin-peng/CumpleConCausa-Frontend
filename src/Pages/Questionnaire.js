import NextButton from '../Components/NextButton';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Bottom from '../Components/Bottom';
import QuestionnaireStyled from '../Styles/Questionnaire.styled';

const Questionnaire = ({setCollection, valid, postUserData}) => {
    const navigate = useNavigate();
    const [priority, setPriority] = useState('');
    const [error, setError] = useState('');

    const handleClick = () => {
        if (!valid) {
            setError('* Please fill out the user data form first');
        } else {
            setError('');
            setCollection(matchCharity());
            navigate('/register/done');
        }
    };

    const [checkedState, setCheckedState] = useState(new Array(5).fill([]));

    const handleOnChangeCheck = (question, position) => {
        const updatedCheckedState = (structuredClone(checkedState));
        if(updatedCheckedState[question].includes(position)){
            var index = updatedCheckedState[question].indexOf(position)
            updatedCheckedState[question].splice(index, 1);
        }
        else{
            updatedCheckedState[question].push(position);
        }
        setCheckedState(updatedCheckedState);
    };

    const handleOnChange = (question, position) =>{
        const updatedCheckedState = (structuredClone(checkedState));
        updatedCheckedState[question] = [position];
        setCheckedState(updatedCheckedState);
    };

    const matchCharity = () => { //TODO:: implement algorithm to math with charity
        const ngoData = [
            {name: "NGO 1", scores: [[0], [0], [0], [0], [0]], line1: "This is NGO 1.", line2: "Every cent counts.", line3: "Help clean cats."},
            {name: "NGO 2", scores: [[1], [1], [1], [1], [1]], line1: "This is NGO 2.", line2: "Take the dirt road.", line3: "Gates to a better world."},
            {name: "NGO 3", scores: [[0, 1, 2, 3, 4, 5], [0], [0], [0], [0]], line1: "This is NGO 3.", line2: "The world runs on us.", line3: "Beat the aliens."}
        ];
        var ngoComp = [ngoData.length]
        for(var i=0; i<ngoData.length; i++){
            let sum = 0;
            for(var j=0; j<ngoData[i].scores.length; j++){
                for(var k=0; k<ngoData[i].scores[j].length; k++){
                    if(checkedState[j].includes(ngoData[i].scores[j][k])){
                        sum++;
                    }
                }
            }
            ngoComp[i] = {name: ngoData[i].name, similarity: sum, line1: ngoData[i].line1, line2: ngoData[i].line2, line3: ngoData[i].line3};
        }
        return ngoComp;
    };

    return (  
        <QuestionnaireStyled>
            <Navbar></Navbar>
            <div className="questionnaire">
                <h3>Help us find an NGO that you might be interested to work with by taking a small quiz. It won’t take longer than 2 minutes. </h3>
                <p className="questionText">What interests you the most from the following list?</p>
                <div className="options">
                    <form>
                        <input type="checkbox" name="ngo-type" onClick={() => handleOnChangeCheck(0, 0)} required />
                        <label>Healthcare</label>
                        <br />
                        <input type="checkbox" name="ngo-type" onClick={() => handleOnChangeCheck(0, 1)} required />
                        <label>Education</label>
                        <br />
                        <input type="checkbox" name="ngo-type" onClick={() => handleOnChangeCheck(0, 2)} required />
                        <label>Helping Children</label>
                        <br />
                        <input type="checkbox" name="ngo-type" onClick={() => handleOnChangeCheck(0, 3)} required />
                        <label>Disaster-relief</label>
                        <br />
                        <input type="checkbox" name="ngo-type" onClick={() => handleOnChangeCheck(0, 4)} required />
                        <label>Environment</label>
                        <br />
                        <input type="checkbox" name="ngo-type" onClick={() => handleOnChangeCheck(0, 5)} required />
                        <label>Other</label>
                    </form>
                </div>
                <p className="questionText">What type of activity do you want to be involved in?</p>
                <div className="options">
                    <form>
                        <input type="radio" name="ngo-activity" onClick={() => handleOnChange(1, 0)} required />
                        <label>Fundraising</label>
                        <br />
                        <input type="radio" name="ngo-activity" onClick={() => handleOnChange(1, 1)} required />
                        <label>Empowerment</label>
                        <br />
                        <input type="radio" name="ngo-activity" onClick={() => handleOnChange(1, 2)} required />
                        <label>Charitable</label>
                        <br />
                        <input type="radio" name="ngo-activity" onClick={() => handleOnChange(1, 3)} required />
                        <label>Service-oriented</label>
                        <br />
                        <input type="radio" name="ngo-activity" onClick={() => handleOnChange(1, 4)} required />
                        <label>Other</label>
                    </form>
                </div>
                <br /><br /><h3>Now that we understand your interests, we would like to know more about you.</h3>
                <p className="questionText">How old are you?</p>
                <div className="options">
                    <form>
                        <input type="radio" name="age" onClick={() => handleOnChange(2, 0)} required />
                        <label>Under 13</label>
                        <br />
                        <input type="radio" name="age" onClick={() => handleOnChange(2, 1)} required />
                        <label>13-18</label>
                        <br />
                        <input type="radio" name="age" onClick={() => handleOnChange(2, 2)} required />
                        <label>Over 18</label>
                        <br />
                        <input type="radio" name="age" onClick={() => handleOnChange(2, 3)} required />
                        <label>Not Applicable</label>
                    </form>
                </div>
                <p className="questionText">How do you want to celebrate your Cumple Con Causa?</p>
                <div className="options">
                    <form>
                        <input type="radio" name="location" onClick={() => handleOnChange(3, 0)} required />
                        <label>Virtually</label>
                        <br />
                        <input type="radio" name="location" onClick={() => handleOnChange(3, 1)} required />
                        <label>Local In-person Event</label>
                        <br />
                    </form>
                </div>
                <p className="questionText">I want to work for an...</p>
                <div className="options">
                    <form>
                        <input type="radio" name="ngo-spread" onClick={() => handleOnChange(4, 0)} required />
                        <label>International NGO</label>
                        <br />
                        <input type="radio" name="ngo-spread" onClick={() => handleOnChange(4, 1)} required />
                        <label>National NGO</label>
                        <br />
                        <input type="radio" name="ngo-spread" onClick={() => handleOnChange(4, 2)} required />
                        <label>Community-based NGO</label>
                        <br />
                        <input type="radio" name="ngo-spread" onClick={() => handleOnChange(4, 3)} required />
                        <label>City-wide NGO</label>
                    </form>
                </div>
                
                <div className="text-danger">{error}</div>
                <NextButton handleClick={handleClick}></NextButton> 
            </div>
            <Bottom></Bottom>
        </QuestionnaireStyled>
    );
}
 
export var ngoComp;
export default Questionnaire;