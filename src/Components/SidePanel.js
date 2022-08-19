import SidePanelStyled from "../Styles/SidePanel.styled";
import { useSpring, animated } from 'react-spring';
import X from '../Images/x.png';
import { useEffect, useState } from "react";

const SidePanel = ({show, wait=0, file, name, changeShow}) => {

    const styles = useSpring({
        from: {
            opacity: show ? 0 : .95
        },
        to: {
            opacity: show ? .95 : 0
        },
        delay: wait,
        config: {
            tension: 200,
            friction: 20
        }
    });

    const handleClick = () => {
        changeShow(false);
    }

    const [z, setZ] = useState(-1);


    //dynamically change z index to make images under sidebar clickable
    //kinda jank but it works
    useEffect(() => {
        setZ(show ? 1 : -1);
    }, [show]);

    return (
        <div className="z-container" style={{zIndex: z}}>
            <SidePanelStyled as={animated.div} style={styles}>
            <img src={X} alt="close" id="x-button" onClick={handleClick}/>
            <div className="background">
                <img src={require(`../Images/PartnerLogos/${file}`)} alt="partner logo" />
            </div>
            <h3 id="top-caption">{name}</h3>
            <p id="descriptor-caption">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </SidePanelStyled>
        </div>
        
    );
}
 
export default SidePanel;