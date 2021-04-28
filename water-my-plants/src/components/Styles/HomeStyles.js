import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    

    button {
        font-size: 2rem;
        margin: 20px;
        border-radius: 20px;
        padding: 5px 15px;
        background-color: #E3DC95;
        
        &:hover {
            transform: scale(1.1);
            cursor: pointer;
        }
    }
    .image{
        display: block;
        width: 100%;
        margin-left: auto;
        margin-right: auto;

    }
    .imageContainer {
        width: 100%;
        margin-top: 15vh;
    }

`