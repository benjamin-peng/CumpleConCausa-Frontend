import styled from 'styled-components';

export default styled.div`
    box-shadow: 0px 1px 4px grey;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    .navbar {
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 800px;
        border-bottom: 1px solid #f2f2f2;
    }
    .navbar h1 {
        color: #28b0bf;
    }
    .navbar .links {
        margin-top: 3px;
        display: flex;
        justify-content: center;
    }
    .navbar a {
        text-decoration: none;
        padding: 0 10px 0px 10px;
    }
    .navbar a:hover {
        color: #28b0bf;
    }
`;