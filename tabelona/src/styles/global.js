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

    :root {
        /**** Colors ****/
        --color-logo: #5BC2E7;
        --color-bar-menu: #262631;

        /**** Font Family ****/
        --main-font-family: 'Roboto Mono', monospace;
    }
`

export default GlobalStyles;