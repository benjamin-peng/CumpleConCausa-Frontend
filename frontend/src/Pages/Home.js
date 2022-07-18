import {useState, useEffect} from 'react';
import cupcake from '../Images/cupcake.jpeg';
import HomeStyled from '../Styles/Home.styled';
import Navbar from '../Components/Navbar';
import HomePageInfoBox from '../Components/HomePageInfoBox';
const Home = () => {
    return (
        <HomeStyled>
            <Navbar></Navbar>
            <h2 id="welcome">Welcome to Cumple Con Causa!</h2>
            <div className="columns">
                <div className="container">
                    <img src={cupcake}></img>
                </div>
                <div className="container">
                    <h2 id="caption">Work With an NGO to Make Your Birthday Special</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                </div>
            </div>
            <HomePageInfoBox></HomePageInfoBox>
        </HomeStyled>
    );
}

export default Home;