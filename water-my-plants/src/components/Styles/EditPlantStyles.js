import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 80vh;
    
    form {
        margin-top: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 30%;
    }

    form input {
        border-radius: 10px;
        padding: 0 10px;
        margin: 0 10px;
    }
`