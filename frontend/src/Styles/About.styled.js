import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .horizontal {
        display: flex;
        justify-content: space-between;
        width: 80vw;
        margin: 40px 0 40px 0;
    }
    .vertical {
        height: 100%;
        width: 45%;
    }
    .subinfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        background-color: rgb(250, 249, 245);
        border-top: 1px solid #d4d4d4;
        margin-top: 20px;
        padding: 20px 0 10vh 0;
    }
    .caption {
        margin-bottom: 10px;
    }
    .big-text {
        font-size: 18px;
    }
    .link-button {
        margin-top: 20px;
    }

`;