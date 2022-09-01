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
            <h2 id="welcome">Bienvenidos a Cumple Con Causa!</h2>
            {/*Welcome to Cumple Con Causa */}
            <HomePageInfoBox picture={cupcake}
            header="DEMO VIDEO"
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
            />
            <HomePageInfoBox picture={mission}
            header="VISIÓN & Misión"
            text="
            VISIÓN:
            Que todas las personas consideren mejorar la sociedad redirigiendo la atención y la intención de sus cumpleaños hacia una causa social.
            Misión:
            Enseñarle a las personas a utilizar sus cumpleaños como una herramienta de gestión y cambio social positivo."
           />
            {/**/}
            <br></br>
            <div className='donationBox'>
                <h1 className='donationText'>¡Dona a CCC! ¡Compre un sombrero!</h1>
                {/*¡Dona a CCC! ¡Compre un sombrero!*/}
                <br></br>
                {/* NEED LINK FOR BUCKET HATS */}
                <a href="https://forms.gle/6FwHhKEAEiWtzh4R6">
                    <button className='donateButton'>Apoyo CCC</button> 
                    {/*Support CCC */}
                </a>
            </div>
            <br></br>
            <HomePageInfoBox picture={history}
            header="Historia"
            text="A nuestra fundadora, Mona, siempre le fascinó ser voluntaria y retribuir a la comunidad. Desde muy joven, todos los años, vio su cumpleaños como una oportunidad para hacer algo bueno y ser voluntaria. Decidió lanzar un piloto contactando a las personas interesadas en su idea a través de Instagram.
            El año pasado se celebraron más de 50 Cumple Con Causas durante la fase piloto. ¡Tenemos la ambición de escalar esta plataforma para permitir que todos hagan el bien en sus cumpleaños!"
            />
            {/*Our founder Mona was always fascinated in volunteering and giving back to the community. From a very young age, every year, she saw her birthday as an opportunity to do some good and volunteer. She decided to launch a pilot, by reaching out to people who are interested in her idea through Instagram.
            Last year over 50 Cumple Con Causas were celebrated during the pilot phase. We have the ambition to scale this platform to enable everyone to do good on their birthdays!
            */}
            <HomePageInfoBox picture={CCC}
            header="Impacto & alcance"
            text="Total Cumple Con Causas celebradas: 50+
            ONG asociadas: más de 30
            Fondos recaudados: $50K +
            Horas acumuladas de voluntariado: más de 500 horas
            Apariciones en medios: 10+"
            />
             {/* Total Cumple Con Causas celebrated:  50+
                NGO partners : 30+
                Funds raised: $50K +
                Cumulated Hours of volunteering: 500+ hours
                Media apparencies: 10+ */}
            <Slider></Slider>
            <Footer></Footer>
            <Bottom></Bottom>
        </HomeStyled>
    );
}

export default Home;