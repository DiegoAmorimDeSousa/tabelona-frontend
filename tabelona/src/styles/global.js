import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    body, html, ul, p {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    footer {
        width: 100%;
    }

    body, html {
        font-size: 16px;
        background: #131319;
        color: white;
        font-family: 'Roboto Mono', monospace;
    }

    img {
        object-fit: contain;
    }

    li {
        list-style: none;
        font-weight: bold;
        cursor: pointer;
    }

    input {
        width: 100%;
        border: none;
        border-radius: 40px;
        padding: 10px;
        box-sizing: border-box;
        outline: none;
    }

    button {
        padding: 10px;
        border: none;
        cursor: pointer;
        border-radius: 30px;
    }

    button:hover {
        background-color: #5BC2E7;
        border: solid 2px white;
        color: white;
        font-weight: bold;
    }

    :root {
        /**** Colors ****/
        --color-logo: #5BC2E7;
        --color-bar-menu: #262631;

        /**** Font Family ****/
        --main-font-family: 'Roboto Mono', monospace;
    }
`

export default GlobalStyles;