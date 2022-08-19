import PartnerStyled from '../Styles/Partners.styled';
import Navbar from '../Components/Navbar';
import Bottom from '../Components/Bottom';
import SidePanel from '../Components/SidePanel';
import { useState, useEffect } from 'react';

const Partners = () => {

    const importAll = (r) => {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item);});
        return images;
    };

    const images = importAll(require.context('../Images/PartnerLogos', false, /\.(png|webp|gif|jpe?g|svg)$/)); //imports all images
    const [show, setShow] = useState(false);
    const [file, setFile] = useState('AISP.png');
    const [name, setName] = useState('Aldeas Infantiles');

    const flipShow = () => {
        setShow(!show);
    };

    const changeShow = (val) => {
        setShow(val);
    };

    useEffect(() => {
        console.log(show)
    },
    [show]);

    const handleImgClick = (file, name) => {
        setName(name);
        setFile(file);
        setShow(true);
    }

    return (
        <PartnerStyled>
            <Navbar></Navbar>
            <h2 id="top">Our partners make us who we are.</h2>
            <div id="banner" onClick={flipShow}>
                <p id="banner-caption">OUR PARTNERS</p>
            </div>
            <div className="partner-row">
            <SidePanel show={show} file={file} name={name} changeShow={changeShow}></SidePanel>
                <div className="partners-box">
                    <img src={images['AISP.png']} alt="AISP" onClick={() => {
                        handleImgClick('AISP.png', 'Aldeas Infantiles')
                    }}/>
                    <img src={images['APLAFA.png']} alt="APLAFA"  onClick={() => {
                        handleImgClick('APLAFA.png', 'APLAFA Panama')
                    }}/>
                    <img src={images['BAP.png']} alt="BAP"  onClick={() => {
                        handleImgClick('BAP.png', 'Banco De Alimentos Panama')
                    }}/>
                    <img src={images['DAP.jpeg']} alt="DAP"  onClick={() => {
                        handleImgClick('DAP.jpeg', 'Defensores de Animales Panama')
                    }}/>
                    <img src={images['FCM.png']} alt="FCM"  onClick={() => {
                        handleImgClick('FCM.png', 'Fundacion Casita de Mausi')
                    }}/>
                    <img src={images['FHB.png']} alt="FHB"  onClick={() => {
                        handleImgClick('FHB.png', 'Hazme Brillar')
                    }}/>
                    <img src={images['FL.jpeg']} alt="FL"  onClick={() => {
                        handleImgClick('FL.jpeg', 'Fundacion Latidos')
                    }}/>
                    <img src={images['FRS.png']} alt="FRS"  onClick={() => {
                        handleImgClick('FRS.png', 'Fundacion Relaciones Sanas')
                    }}/>
                    <img src={images['FSC.png']} alt="FSC"  onClick={() => {
                        handleImgClick('FSC.png', 'Fundacion Soy Capaz')
                    }}/>
                    <img src={images['FTV.png']} alt="FTV"  onClick={() => {
                        handleImgClick('FTV.png', 'Fundacion Transicion a la Vida')
                    }}/>
                    <img src={images['FUN.png']} alt="FUN"  onClick={() => {
                        handleImgClick('FUN.png', 'Fundacion Unidos por la Ninez')
                    }}/>
                    <img src={images['GlobalGiving.png']} alt="GlobalGiving"  onClick={() => {
                        handleImgClick('GlobalGiving.png', 'Global Giving')
                    }}/>
                    <img src={images['LUCES.png']} alt="LUCES"  onClick={() => {
                        handleImgClick('LUCES.png', 'Lucha Contra la Epilepsia')
                    }}/>
                    <img src={images['NutreHogar.jpeg']} alt="Nutre Hogar"  onClick={() => {
                        handleImgClick('NutreHogar.jpeg', 'Nutre Hogar')
                    }}/>
                    <img src={images['PRM.jpeg']} alt="PRM"  onClick={() => {
                        handleImgClick('PRM.jpeg', 'Por Sonrisas Movimento')
                    }}/>
                    <img src={images['SesameWorkshop.svg']} alt="Sesame Workshop"  onClick={() => {
                        handleImgClick('SesameWorkshop.svg', 'Sesame Workshop')
                    }}/>
                    <img src={images['SomosPanama.png']} alt="Somos Panama"  onClick={() => {
                        handleImgClick('SomosPanama.png', 'Somos Panama')
                    }}/>
                    <img src={images['SpayPanama.webp']} alt="Spay Panama"  onClick={() => {
                        handleImgClick('SpayPanama.webp', 'Spay Panama')
                    }}/>
                    <img src={images['Techo.png']} alt="Techo"  onClick={() => {
                        handleImgClick('Techo.png', 'Techo')
                    }}/>
                    <img src={images['UnitedWay.jpeg']} alt="United Way"  onClick={() => {
                        handleImgClick('UnitedWay.jpeg', 'United Way')
                    }}/>
                    <img src={images['VVP.png']} alt="VVP"  onClick={() => {
                        handleImgClick('VVP.png', 'Voces Vitales Panama')
                    }}/>
                    <img src={images['ZP.png']} alt="ZP"  onClick={() => {
                        handleImgClick('ZP.png', 'Zeus Place')
                    }}/>
                    {/*
                    <a href="https://www.aldeasinfantiles.org.pa/">
                        <img src={images['AISP.png']} alt="AISP" />
                    </a>
                    <a href="https://aplafapanama.org/">
                        <img src={images['APLAFA.png']} alt="APLAFA" />
                    </a>
                    <a href="https://business.facebook.com/pg/bancodealimentospanama/posts/">
                        <img src={images['BAP.png']} alt="BAP" />
                    </a>
                    <a href="https://www.instagram.com/defensoresanimalespty/?hl=en">
                        <img src={images['DAP.jpeg']} alt="DAP" />
                    </a>
                    <a href="https://www.facebook.com/watch/?v=338206856803068">
                        <img src={images['FCM.png']} alt="FCM" />
                    </a>
                    <a href="https://www.hazmebrillar.org/">
                        <img src={images['FHB.png']} alt="FHB" />
                    </a>
                    <a href="https://www.facebook.com/LatidosPanama/">
                        <img src={images['FL.jpeg']} alt="FL" />
                    </a>
                    <a href="http://fundacionrelacionessanas.org/">
                        <img src={images['FRS.png']} alt="FRS" />
                    </a>
                    <a href="https://fundacionsoycapaz.org.pa/">
                        <img src={images['FSC.png']} alt="FSC" />
                    </a>
                    <a href="https://www.transicionalavida.org/develop/">
                        <img src={images['FTV.png']} alt="FTV" />
                    </a>
                    <a href="https://unidosporninez.org/">
                        <img src={images['FUN.png']} alt="FUN" />
                    </a>
                    <a href="https://www.globalgiving.org/">
                        <img src={images['GlobalGiving.png']} alt="Global Giving" />
                    </a>
                    <a href="https://www.facebook.com/fundacionlucespanama/">
                        <img src={images['LUCES.png']} alt="LUCES" />
                    </a>
                    <a href="https://www.nutrehogar.org/en/">
                        <img src={images['NutreHogar.jpeg']} alt="Nutre Hogar" />
                    </a>
                    <a href="https://www.facebook.com/movimientopormassonrisas/">
                        <img src={images['PRM.jpeg']} alt="PRM" />
                    </a>
                    <a href="https://www.sesameworkshop.org/">
                        <img src={images['SesameWorkshop.svg']} alt="Sesame Workshop" />
                    </a>
                    <a href="https://www.instagram.com/fundacionsomospanama/?hl=en">
                        <img src={images['SomosPanama.png']} alt="Somos Panama" />
                    </a>
                    <a href="http://www.spaypanamasanimals.org/">
                        <img src={images['SpayPanama.webp']} alt="Spay Panama" />
                    </a>
                    <a href="https://panama.techo.org/">
                        <img src={images['Techo.png']} alt="Techo" />
                    </a>
                    <a href="https://www.unitedway.org/local/panama">
                        <img src={images['UnitedWay.jpeg']} alt="United Way" />
                    </a>
                    <a href="https://www.vocesvitalespanama.org/">
                        <img src={images['VVP.png']} alt="VVP" />
                    </a>
                    <a href="https://zeusplace.com/">
                        <img src={images['ZP.png']} alt="ZP" />
                    </a>
                    */}
                </div>
            </div>
            <Bottom></Bottom>
        </PartnerStyled>
    );
}
 
export default Partners;