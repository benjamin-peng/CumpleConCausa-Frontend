import {useState, useEffect} from 'react';
import cupcake from '../Images/cupcake.jpeg';
import hbd from '../Images/hbd.jpg';
import HomeStyled from '../Styles/Home.styled';
import Navbar from '../Components/Navbar';
import HomePageInfoBox from '../Components/HomePageInfoBox';
import styles from '../Styles/HomePage.style.css'
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <HomeStyled>
            <Navbar></Navbar>
            <h2 id="welcome">Welcome to Cumple Con Causa!</h2>
            <HomePageInfoBox picture={hbd}
            header="DEMO VIDEO"
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
            />
            <HomePageInfoBox picture={cupcake}
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
            <HomePageInfoBox picture={hbd}
            header="History"
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
            />
            <HomePageInfoBox picture={cupcake}
            header="Impact & Reach"
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
            />
            <Footer></Footer>
        </HomeStyled>
    );
}

export default Home;