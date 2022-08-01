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
import Partners from './Pages/Partners';
import FAQs from './Pages/FAQs';
import HowItWorks from './Pages/HowItWorks';
import Testimonials from './Pages/Testimonials';
import ContactUs from './Pages/ContactUs';

function App() {

  const [valid, setValid] = useState(false); //true only when user data form has been filled out
  const [userData, setUserData] = useState({});
  const [charityCollection, setCharityCollection] = useState([]);
  //TODO:: make this an env variable
  const endpoint = 'http://localhost:5000/api/auth/register'; //replace w endpoint for server

  const setData = (d) => {
    setUserData(d);
  };

  const setCharity = (c) => {
    var copy = Object.assign({}, userData);
    copy.charity = c;
    setUserData(copy);
    console.log(copy);
  };

  const setCollection = (c) => {
    setCharityCollection(c);
  }
  
  const postUserData = () => {
    console.log(userData);
    fetch(endpoint, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userData)
    });
  };

  useEffect(() => {
    if (userData.charity) {
      postUserData();
    }
  }, [userData]);

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About userData={userData} />}></Route>
            <Route path="/howitworks" element={<HowItWorks userData={userData} />}></Route>
            <Route path="/partners" element={<Partners></Partners>}></Route>
            <Route path="/register/video" element={<VideoOne />}></Route>
            <Route path="/register/form" element={<Form setUserData={setData} setValid={setValid}/>}></Route>
            <Route path="/register/questionnaire" element={<Questionnaire setCollection={setCollection} valid={valid} postUserData={postUserData}/>}></Route>
            <Route path="/testimonials" element={<Testimonials userData={userData} />}></Route>
            <Route path="/register/done" element={<Endpage charityCollection={charityCollection} setCharity={setCharity} />}></Route>
            <Route path="/FAQs" element={<FAQs />}></Route>
            <Route path ="/contactus" element={<ContactUs/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
