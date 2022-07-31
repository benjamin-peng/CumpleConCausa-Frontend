import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .endpage {
        width: 80vw;
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
    }
    .arrows {
        display: flex;
        justify-content: center;
    }
    .ngo{
        margin: 1rem 0 1rem 0;
        width: 50%;
        height: 500px;
        padding: 1rem 0 1rem 0;
        background: rgb(233, 233, 233);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        align-self: center;
        border-radius: 10px;
        box-shadow: 0px 4px 8px 0px rgb(139, 139, 139), 0px 4px 20px 0px rgb(139, 139, 139);
    }
    .circle{
        border-radius: 50%;
        height: 100px;
        width: 100px;
        overflow: hidden;
        display: block;
        justify-content: center;
        align-items: center;
    }

    .ngop{
        display: inline-block;
    }
    input{
        width:10%;
        margin: 10px 10px;
    }
    .ngobutton{
        width: 30%;
        margin: 0;
    }
`;