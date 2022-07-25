import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        display: inline-flex;
    }
    img {
        width: 100px;
        max-height: 20vh;
        width: auto;
        margin: 20px 40px 20px 40px;
    }
    .partners-box {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100vw;
    }
    #top {
        margin-bottom: 20px;
    }
    #banner {
        background-color: #00334A;
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #banner-caption {
        color: white;
        font-size: 30px;
    }
`;