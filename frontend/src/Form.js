import NextButton from './NextButton';
import { useState, useEffect } from 'react';
import validator from 'validator';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';

const Form = () => {
    const [fName, setfName] = useState(''); 
    const [lName, setlName] = useState(''); 
    const [number, setNumber] = useState(''); 
    const [address, setAddress] = useState('');
    const [errors, setErrors] = useState(['']);

    var phoneIsValid = true;

    //useEffect(() => {
        //phoneIsValid = true;
    //});
    
    const handleClick = (e) => {
        validate();
        /*
        if (!validator.isMobilePhone(number)) {
            phoneIsValid = false;
            console.log(phoneIsValid);
        }
        */
    }

    const validate = () => {
        let isValid = true;
        let errors = {};
        console.log(number);
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
            <h3>Glad to have you on board!</h3>
            <p>First, leave us some information to create your file:</p>
            <form>
                <label>First Name</label>
                <input type="text" value={fName} onChange={(e) => {
                    setfName(e.target.value);
                }} required />
                <div className="text-danger">{errors["fName"]}</div>
                <label>Last Name</label>
                <input type="text" value={lName} onChange={(e) => {
                    setlName(e.target.value);
                }} required />
                <div className="text-danger">{errors["lName"]}</div>
                <label>Phone</label>
                <PhoneInput value={number} onChange={setNumber} required/>
                <div className="text-danger">{errors["number"]}</div>
                <label>Email Address</label>
                <input type="text" value={address} onChange={(e) => {
                    setAddress(e.target.value);
                }} required />
                <div className="text-danger">{errors["address"]}</div>
            </form>
            <NextButton handleClick={handleClick}></NextButton>
        </div>
    );
}
 
export default Form;