import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;

    .title-button {
        margin: 5%;
    }

    button {
        font-size: 1rem;
        border-radius: 20px;
        padding: 5px 20px;
        background-color: #E3DC95;
        transition: all .2s ease-in-out;
        margin: 5px;
        
        &:hover {
            transform: scale(1.1);
            cursor: pointer;
            background-color: #D3C0D2;
        }
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
        width: 90%;
        margin: 0 5%;
        height: auto;
    }
`
export const CardContainer = styled.div`
    height: 50%;
    width: 40%;
    margin: 0 5% 3%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid black;
    border-radius: 15px;
    box-shadow:  4px 2px 3px gray;

    img {
        width: 100%;
        height: 75%;
        border: 3px solid black;
        border-radius: 15px;
        object-fit: cover;
        margin-bottom: 5px;
    }
    
    p{
        font-size: .8rem;
    }

    button {
        border-radius: 20px;
        padding: 2px 4px;
        background-color: #E3DC95;
        transition: all .2s ease-in-out;
        margin: 5px;
        
        &:hover {
            transform: scale(1.1);
            cursor: pointer;
            background-color: #D3C0D2;
        }
    }
`