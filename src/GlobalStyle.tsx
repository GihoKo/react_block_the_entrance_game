import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    *{
        --black-0: #ffffff;
        --black-1: #d8d7d7;
        --black-2: #a6a5a4;
        --black-3: #3c3d3e;
        --black-4: #0c0d0d;
        --black-5: #000000;
        box-sizing: border-box;
        margin : 0;
    }
    html,
    body {
        font-size: 62.5%;
    }
    a {
    text-decoration: none;
    cursor: pointer;
    }

    input {
    outline: none;
    border: none;
    padding: 0;
    }

    li {
    list-style: none;
    }
    
    button {
        border: none;
        background: none;
        border: 0;
        cursor: pointer;
    }
`;

export default GlobalStyle;
