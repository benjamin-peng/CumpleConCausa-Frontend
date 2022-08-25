import styled from 'styled-components';

export default styled.div`
    display: flex;
    align-items: center;

    .text-danger {
        padding-bottom: 10px;
        color: rgb(255, 0, 0);
        font-size: 12px;
    }

    input {
        width: 100%;
        padding: 6px 10px;
        margin: 10px 0;
        border: 1px solid #ddd;
        box-sizing: border-box;
        display: block;
    }
`;