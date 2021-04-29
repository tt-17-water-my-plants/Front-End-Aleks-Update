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
    .imageContainer {
        width: 100%;
        position: relative;
        top: 4px;
    }
    .image{
        width: 100%;
        height: 30vh;
        object-fit: cover;
    }
`