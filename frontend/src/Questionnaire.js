import NextButton from './NextButton';
import { useState, useEffect } from 'react';

const Questionnaire = ({setCharity, valid}) => {

    const [priority, setPriority] = useState('');
    const [error, setError] = useState('');


    const handleClick = () => {
        if (!valid) {
            setError('* Please fill out the user data form first');
        }
    };

    const matchCharity = () => { //TODO:: implement algorithm to math with charity
        return 'placeholder';
    };

    return (  
        <div className="questionnaire">
            <h3>Time to find an NGO partner! Fill out the form below to be matched.</h3>
            <p className="questionText">If you had to choose how to spend your Saturday, what would you choose?</p>
            <div className="options">
                <form>
                    <input type="radio" name="findNGO" onClick={() => setPriority('volunteering')} required />
                    <label>I would go to Arraiján to reforest, getting my hands dirty with mud, planting seedlings. </label>
                    <br />
                    <input type="radio" name="findNGO" onClick={() => setPriority('involved')} required />
                    <label>I would visit a girls' home in the city, play with them and help them comb their hair. </label>
                    <br />
                    <input type="radio" name="findNGO" onClick={() => setPriority('uninvolved')} required />
                    <label>I would party or go to the mall, but I would be willing to donate to a cause.</label>
                </form>
            </div>
            <p className="questionText">Rank the following fields by interest, with 1 being greatest and 10 being least:</p>
            <div className="question" id="q1">
                <label htmlFor="rank">Education</label>
                <select name="rank" id="rank">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div className="question" id="q2">
                <label htmlFor="rank">Health</label>
                <select name="rank" id="rank">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div className="question" id="q3">
                <label htmlFor="rank">Environment and Sustainability</label>
                <select name="rank" id="rank">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div className="question" id="q4">
                <label htmlFor="rank">Hunger and Nutrition</label>
                <select name="rank" id="rank">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div className="text-danger">{error}</div>
            <NextButton handleClick={handleClick}></NextButton>
        </div>
    );
}
 
export default Questionnaire;