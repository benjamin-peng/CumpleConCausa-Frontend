import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .columns {
        display: flex;
        justify-content: space-between;
        width: 80vw;
    }
    .container {
        max-width: 38vw;
    }
    #welcome {
        margin-bottom: 1.5rem;
        font-size: 2rem;
    }
    #caption {
        margin-bottom: 1rem;
    }
`;