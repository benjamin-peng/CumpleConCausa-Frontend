import styled from "styled-components";

export default styled.div`
    width: 40vw;
    height: 100%;
    border: 1px solid black;
    position: absolute;
    right: 0;
    background-color: #202124;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em 2em;
    box-sizing: border-box; 
    .background {
        background-color: white;
        opacity: 1;
        margin-bottom: 1em;
    }
    #top-caption {
        color: white;
        opacity: 1;
    }
    #descriptor-caption {
        color: white;
        text-align: center;
        opacity: 1;
    }
    #x-button {
        position: absolute;
        width: 2em;
        top: 0;
        left: 0
    }
    #x-button:hover {
        cursor: pointer;
    }
`;