import NextButton from './NextButton';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Questionnaire = ({setCharity, valid, postUserData}) => {
    const navigate = useNavigate();
    const [priority, setPriority] = useState('');
    const [error, setError] = useState('');


    const handleClick = () => {
        if (!valid) {
            setError('* Please fill out the user data form first');
        } else {
            setError('');
            setCharity(matchCharity());
            postUserData();
            navigate('/register/done');
        }
    };

    const matchCharity = () => { //TODO:: implement algorithm to math with charity
        return 'placeholder';
    };

    return (  
        <div className="questionnaire">
            <h3>Help us find an NGO that you might be interested to work with by taking a small quiz. It won’t take longer than 2 minutes. </h3>
            <p className="questionText">What interests you the most from the following list?</p>
            <div className="options">
                <form>
                    <input type="checkbox" name="findNGO" onClick={() => setPriority('volunteering')} required />
                    <label>Healthcare</label>
                    <br />
                    <input type="checkbox" name="findNGO" onClick={() => setPriority('involved')} required />
                    <label>Education</label>
                    <br />
                    <input type="checkbox" name="findNGO" onClick={() => setPriority('uninvolved')} required />
                    <label>Helping Children</label>
                    <br />
                    <input type="checkbox" name="findNGO" onClick={() => setPriority('uninvolved')} required />
                    <label>Disaster-relief</label>
                    <br />
                    <input type="checkbox" name="findNGO" onClick={() => setPriority('uninvolved')} required />
                    <label>Environment</label>
                    <br />
                    <input type="checkbox" name="findNGO" onClick={() => setPriority('uninvolved')} required />
                    <label>Other</label>
                </form>
            </div>
            <p className="questionText">What type of activity do you want to be involved in?</p>
            <div className="options">
                <form>
                    <input type="radio" name="findNGO" onClick={() => setPriority('volunteering')} required />
                    <label>Fundraising</label>
                    <br />
                    <input type="radio" name="findNGO" onClick={() => setPriority('involved')} required />
                    <label>Empowerment</label>
                    <br />
                    <input type="radio" name="findNGO" onClick={() => setPriority('uninvolved')} required />
                    <label>Charitable</label>
                    <br />
                    <input type="radio" name="findNGO" onClick={() => setPriority('uninvolved')} required />
                    <label>Service-oriented</label>
                    <br />
                    <input type="radio" name="findNGO" onClick={() => setPriority('uninvolved')} required />
                    <label>Other</label>
                </form>
            </div>
            <br /><br /><h3>Now that we understand your interests, we would like to know more about you.</h3>
            <p className="questionText">How old are you?</p>
            <div className="options">
                <form>
                    <input type="radio" name="findNGO" onClick={() => setPriority('volunteering')} required />
                    <label>Under 13</label>
                    <br />
                    <input type="radio" name="findNGO" onClick={() => setPriority('involved')} required />
                    <label>13-18</label>
                    <br />
                    <input type="radio" name="findNGO" onClick={() => setPriority('uninvolved')} required />
                    <label>Over 18</label>
                    <br />
                    <input type="radio" name="findNGO" onClick={() => setPriority('uninvolved')} required />
                    <label>Not Applicable</label>
                </form>
            </div>
            <p className="questionText">How do you want to celebrate your Cumple Con Causa?</p>
            <div className="options">
                <form>
                    <input type="radio" name="findNGO" onClick={() => setPriority('volunteering')} required />
                    <label>Virtually</label>
                    <br />
                    <input type="radio" name="findNGO" onClick={() => setPriority('involved')} required />
                    <label>Local In-person Event</label>
                    <br />
                </form>
            </div>
            <p className="questionText">I want to work for an...</p>
            <div className="options">
                <form>
                    <input type="radio" name="findNGO" onClick={() => setPriority('volunteering')} required />
                    <label>International NGO</label>
                    <br />
                    <input type="radio" name="findNGO" onClick={() => setPriority('involved')} required />
                    <label>National NGO</label>
                    <br />
                    <input type="radio" name="findNGO" onClick={() => setPriority('uninvolved')} required />
                    <label>Community-based NGO</label>
                    <br />
                    <input type="radio" name="findNGO" onClick={() => setPriority('uninvolved')} required />
                    <label>City-wide NGO</label>
                </form>
            </div>
            
            <div className="text-danger">{error}</div>
            <NextButton handleClick={handleClick}></NextButton>
        </div>
    );
}
 
export default Questionnaire;