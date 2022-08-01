import styles from '../Styles/HomePage.style.css'
import cupcake from '../Images/cupcake.jpeg';

function HomePageInfoBox({picture, header, text}) {
    return (
        <div className='infoBox'>
            <div className='photoBox'>
                <img src={picture}></img>
            </div>
            <div className='textBox'>
                <h1>{header}</h1>
                <br></br>
                <p>{text}</p>
            </div>
        </div>
      );
}

export default HomePageInfoBox;