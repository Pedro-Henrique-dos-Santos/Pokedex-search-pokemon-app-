import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Manrope', sans-serif;
        font-size: 62.5%;
    }

    body{
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ul{
        list-style-type: none;
    }

    a{
        text-decoration: none;
    }

    img{
        width: 100%;
    }
`;

export { GlobalStyled };
