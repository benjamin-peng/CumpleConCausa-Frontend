import ngo_logo from "../Images/examplelogo.png";
import left from "../Images/left_arrow.png";
import right from "../Images/right_arrow.png";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../Components/Navbar';
import EndpageStyled from "../Styles/Endpage.styled";
import Bottom from '../Components/Bottom';

const Endpage = ({ charityCollection, setCharity }) => {
    
    const [ngos, setngos] = useState(charityCollection);

    const [cIndex, setCIndex] = useState(0); 

    useEffect(() =>{
        var tmp = ngos;
        tmp.sort(function(a,b) {
            return b.similarity - a.similarity;
        });
    
        for (var i = 0 ; i < tmp.length; i++) {
            if (charityCollection[0] < tmp[i].similarity) {
                charityCollection[0] = tmp[i];
            }
        }
        setngos(tmp);
    }, []);

    const ngoChange = (change) => {
        var newIndex = cIndex + change;
        if(newIndex < 0){
            newIndex = ngos.length-1;
        }
        else if(newIndex >= ngos.length){
            newIndex = 0;
        }
        setCIndex(newIndex);
    };

    const handleClick = () => {
        setCharity(ngos[cIndex].name);
    };

    return (  
        <EndpageStyled>
            <Navbar></Navbar>
            <div className="endpage">
                <h3>Awesome!</h3>
                <p>Based on your answers to our questions, we think you might like working with the following NGOs:</p>
                <div className="ngo">
                    <h3 className="ngotitle">Your #{cIndex+1} NGO</h3>
                    <div className="circle"><img src={ngo_logo}>
                        </img>
                    </div>
                    <b><p className="ngop">{ngos[cIndex].name}</p></b>
                    <p className="ngop">{ngos[cIndex].line1} {ngos[cIndex].line2} {ngos[cIndex].line3}</p>
                    <div className="arrows">
                        <input type="image" src={left} onClick={() => ngoChange(-1)}/>
                        <input type="image" src={right} onClick={() => ngoChange(1)}/>
                    </div>
                    <i><p className="ngop">I will pick this NGO: </p></i>
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