import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;

    h3 {
        margin-bottom: 0.5rem;
    }
    .form {
        width: 80vw;
    }
    .text-danger {
        padding-bottom: 10px;
        color: rgb(255, 0, 0);
        font-size: 12px;
    }
    .form p {
        padding-bottom: 10px;
    }
    .form input {
        width: 100%;
        padding: 6px 10px;
        margin: 10px 0;
        border: 1px solid #ddd;
        box-sizing: border-box;
        display: block;
    }
    .bottom {
        margin-top: auto;
    }
`;