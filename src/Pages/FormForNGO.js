import NextButton from '../Components/NextButton';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Bottom from '../Components/Bottom';
import QuestionnaireStyled from '../Styles/Questionnaire.styled';
import FormForNGOStyled from '../Styles/FormForNGO.styled';

const FormForNGO = ({setngoData}) => {
    const navigate = useNavigate();
    const [priority, setPriority] = useState('');
    const [error, setError] = useState('');
    const [errors, setErrors] = useState(['']);

    const [ngoName, setngoName] = useState(''); 
    const [description, setDescription] = useState(''); 
    const [location, setLocation] = useState(''); 
    const [beneficiary, setBeneficiary] = useState(''); 

    const validate = () => {
        let isValid = true;
        let errors = {};
        if (ngoName == '') {
            errors['ngoName'] = '* An NGO name is required';
            isValid = false;
        }
        if (description == '') {
            errors['description'] = '* An answer is required';
            isValid = false;
        }
        if (location == '') {
            errors['location'] = '* An answer is required';
            isValid = false;
        }
        if (beneficiary == '') {
            errors['beneficiary'] = '* An answer is required';
            isValid = false;
        }
        if (checkedState[0].length == 0) {
            errors['q1'] = '* An answer is required';
            isValid = false;
        }
        if (checkedState[1].length == 0) {
            errors['q2'] = '* An answer is required';
            isValid = false;
        }
        if (!states[2]) {
            errors['q3'] = '* An answer is required';
            isValid = false;
        }
        if (!states[3]) {
            errors['q4'] = '* An answer is required';
            isValid = false;
        }
        if (!states[4]) {
            errors['q5'] = '* An answer is required';
            isValid = false;
        }
        setErrors(errors);
        return isValid;
    }

    const handleClick = () => {
        if(validate()) {
            var ngoData = {
                ngoName: ngoName,
                description: description,
                location: location,
                beneficiary: beneficiary,
                scores: checkedState
            };
            setError('');
            setngoData(ngoData);
            navigate('/formforngo/endpage');
        }
    };

    const [states, setStates] = useState([false, false, false, false, false]);

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
        var tmp = states;
        if (!tmp[question]){
            tmp[question] = !states[question];
        }
        setStates(tmp);
        const updatedCheckedState = (structuredClone(checkedState));
        updatedCheckedState[question] = [position];
        setCheckedState(updatedCheckedState);
    };

    return (  
        <QuestionnaireStyled>
            <Navbar></Navbar>
            <div className="questionnaire">
                <h3>Survey for Non-governmental Organizations</h3>
                <FormForNGOStyled>
                    <form>
                    <p className="questionText">Non-governmental Organization (NGO) Name:</p>
                    <input type="text" value={ngoName} onChange={(e) => {
                        setngoName(e.target.value);
                    }} required />
                    <div className="text-danger">{errors["ngoName"]}</div>
                    <p className="questionText">Please describe your NGO in 50-100 words:</p>
                    <input type="text" value={description} onChange={(e) => {
                        setDescription(e.target.value);
                    }} required />
                    <div className="text-danger">{errors["description"]}</div>
                    <p className="questionText">Where is your NGO physically located? Type '--' if not applicable.</p>
                    <input type="text" value={location} onChange={(e) => {
                        setLocation(e.target.value);
                    }} required />
                    <div className="text-danger">{errors["location"]}</div>
                    <p className="questionText">Please mention the beneficiary (kids, teens, adults etc.):</p>
                    <input type="text" value={beneficiary} onChange={(e) => {
                        setBeneficiary(e.target.value);
                    }} required />
                    <div className="text-danger">{errors["beneficiary"]}</div>
                    </form>
                </FormForNGOStyled>
                <p className="questionText">Please select the sustainable developmental goals your NGO focuses on:</p>
                <div className="text-danger">{errors["q1"]}</div>
                <div className="options">
                    <form>
                        <input type="checkbox" name="ngo-type" onClick={() => handleOnChangeCheck(0, 0)} required />
                        <label>Health, Hunger, Basic Well-being</label>
                        <br />
                        <input type="checkbox" name="ngo-type" onClick={() => handleOnChangeCheck(0, 1)} required />
                        <label>Environment</label>
                        <br />
                        <input type="checkbox" name="ngo-type" onClick={() => handleOnChangeCheck(0, 2)} required />
                        <label>Education</label>
                        <br />
                        <input type="checkbox" name="ngo-type" onClick={() => handleOnChangeCheck(0, 3)} required />
                        <label>Equity</label>
                        <br />
                        <input type="checkbox" name="ngo-type" onClick={() => handleOnChangeCheck(0, 4)} required />
                        <label>Sustainability</label>
                        <br />
                        <input type="checkbox" name="ngo-type" onClick={() => handleOnChangeCheck(0, 5)} required />
                        <label>Labor Improvement</label>
                        <br />
                        <input type="checkbox" name="ngo-type" onClick={() => handleOnChangeCheck(0, 6)} required />
                        <label>Societal Peace</label>
                        <br />
                        <input type="checkbox" name="ngo-type" onClick={() => handleOnChangeCheck(0, 7)} required />
                        <label>Animal Care</label>
                        <br />
                        <input type="checkbox" name="ngo-type" onClick={() => handleOnChangeCheck(0, 8)} required />
                        <label>Other</label>
                    </form>
                </div>
                <p className="questionText">What type of activities do your NGO involve in?</p>
                <div className="options">
                <div className="text-danger">{errors["q2"]}</div>
                    <form>
                        <input type="checkbox" name="ngo-activity" onClick={() => handleOnChangeCheck(1, 0)} required />
                        <label>Volunteering</label>
                        <br />
                        <input type="checkbox" name="ngo-activity" onClick={() => handleOnChangeCheck(1, 1)} required />
                        <label>Fundraising</label>
                        <br />
                        <input type="checkbox" name="ngo-activity" onClick={() => handleOnChangeCheck(1, 2)} required />
                        <label>Donation</label>
                        <br />
                        <input type="checkbox" name="ngo-activity" onClick={() => handleOnChangeCheck(1, 3)} required />
                        <label>Awareness</label>
                    </form>
                </div>
                <p className="questionText">Are the activities remote or in-person?</p>
                <div className="text-danger">{errors["q3"]}</div>
                <div className="options">
                    <form>
                        <input type="radio" name="location" onClick={() => handleOnChange(2, 0)} required />
                        <label>Virtually</label>
                        <br />
                        <input type="radio" name="location" onClick={() => handleOnChange(2, 1)} required />
                        <label>Local In-person Event</label>
                        <br />
                        <input type="radio" name="location" onClick={() => handleOnChange(2, 2)} required />
                        <label>Doesn't Matter</label>
                    </form>
                </div>
                <p className="questionText">We are an NGO that is:</p>
                <div className="text-danger">{errors["q4"]}</div>
                <div className="options">
                    <form>
                        <input type="radio" name="ngo-spread" onClick={() => handleOnChange(3, 0)} required />
                        <label>International</label>
                        <br />
                        <input type="radio" name="ngo-spread" onClick={() => handleOnChange(3, 1)} required />
                        <label>National</label>
                        <br />
                        <input type="radio" name="ngo-spread" onClick={() => handleOnChange(3, 2)} required />
                        <label>Community-based</label>
                        <br />
                        <input type="radio" name="ngo-spread" onClick={() => handleOnChange(3, 3)} required />
                        <label>City-wide</label>
                    </form>
                </div>
                <p className="questionText">What is the size of your NGO?</p>
                <div className="text-danger">{errors["q5"]}</div>
                <div className="options">
                    <form>
                        <input type="radio" name="ngo-spread" onClick={() => handleOnChange(4, 0)} required />
                        <label>1 to 10 people</label>
                        <br />
                        <input type="radio" name="ngo-spread" onClick={() => handleOnChange(4, 1)} required />
                        <label>11-50 people</label>
                        <br />
                        <input type="radio" name="ngo-spread" onClick={() => handleOnChange(4, 2)} required />
                        <label>51+ people</label>
                    </form>
                </div>
                
                <div className="text-danger">{error}</div>
                <NextButton handleClick={handleClick}></NextButton> 
            </div>
            <Bottom></Bottom>
        </QuestionnaireStyled>
    );
}

export default FormForNGO;