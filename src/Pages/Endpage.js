import ngo_logo from "../Images/examplelogo.png";
import left from "../Images/left_arrow.png";
import right from "../Images/right_arrow.png";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../Components/Navbar';
import EndpageStyled from "../Styles/Endpage.styled";
import Bottom from '../Components/Bottom';

const Endpage = ({ charityCollection, setCharity }) => {
    
    let ngos = charityCollection;

    let max = charityCollection[0];

    const [cIndex, setCIndex] = useState(0); 

    ngos.sort(function(a,b) {
        return b.similarity - a.similarity
    });

    for (var i = 0 ; i < ngos.length; i++) {
        if (max < ngos[i].similarity) {
          max = ngos[i];
        }
    }

    console.log(ngos);

    const formChange = (e) => {
        setCIndex(parseInt(e.target.value));
    };

    const handleClick = () => {
        setCharity(charityCollection[cIndex].name);
    };

    return (  
        <EndpageStyled>
            <Navbar></Navbar>
            <div className="endpage">
                <h3>Awesome!</h3>
                <p>Based on your answers to our questions, we think you might like working with the following NGOs:</p>
                <div className="ngo">
                    <h3 className="ngotitle">Your Top NGO</h3>
                    <div className="circle"><img src={ngo_logo}>
                        </img>
                    </div>
                    <b><p className="ngop">{ngos[0].name}</p></b>
                    <p className="ngop">{ngos[0].line1} {ngos[0].line2} {ngos[0].line3}</p>
                    <div className="arrows">
                        <input type="image" src={left}/>
                        <input type="image" src={right}/>
                    </div>
                    <i><p className="ngop">I will pick this NGO: </p></i>
                    <select name="NGOs" onChange={formChange}>
                        <option value="0">{ngos[0].name}</option>
                        <option value="1">{ngos[1].name}</option>
                        <option value="2">{ngos[2].name}</option>
                    </select>
                    <div className="ngoButton">
                        <button onClick={handleClick}>CONFIRM</button>
                    </div>
                </div>
                <p>Not happy with your recommendations? Retake the quiz&nbsp;
                    <a href="/register/form">here</a> or view a complete list of NGOs&nbsp;
                    <a href="/list">here</a>.
                </p>
            </div>
            <Bottom></Bottom>
        </EndpageStyled>
        
    );
}
 
export default Endpage;