import styled from 'styled-components';

export default styled.div`

.header{
    display: flex;
    justify-content: center;
    align-items: center;
}

.infoBox{
    display: flex;
    /* border: solid; */
    height: auto;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 24px;
    padding-bottom: 24px;
}

.photoBox{
    display: flex;
    flex-direction: column;
    /* border: solid; */
    height: auto;
}

.textBox{
    display: flex;
    /* border: solid; */
    height: auto;
    width: 40%;
    flex-direction: column;
}

.linkButton{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 30px;
}
`;