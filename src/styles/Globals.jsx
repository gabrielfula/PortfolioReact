import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
html {
  scroll-behavior: smooth;
}
  
  body {
    font-family: "Archivo";
    background-color: #040405;
    color: #fff;
    overflow-x: hidden;
    
    
    img {
    max-width: 100%;
    width: auto;
    height: auto;
  }
    


    @media(max-width: 1200px){
        font-size: 95.75%;

        img {
          width: 90%;
        }
    }

    @media(max-width: 720px){
        font-size: 87.75%;

        img {
          width: 100%;
        }

    }
  }

 
  button {
    cursor: pointer;
  }


  a {
    text-decoration: none;
     color: #fff; 

  }

`;

export const Themes = {
  colors: {
    white: "#ffff",
    white20: "#a0a0a0",
    pink: "#b300b3",
    primary: "#040405",
    secundary: "#161616",
    black40: "#040405c8",
    gray: "#838689",
  },
};
