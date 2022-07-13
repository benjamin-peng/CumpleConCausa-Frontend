import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Form from './Pages/Form';
import VideoOne from './Pages/VideoOne';
import Bottom from './Components/Bottom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Questionnaire from './Pages/Questionnaire';
import { useState, useEffect } from 'react';
import Endpage from './Pages/Endpage';

var userData = {};
const endpoint = 'http://localhost:3001/'; //replace w endpoint for server

const setUserData = (d) => {
  userData = d;
  console.log(d);
};

const setCharity = (c) => {
  userData.charity = c;
};

const postUserData = () => {
  fetch(endpoint, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(userData)
  });
};

function App() {

  const [valid, setValid] = useState(false); //true only when user data form has been filled out

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About userData={userData} />}></Route>
            <Route path="/register/video" element={<VideoOne />}></Route>
            <Route path="/register/form" element={<Form setUserData={setUserData} setValid={setValid}/>}></Route>
            <Route path="/register/questionnaire" element={<Questionnaire setCharity={setCharity} valid={valid} postUserData={postUserData}/>}></Route>
            <Route path="/register/done" element={<Endpage />}></Route>
          </Routes>
        </div>
        <Bottom />
      </div>
    </Router>
  );
}

export default App;
