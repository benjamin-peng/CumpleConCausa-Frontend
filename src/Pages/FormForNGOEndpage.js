import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Bottom from '../Components/Bottom';
import EndpageStyled from "../Styles/Endpage.styled";

const FormForNGOEndpage = () => {
    return (
        <EndpageStyled>
            <Navbar></Navbar>
            <h3>Thank you for completing our survey.</h3>
            <p>We will get back to your NGO as soon as possible! If you have any questions, please contact us.</p>
            <Bottom></Bottom>
        </EndpageStyled>
    );
}

export default FormForNGOEndpage;