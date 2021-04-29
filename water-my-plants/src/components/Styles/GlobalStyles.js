import  { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        text-decoration: none;
        font-family: 'Montserrat Alternates'; 
    }

    body {
        overflow-x: hidden;
        background-color: #E3DCC2;
    }

    button {
        border-radius: 20px;
        padding: 5px 15px;
        background-color: #E3DC95;
        margin-top: 5%;
        box-shadow: 2px  1px 2px gray;
        transition: all .3s ease-in-out;
        
        &:hover {
            transform: scale(1.2);
            cursor: pointer;
        }
    }

    p{
        margin:.5rem;
    }
`