import { useState } from "react";
import Navbar from "../Components/Navbar";
import BirthdayValidationStyled from "../Styles/BirthdayValidation.styled";
import NextButton from "../Components/NextButton";
import { useNavigate } from "react-router-dom";

function BirthdayValidation() {

const navigate = useNavigate();
const [bday, setBday] = useState("");
const [bdayMonth, setBdayMonth] = useState("");

const handleDayChange = e =>{
    setBday(e.target.value);
}

const handleMonthChange = e =>{
    setBdayMonth(e.target.value)
}

const handleClick = () => {
    if(bday == "" || bdayMonth == ""){
        alert("Please fill out both fields");
    } else if(difference<90){
        navigate('/register/form');
    } else{
        alert("Please come back when your birthday is within 90 days. We look forward to seeing you then!")
    }
}

var today = new Date();
var bdayInt = parseInt(bday);
var bdayMonthInt = parseInt(bdayMonth);

var birthday = new Date(1985, bdayMonthInt-1, bdayInt);

birthday.setFullYear(today.getFullYear());
if (today > birthday) {
  birthday.setFullYear(today.getFullYear() + 1);
}

//Calculate difference between days
var difference = Math.floor((birthday - today) / (1000*60*60*24))


return (
    <div>
        <Navbar></Navbar>
        <BirthdayValidationStyled>
            <div className="birthdayBox">
                <h1>Enter Your Birthday</h1>
                <h4>If you are a minor, you need your parent's permission</h4>
                
                <label>Month:</label>
                <input type="text" 
                value={bdayMonth}
                onChange = {handleMonthChange}
                placeholder="mm"
                minLength="1"
                maxLength="2"></input>
                
                <label>Day:</label>
                <input type="text" 
                value={bday}
                onChange = {handleDayChange}
                placeholder="dd"
                minLength="1"
                maxLength="2"></input>
                <NextButton handleClick={handleClick}></NextButton>
            </div>
        </BirthdayValidationStyled>
    </div>
    );
}

export default BirthdayValidation;