import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .questionnaire {
        width: 80vw;
    }
    .questionnaire input {
        margin: 10px 0;
    }
    .questionText {
        padding-top: 10px;
    }
    .options label {
        padding-left: 10px;
    }
    .questionnaire select {
        position: fixed;
        bottom: 100;
        right: 560px;
    }
    .question {
        padding: 3px;
    }
    .questionnaire label {
        font-size: 14px;
    }
    .text-danger {
        padding-bottom: 10px;
        color: rgb(255, 0, 0);
        font-size: 12px;
    }
`;