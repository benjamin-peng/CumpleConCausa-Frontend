/*
takes String props { link, text } 
returns a button linking to the link with text set to text
*/
import LinkStyled from "../Styles/LinkButton.styled";
import { animated, useSpring } from 'react-spring';
import { useState } from 'react';

const LinkButton = ({ link, text }) => {

    const [hover, setHover] = useState(false);

    const handleEnter = () => {
        setHover(true);
    }

    const handleLeave = () => {
        setHover(false);
    }

    const style = useSpring({
        display: 'inline-block',
        transform: hover
          ? 'scale(1.1)'
          : 'scale(1)',
        config: {
            friction: 20,
            tension: 350
        },
      });

    return (
    <animated.div style={style}>
        <LinkStyled className="link-button">
            <a href={link} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>{text}</a>
        </LinkStyled>
    </animated.div>
    );
}
 
export default LinkButton;