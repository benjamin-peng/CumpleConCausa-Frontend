import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    h3 {
        margin-bottom: .5rem;
    }
    .bottom {
        margin-top: auto;
    }
    .form {
        display: flex;
        flex-direction: column;
        width: 80vw;
    }
    .video {
        margin: auto;
        padding: 10px;
        width: 700px; 
        height: 400px;
        max-width: 1050px;
    }

    iframe {
        width: 100%;
        height: 100%;
    }
`;