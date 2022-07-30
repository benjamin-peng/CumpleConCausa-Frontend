import "./Endpage.css";
import ngo_logo from "./images/examplelogo.png";
import left from "./images/left_arrow.png";
import right from "./images/right_arrow.png";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Endpage = ({userData}) => {
    
    let ngos = userData.charity;

    let max = userData.charity[0];
    let second = userData.charity[0];

    ngos.sort(function(a,b) {
        return b.similarity - a.similarity
    });

    for (var i = 0 ; i < userData.charity.length; i++) {
        if (max < userData.charity[i].similarity) {
          max = userData.charity[i];
        }
    }

    return (  
        <div className="endpage">
            <h3>Awesome!</h3>
            <p>Based on your answers to our questions, we think you might like working with the following NGOs:</p>
            <div className="container"><div className="ngo">
                <h3 className="ngotitle">Your Top NGO</h3>
                <div className="circle"><img src={ngo_logo}></img></div>
                <br /><b><p className="ngop">{ngos[0].name}</p></b>
                <br /><p className="ngop">{ngos[0].line1}<br />{ngos[0].line2}<br />{ngos[0].line3}</p>
                <br /><br /><input type="image" src={left}/><input type="image" src={right}/>
                <br /><br /><i><p className="ngop">I will pick this NGO: </p></i>
                <select name="NGOs">
                    <option value="Example 1">{ngos[0].name}</option>
                    <option value="Example 2">{ngos[1].name}</option>
                    <option value="Example 3">{ngos[2].name}</option>
                </select>
                <br /><br /><br /><button className="ngobutton" type="button">CONFIRM</button>
            </div></div>
            <br /><p>Not happy with your recommendations? Retake the quiz <a href="/register/form">here</a> or view a complete list of NGOs <a href="/list">here</a>.</p>
        </div>
    );
}
 
export default Endpage;