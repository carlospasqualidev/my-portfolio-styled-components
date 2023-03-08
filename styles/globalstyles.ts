import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: ${({ theme }) => theme.cl.background};
    color: ${({ theme }) => theme.cl.white};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    scroll-behavior: smooth;
    box-sizing: border-box;
    padding: 0;
    margin: 0;


  }

  ul{
    list-style: none;
  }

  button {
    all: unset;
    cursor: pointer;  
  }
`;
