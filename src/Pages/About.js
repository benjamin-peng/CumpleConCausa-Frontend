import person from '../Images/Mona.png';
import Navbar from '../Components/Navbar';
import AboutStyled from '../Styles/About.styled';
import LinkButton from '../Components/LinkButton';
import Bottom from '../Components/Bottom';
import partners from '../Images/Partners.png'
import flower from '../Images/Flower.png'

const About = () => {
    return (
        <AboutStyled>
            <Navbar></Navbar>
            <div className="horizontal">
                <div className="vertical">
                    <img src={flower} alt="flower" width = '400' height = '400'/>
                </div>
                <div className="vertical text">
                    <h1 className="caption">Nuestra misión</h1> {/*Our Mission */}
                    <p className="big-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="subinfo">
                <div className="horizontal">
                    <div className="vertical text">
                        <h2 className="caption">Nuestra fundadora: Monique</h2> {/*Our Founder */}
                        <p>Monique es una joven de 24 años amante del impacto social. En mayo del 2020, se graduó de la Universidad de Texas en Austin con los títulos: Sociología y Dimensiones Humanas Organizacionales. También, completó un diplomado en Emprendimiento Social y Manejo de ONG’s.
                            Recientemente, trabajó como Asesora del Despacho Superior en el Ministerio de Desarrollo Social (MIDES) del Gobierno Nacional de la República de Panamá y como Consultora de Genero en el Banco Interamericano de Desarrollo. En la actualidad, Monique promueve la importancia del impacto social juvenil a través de sus redes sociales, forma parte de la Junta Directiva de la organización Ni Uno Mas, es Coordinadora Nacional de Voluntariado en la Coalición VAMOS y trabaja como gestora de recaudación en el Museo de Arte Contemporáneo de Panamá.</p>
                        {/*Socióloga, Licenciada en Dimensiones Humanas Organizacionales, Especialista en Emprendimiento Social y Manejo de ONGs, Consultora de Desarrollo Social y principalmente, amante del impacto social.*/}
                    </div>
                    <div className="vertical">
                        <img src={person} alt="person" width = '300' height = '300' />
                    </div>
                </div>
                <div className="horizontal">
                    <div className="vertical">
                        <img src={partners} width = '650' height = '380'  />
                    </div>
                    <div className="vertical text">
                        <h2 className="caption">Nuestros compañeros</h2>
                        <p>Categorías de ONG socias:
                            ayudar a los niños
                            Familias que viven en la pobreza extrema
                            Mejores oportunidades de educación</p>
                        {/*Our partners:
                            Partner NGO categories:
                            Help children
                            Families that live in extreme poverty
                            Better education opportunities*/}
                        <LinkButton link={window.location.origin+"/partners"} 
                            text="Ver nuestros socios"> {/*View Our Partners*/}
                        </LinkButton>
                    </div>
                </div>
            </div>
            <Bottom />
        </AboutStyled>
    );
}
 
export default About;