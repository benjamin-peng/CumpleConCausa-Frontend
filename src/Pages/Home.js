import {useState, useEffect} from 'react';
import cupcake from '../Images/cupcake.jpeg';
import hbd from '../Images/hbd.jpg';
import HomeStyled from '../Styles/Home.styled';
import Navbar from '../Components/Navbar';
import HomePageInfoBox from '../Components/HomePageInfoBox';
import styles from '../Styles/HomePage.style.css'
import Footer from '../Components/Footer';
import Bottom from '../Components/Bottom';
import Testimonials from '../Components/Testimonials';
import Slider from '../Components/Slider';
import CCC from '../Images/CCC.png';
import history from '../Images/history.png';
import mission from '../Images/mission.png';

const Home = () => {
    return (
        <HomeStyled>
            <Navbar></Navbar>
            <h2 id="welcome">Welcome to Cumple Con Causa!</h2>
            <HomePageInfoBox picture={cupcake}
            header="DEMO VIDEO"
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
            />
            <HomePageInfoBox picture={mission}
            header="Our Vision & Mission"
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
            />
            <br></br>
            <div className='donationBox'>
                <h1 className='donationText'>Donate to CCC! Buy a Hat!</h1>
                <br></br>
                {/* NEED LINK FOR BUCKET HATS */}
                <a href="https://google.com">
                    <button className='donateButton'>Support CCC</button>
                </a>
            </div>
            <br></br>
            <HomePageInfoBox picture={history}
            header="History"
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
            />
            <HomePageInfoBox picture={CCC}
            header="Impact & Reach"
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
            />
            <Slider></Slider>
            <Footer></Footer>
            <Bottom></Bottom>
        </HomeStyled>
    );
}

export default Home;