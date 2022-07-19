import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .horizontal {
        display: flex;
        width: 70vw;
    }
    .vertical {
        height: 100%;
        width: 50%;
    }
    .text {
        padding: 0 20px 0 20px;
    }
    .caption {
        margin-bottom: 10px;
    }

`;