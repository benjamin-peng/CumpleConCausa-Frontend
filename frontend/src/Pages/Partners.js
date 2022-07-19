import PartnerStyled from '../Styles/Partners.styled';
import Navbar from '../Components/Navbar';

const Partners = () => {
    return (
        <PartnerStyled>
            <Navbar></Navbar>
            <h2 id="top">Our partners make us who we are.</h2>
            <div id="banner">
                <p id="banner-caption">OUR PARTNERS</p>
            </div>
        </PartnerStyled>
    );
}
 
export default Partners;