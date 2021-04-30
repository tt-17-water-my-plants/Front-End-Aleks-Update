import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    
    .icon {
        background: #583E23;
        border-radius: 50%;
        padding: 0 3%;
        
        box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.2); 

        &:first-child {
            font-size: 12rem;
            color: #E3DCC2;
        }
    }
    

    button {
        font-size: 2rem;
        margin: 20px 0 0 ;
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