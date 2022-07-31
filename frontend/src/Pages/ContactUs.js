import ContactUsStyled from "../Styles/ContactUs.styled";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ContactUs = () => {
    return (
        <ContactUsStyled>
            <Navbar></Navbar>
            <div className="vertical">
                <h1>Contact Us</h1>
                <div className="horizontal">
                    <div className="textbox">
                        <h2>vagaw</h2>
                        <h3>awkjvgbawkj awhguoiawhgouiawg uaighawoughawou</h3>
                    </div>
                    <div className="textbox">
                        <h2>gwagaw</h2>
                        <h3>ahegkuawhguwhgow akuwgawuoghabwugk uaghauwoghawoughaw</h3>
                    </div>
                    <div className="textbox">
                        <h2>sagewg</h2>
                        <h3>ajwbgkuawbgkuawg wagkubawuogbawguakw</h3>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer></Footer>
            </div>
        </ContactUsStyled>
      );
}
 
export default ContactUs ;