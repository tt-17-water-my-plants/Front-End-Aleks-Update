import styled from 'styled-components'
import image from './images/login-image.png';

export const Container = styled.div`
    background-image: url(${image});
    background-size: cover;
    height: 90vh;

`
export const Form = styled.form`
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 35vh;
    
    h2 {
        font-size: 2.5rem;
        margin-top: 5%;
    }

    input { 
        border-radius: 20px;
        height: 35px;
        width: 250px;
        margin: 0;
    }

    button {
        border-radius: 20px;
        padding: 5px 15px;
        background-color: #E3DC95;
        margin-top: 5%;
        transition: all .3s ease-in-out;
        
        &:hover {
            transform: scale(1.2);
            cursor: pointer;
        }
    }
`