import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Form from './Form';
import VideoOne from './VideoOne';
import Bottom from './Bottom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Questionnaire from './Questionnaire';
import { useState, useEffect } from 'react';

var userData = {};

const setUserData = (d) => {
  userData = d;
  console.log(d);
};

const setCharity = (c) => {
  userData.charity = c;
  console.log(userData);
};

function App() {

  const [valid, setValid] = useState(false); //true only when user data form has been filled out

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About userData={userData} />}></Route>
            <Route path="/register/video" element={<VideoOne />}></Route>
            <Route path="/register/form" element={<Form setUserData={setUserData} setValid={setValid}/>}></Route>
            <Route path="/register/questionnaire" element={<Questionnaire setCharity={setCharity} valid={valid}/>}></Route>
          </Routes>
        </div>
        <Bottom />
      </div>
    </Router>
  );
}

export default App;
