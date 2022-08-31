import ContactUsStyled from "../Styles/ContactUs.styled";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Bottom from '../Components/Bottom';

const ContactUs = () => {
    return (
        <ContactUsStyled>
            <Navbar></Navbar>
            <div className="vertical">
                <h1>Contacta con nosotros</h1> {/*Contact Us*/}
                <div className="horizontal">
                    <div className="textbox">
                        <h2>Correo</h2>
                        <h3>micumpleconcausa@gmail.com</h3>
                    </div>
                    
                    <div className="textbox">
                        <h2>Instagram</h2>
                        <h3>@cumpleconcausa</h3>
                    </div>
                    {/*
                    <div className="textbox">
                        <h2>sagewg</h2>
                        <h3>ajwbgkuawbgkuawg wagkubawuogbawguakw</h3>
                    </div>
                    */}
                </div>
            </div>
            <div className="footer">
                <Footer></Footer>
            </div>
            <Bottom></Bottom>
        </ContactUsStyled>
      );
}
 
export default ContactUs ;