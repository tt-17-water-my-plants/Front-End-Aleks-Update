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
        justify-content: space-between;
        align-items: center;
        width: 80%;
        height: auto;   
    }
    
@media screen and (max-width: 1331px) {
    .cards {
        width: 90%;
    } 
}
@media screen and (max-width: 1180px) {
    .cards {
        width: 70%;
    } 
}
@media screen and (max-width: 970px) {
    .cards {
        width: 85%;
    } 
}
@media screen and (max-width: 800px) {
    .cards {
        width: 60%;
    } 
}
`
export const CardContainer = styled.div`
    height: 350px;
    width: 300px;
    margin: 5% 2.5%;
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
        position: relative;
        margin-bottom:
    }

    button {
        border-radius: 20px;
        padding: 2px 4px;
        background-color: #E3DC95;
        transition: all .2s ease-in-out;
        margin: 5px;
        position: relative;
        
        &:hover {
            transform: scale(1.1);
            cursor: pointer;
            background-color: #D3C0D2;
        }
    }

    @media screen and (max-width: 800px) {
        margin: 5% auto;    
    }
`