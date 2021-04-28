import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: thistle;
    height: 10vh;
    width: auto;
    padding: 5% 0;


    .navLinks {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50%;
        height: 100%;  
    }

    .navLink {
        color: #583E23;  
    }
    .navLink:hover {
        border-bottom: 1px solid black;   
    }
    
    h1 {
        font-size: 3rem;
        font-family: 'Elsie Swash Caps';
        width: 50%;
        text-align: left;
        margin-left: 20px;
        color: #583E23;
    }

@media screen and (max-width: 800px) {
    .h1 {
        width: 80%;
    }

    .burger {
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
        margin-right: 20px;
        cursor: pointer;   
        
    }
    .line1, 
    .line2,
    .line3 {
        margin: 2px;
        background: black;
        padding: 2px;
        width: 25px;
        border-radius: 5px; 
        transition: all .5s ease-in-out;
        background-color: #583E23;
    }

    .navLinks {
        display: none;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background: linear-gradient(
            to bottom, rgb(211, 192, 210, 1),
            rgb(211, 192, 210, .3));
        position: absolute;
        right: 0px;
        top: 10vh;
        height: 100vh;
        width: 45%;
        transform: translateX(100%); 
        transition: transform .5s ease-in-out; 
    }
    .open{
        transform: translateX(0%);
        display: flex; 
    }

    .toggle .line1 {
        transform: rotate(45deg) translate(6px, 5px);

    }
    .toggle .line2 {
        transform: translateX(-50px);
        background: transparent;
    }
    .toggle .line3 {
        transform: rotate(-45deg) translate(6px, -5px);
    }
}
`

