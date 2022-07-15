import NextButton from './NextButton';
import { useState, useEffect } from 'react';
import validator from 'validator';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import { useNavigate } from "react-router-dom";

const Form = ({setUserData, setValid}) => {
    const navigate = useNavigate();

    const [fName, setfName] = useState(''); 
    const [lName, setlName] = useState(''); 
    const [number, setNumber] = useState(''); 
    const [address, setAddress] = useState('');
    const [errors, setErrors] = useState(['']);

    const handleClick = () => {
        if(validate()) {
            var userData = {
                firstName: fName,
                lastName: lName,
                email: address,
                phone: number
            };
            setValid(true);
            setUserData(userData);
            navigate('/register/questionnaire');
        }
    }

    const validate = () => {
        let isValid = true;
        let errors = {};
        if (fName == '') {
            errors['fName'] = '* A first name is required';
            isValid = false;
        }
        if (lName == '') {
            errors['lName'] = '* A last name is required';
            isValid = false;
        }
        if (address == '') { //TODO:: implement address verification using package
            errors['address'] = '* An address is required';
            isValid = false;
        }
        else if (!validator.isEmail(address)) {
            errors['address'] ='* Please enter a valid email address';
            isValid = false;
        }
        if (number === undefined) {
            errors['number'] = '* A phone number is required';
            isValid = false;
        }
        else if (!validator.isMobilePhone(number)) {
            errors['number'] ='* Please enter a valid phone number';
            isValid = false;
        }
        setErrors(errors);
        return isValid;
    }

    
    return (  
        <div className="form">
            <h3>Find A Non-Governmental Organization (NGO)</h3>
            <p>To start the NGO search, please enter the following information.</p>
            <form>
                <label>First Name</label>
                <span><input type="text" value={fName} onChange={(e) => {
                    setfName(e.target.value);
                }} required /></span>
                <div className="text-danger">{errors["fName"]}</div>
                <label>Last Name</label>
                <span><input type="text" value={lName} onChange={(e) => {
                    setlName(e.target.value);
                }} required /></span>
                <div className="text-danger">{errors["lName"]}</div>
                <label>Phone Number</label>
                <span><PhoneInput value={number} onChange={setNumber} required/></span>
                <div className="text-danger">{errors["number"]}</div>
                <label>Email Address</label>
               <span> <input type="text" value={address} onChange={(e) => {
                    setAddress(e.target.value);
                }} required /></span>
                <div className="text-danger">{errors["address"]}</div>
            </form>
            <NextButton handleClick={handleClick}></NextButton>
        </div>
    );
}
 
export default Form;