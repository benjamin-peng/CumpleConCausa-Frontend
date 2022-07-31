import styled from "styled-components";
export default styled.div`

display: flex;
flex-direction: column;
align-items: center;
height: 100vh;

.vertical{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
}
.horizontal{
    margin-top: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}
.footer{
    margin-top: auto;

}`;